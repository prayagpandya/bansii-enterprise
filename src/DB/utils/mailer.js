import nodemailer from "nodemailer";

export const sendEmailForPayment = async (userData) => {
  try {
    const { username, email, number, message } = userData;
    if (!userData) {
      return {
        status: 400,
        message: "User not found",
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "sureshkhetani1111@gmail.com",
        pass: "odag xwxb iezq lgcb",
      },
    });

    // Determine the recipient email based on the coupon code
    let toEmail; // Default email
    let name = "Prayagraj Pandya";
    toEmail = "sureshkhetani1111@gmail.com";

    const mailOptions = {
      from: "sureshkhetani1111@gmail.com",
      to: toEmail,
      subject: "New Contact Inquiry - Bansi Enterprise",
      html: `<p>Hello ${name},</p>
      <p>You have received a new contact inquiry from ${username || userData.name}.</p>
      <p>User Details</p>
      <ul>
          <li>Name: ${username || userData.name}</li>
          <li>Email: ${email}</li>
          <li>Number: ${number}</li>
          <li>Message: ${message}</li>
      </ul>
      <p>Best Regards,
      <br />
      Bansi Enterprise</p>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log("Email sent:", mailResponse);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(error.message);
  }
};

export const sendMailContact = async (userData) => {
  try {
    if (!userData) {
      return {
        status: 400,
        message: "User not found",
      };
    }

    const { name, email, number, message } = userData;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "sureshkhetani1111@gmail.com",
        pass: "odag xwxb iezq lgcb",
      },
    });

    const recipientName = "Prayagraj Pandya";
    const toEmail = "sureshkhetani1111@gmail.com";

    const mailOptions = {
      from: "sureshkhetani1111@gmail.com",
      to: toEmail,
      subject: "New Contact Inquiry - Bansi Enterprise",
      html: `<p>Hello ${recipientName},</p>
      <p>You have received a new contact inquiry from ${name}.</p>
      <p>User Details</p>
      <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Number: ${number}</li>
          <li>Message: ${message}</li>
      </ul>
      <p>Best Regards,
      <br />
      Bansi Enterprise</p>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log("Email sent:", mailResponse);
  } catch (error) {
    console.error("Error sending email:", error.message);
    throw new Error(error.message);
  }
};

export const sendMailResume = async (userData) => {
  try {
    const { name, email, number, message, pdf } = userData;
    if (!userData) {
      return {
        status: 400,
        message: "User not found",
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "sureshkhetani1111@gmail.com",
        pass: "odag xwxb iezq lgcb",
      },
    });

    // Determine the recipient email based on the coupon code
    let toEmail; // Default email
    let Username = "Prayagraj Pandya";
    toEmail = "sureshkhetani1111@gmail.com";

    const mailOptions = {
      from: "sureshkhetani1111@gmail.com",
      to: toEmail,
      subject: "Job Application Received - Bansi Enterprise",
      html: `<p>Hello ${Username},</p>
      <p>${name} has submitted a job application.</p>
      <p>User Details</p>
      <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Number: ${number}</li>
          <li>Message: ${message}</li>
          <li>Resume: ${pdf}</li>
      </ul>
      <p>Best Regards,
      <br />
      Bansi Enterprise</p>
      `,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(error.message);
  }
};
