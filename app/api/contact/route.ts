import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, service, message } =
      await request.json();

    if (!name || !email || !service || !message) {
      return Response.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const receivedAt = new Date().toLocaleString("en-SG", {
      timeZone: "Asia/Singapore",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const { error } = await resend.emails.send({
      from: "Nurul-Awal Website <enquiry@nurulawal.com.sg>",
      to: "nurulawalcs@gmail.com",
      subject: `New Website Enquiry - ${service}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; background:#fbf7ef; padding:32px;">
          <div style="max-width:680px; margin:auto; background:white; border-radius:18px; overflow:hidden; border:1px solid #d8b75b;">
            
            <div style="background:#063f24; padding:28px; color:white;">
              <h1 style="margin:0; font-size:26px;">New Website Enquiry</h1>
              <p style="margin:8px 0 0; color:#d8b75b;">Nurul-Awal Consultants & Services</p>
            </div>

            <div style="padding:28px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company || "-"}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "-"}</p>
              <p><strong>Service Interested In:</strong> ${service}</p>

              <hr style="border:none; border-top:1px solid #eee; margin:24px 0;" />

              <p style="margin-bottom:8px;"><strong>Message:</strong></p>
              <div style="background:#fbf7ef; padding:18px; border-radius:12px; line-height:1.7;">
                ${message.replace(/\n/g, "<br/>")}
              </div>

              <p style="margin-top:28px; color:#777; font-size:14px;">
                Received on ${receivedAt}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}