module.exports = async (req, res) => {

  // ✅ CORS (obligatoire)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // 👉 TEST DATA (on simplifie pour que ça marche sûr)
    const posts = [
      {
        title: "Post 1",
        media: ["https://via.placeholder.com/300"]
      },
      {
        title: "Carousel",
        media: [
          "https://via.placeholder.com/300",
          "https://via.placeholder.com/301"
        ]
      }
    ];

    res.status(200).json(posts);

  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
