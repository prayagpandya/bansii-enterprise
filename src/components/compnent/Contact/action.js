"use server";
import { dbConnect } from "@/DB/dbConnect";
import { ContactData } from "@/DB/Model/FetchDataSchema";
import { sendMailContact } from "@/DB/utils/mailer";

const submitContact = async (data) => {
  try {
    await dbConnect();
    const userData = await ContactData.create(data);
    console.log("Data submitted successfully", data);
    await sendMailContact(userData);
    return { status: 200, message: "Data submitted successfully" };
  } catch (error) {
    return { status: 500, message: "Error submitting data" };
  }
};

export default submitContact;
