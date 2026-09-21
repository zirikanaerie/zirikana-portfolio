const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str) {
  return String(str)
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

export function validateContactPayload(req, res, next) {
  const body = req.body || {};
  const name = sanitize(body.name || "");
  const email = sanitize(body.email || "");
  const phone = body.phone ? sanitize(body.phone) : "";
  const message = sanitize(body.message || "");

  const errors = [];

  if (!name || name.length < 2) {
    errors.push("Please provide your name.");
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.push("Please provide a valid email address.");
  }
  if (!message || message.length < 5) {
    errors.push("Please include a short message.");
  }
  if (phone && phone.length > 30) {
    errors.push("Phone number is too long.");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      ok: false,
      message: errors[0],
      errors,
    });
  }

  req.validated = { name, email, phone, message };
  next();
}

export default validateContactPayload;
