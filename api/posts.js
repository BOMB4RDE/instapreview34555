export default async function handler(req, res) {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DATABASE_ID = process.env.DATABASE_ID;

  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json"
    }
  });

  const data = await response.json();

  const posts = data.results.map(page => {
    const props = page.properties;

    return {
      title: props.Title.title[0]?.plain_text || "",
      type: props.Type.select?.name || "image",
      media: props.Media.files.map(f => f.file?.url || f.external?.url),
      description: props.Description.rich_text[0]?.plain_text || ""
    };
  });

  res.status(200).json(posts);
}
