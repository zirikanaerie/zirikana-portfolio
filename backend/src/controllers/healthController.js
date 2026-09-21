export function getHealth(req, res) {
  res.status(200).json({
    ok: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
}

export default { getHealth };
