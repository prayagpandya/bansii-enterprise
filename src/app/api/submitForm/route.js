import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { JobSkillOpp } from "@/DB/Model/Job";
import { dbConnect } from "@/DB/dbConnect";
import { NextResponse } from "next/server";
import os from "os";
import { Readable } from "stream";
import { sendMailResume } from "@/DB/utils/mailer";
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
  auth: new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ["https://www.googleapis.com/auth/drive"]
  ),
});

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.formData();
    const { name, email, number, message } = Object.fromEntries(data.entries());
    const file = data.get("pdf");
    if (!file) {
      return NextResponse.json({
        status: 400,
        message: "Please upload a file",
      });
    }
    const fileName = file.name;
    const fileBuffer = await file.arrayBuffer();
    const fileSize = fileBuffer.byteLength;
    const buffer = Buffer.from(fileBuffer);
    const fileStream = new Readable();
    fileStream.push(buffer);
    fileStream.push(null);
    const driveResponse = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: ["1cy7mKICjJ9hf6Z3YujuYg1VF4y4TVQCZ"],
      },
      media: {
        mimeType: "application/pdf",
        body: fileStream,
      },
    });

    const fileUrl = `https://drive.google.com/file/d/${driveResponse.data.id}/view`;

    const formData = {
      name,
      email,
      number,
      message,
      pdf: fileUrl,
    };
    if (!formData.pdf) {
      return NextResponse.json({
        status: 400,
        message: "File URL not found",
      });
    }
    const createdData = await JobSkillOpp(formData);
    await createdData.save(); // Save data to MongoDB
    await sendMailResume(formData);
    return NextResponse.json({
      status: 200,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({
      status: 500,
      message: "Error uploading file",
    });
  }
}

export async function GET() {
  try {
    await dbConnect(); // Ensure database connection

    const data = await JobSkillOpp.find(); // Fetch data from JobSkillOpp model

    return NextResponse.json({
      status: 200,
      message: "Data fetched successfully",
      data, // Return the fetched data
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({
      status: 500,
      message: "Error fetching data",
    });
  }
}
