export default async function handler(req, res) {

  // 🔥 CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 🔥 gérer preflight (important)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // 👉 TON CODE NOTION ICI
    const posts = [
      {
        title: "test",
        media: ["https://via.placeholder.com/300"]
      }
    ];

    return res.status(200).json(posts);

  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
}
