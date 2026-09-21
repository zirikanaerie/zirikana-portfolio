import { sendContactEmail } from "../services/mailer.js";

export async function postContact(req, res) {
  const { name, email, phone, message } = req.validated;

  try {
    const result = await sendContactEmail({ name, email, phone, message });

    if (!result.sent && result.reason === "not_configured") {
      // Email isn't configured on this deployment. Respond with a
      // distinct status so the frontend can show WhatsApp/email
      // fallbacks instead of a generic error.
      return res.status(503).json({
        ok: false,
        reason: "email_not_configured",
        message:
          "Direct messaging isn't configured yet. Please use WhatsApp or email instead.",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Message sent successfully.",
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Contact email failed to send:", err.message);
    return res.status(502).json({
      ok: false,
      message:
        "Could not send your message right now. Please try WhatsApp or email directly.",
    });
  }
}

export default { postContact };
