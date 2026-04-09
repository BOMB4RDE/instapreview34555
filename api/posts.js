module.exports = async (req, res) => {

  // ✅ CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const posts = [
      {
        title: "test",
        media: ["https://via.placeholder.com/300"]
      }
    ];

    res.status(200).json(posts);

  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
