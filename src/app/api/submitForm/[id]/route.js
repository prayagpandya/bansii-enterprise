import { NextResponse } from "next/server";
import { JobSkillOpp } from "@/DB/Model/Job";
import { dbConnect } from "@/DB/dbConnect";
import mongoose from "mongoose";
import { google } from "googleapis";

// Load the service account credentials
const credentials = {
  type: "service_account",
  project_id: "dataskillshub",
  private_key_id: "f68a24f1268902e831cb4e4d4640feee3f035757",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC88Gpfy50uyost\nsVBf3Skfe9yfejQyca5pX+B2TYtvwdLOQgbCtS+G3NDFdh8fzbgmkoDx3XP0r+Rb\nyT1rgNPNmrxQeL+kFZ3X8Tht9tqQm2GRNkNiDo5ZxQBw8oqPZBdfnMZdkJ4GwW0x\nC+H6VPO8HDcFony7tMqZ/MqjREU119xlo9hTkQFElPCdUEKN345o/UxefWBy/FtI\nQOID/viEtaJBusBBFaSq+CkGsSH+qUH042GrtNsJHctjM1+NRt3PR/PfOaVLoTq3\nmklclA14M3YbmQ6IhTyMZgCSFpth573+ZJVfHBybBH3rWqtc/ziVnx9DcqrrWoDO\njDDr7BCLAgMBAAECggEACG1EoU8ojIy2FmyhJBVuHxxcI7TEnTdayxJepYgh3vMr\nHs3tFUQVgZNZsGTrUHTRcM7590+kO1aY/csE9UWCrNno6kHocj4QkzAMD0OCTg7Q\nFDTyXm49xR03PtJigbC6JiaM5mFr2utHnndkNdESKeKsRZEQtSKEIsgWlZ+W4qbR\naIp7Ob/upqBF4HFtwdFbgsRaf9cVV7ANpsYUlKDiwlB8PNLYxqAIv7OIQ/O1wxtt\nhVoFKmnm4SQNziBhEiWR5DIl0LwjyZnEZUPZkHMTUyCTaSdxWU89bbZps2dDP2fZ\npTUsF894HJiw0JdrbGURsTRNpNn+JrEpTrnU7eSuwQKBgQDkuOx2ZIhzmU3RgHLm\nC/7cda1owpEBOlUoVgbmqMNDmK2pTrGKtD4+pr2QTTFaevCDKJ6FKqrDo5YoTx5b\nzCLmhdEqbI9lftaWntYXIlDcj9G7zPbuXTQMdQcn/NKhTPXDR1UBO3SZPMnXR6s5\nt03GEJtEjPUfXnrfgywsjtGFoQKBgQDTeOC9yUWmZ9jQDT+cKEWlxAey5Z2e00l1\nFc7Wxd3JIr9+kkBVNpcrL2G/kXoGJrGYob6kPSh015EDUH87wqkseCQyYWpbUr4H\nlhLb7w/M9bPrYFZpUj0+BVe3Ow9fASSvNwh1T+vVVqB4z0e/FddzMkBMd6OOHiS7\nUOFnngkOqwKBgQCCDq1XPR9iLGBVquaq7VNE5R1wHoL54cOephxSeNBf1aeaSIco\nSgnC8mmEboCL5LByxFwveO2VRaYS0bp/lHqb/qfLqeN4YUGAcF1o1jiI0rb+RTR8\noj8AfmNNV7QlyG9PVXZ+tuI8aJaVdclljlgJMlQ4DLct2TmhcyNhSuzVQQKBgQCB\nI17y5rde0CnJm12N6dXmTZh5+dhQRiykkIW4CCrRCiQwkfUxVF3qJEwn5RnEKdro\nH1XBDAvplj5a7MxV3SDcJB3OmkiNrjCXh2DK5+kZO638fd8m/+6gMjkHjsxrMtKJ\nIS1MHlsg836ZZ9MjcJ4aHcTALYs2XVgG/3Q2h352cwKBgDWqcMdTFclJxPZZ2CS2\n1i4HJ0M0IeD+A6ZmxbS04G/2s9H7NUIicFdUhtZZZ9naNrikZR907fYilM13xCqV\nKeUTEaJx4F/xpAPkLc3aHxe9IbsrD6Gsea4gknAnyA6fAjk0VtYBNvJhlIj4sY+L\neCNqWhmXz4X6p9mwNszRnzi4\n-----END PRIVATE KEY-----\n",
  client_email: "meetkhetani@dataskillshub.iam.gserviceaccount.com",
  client_id: "106408261778539847967",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/meetkhetani%40dataskillshub.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

// Create a new instance of Google Drive API
const drive = google.drive({
  version: "v3",
  auth: new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/drive"],
  }),
});

export async function DELETE(req, { params }) {
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ status: 400, message: "Invalid ID" });
  }

  try {
    await dbConnect();
    // Fetch the document to get the file URL
    const document = await JobSkillOpp.findById(id);
    if (!document) {
      return NextResponse.json({ status: 404, message: "Data not found" });
    }

    const fileUrl = document.pdf; // Replace with the actual field name

    // Extract the file ID from the Google Drive file URL
    const fileId = fileUrl.match(/\/d\/([a-zA-Z0-9_-]+)/)[1];
    if (!fileId) {
      return NextResponse.json({
        status: 400,
        message: "File ID not found in URL",
      });
    }

    // Delete the file from Google Drive
    await drive.files.delete({
      fileId: fileId,
    });

    // Delete the document from the database
    await JobSkillOpp.findByIdAndDelete(id);

    return NextResponse.json({
      status: 200,
      message: "Data and associated file deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
}

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await dbConnect();
    const data = id ? await JobSkillOpp.findById(id) : await JobSkillOpp.find();
    return NextResponse.json({
      status: 200,
      message: "Data fetched successfully",
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
