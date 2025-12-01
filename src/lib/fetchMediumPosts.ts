interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  guid: string;
  content: string;
}

export const fetchMediumPosts = async () => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/blackspektro"
  );
  const data = await res.json();

  if (data.status !== "ok") throw new Error("Failed to fetch blog posts");

  return data.items.map((item: MediumPost, index: number) => {
    const imageMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
    const image = imageMatch ? imageMatch[1] : null;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = item.content;
    const textContent = tempDiv.textContent || "";
    const description = textContent.slice(0, 150) + "...";

    // Extract a clean ID from the Medium URL
    let id = `post-${index}`;
    if (item.guid) {
      const urlMatch = item.guid.match(/\/p\/([a-zA-Z0-9]+)/);
      if (urlMatch) {
        id = urlMatch[1];
      } else {
        const altMatch = item.guid.match(/-([a-zA-Z0-9]+)$/);
        if (altMatch) {
          id = altMatch[1];
        }
      }
    }

    return {
      id,
      title: item.title,
      description,
      image,
      content: item.content,
      pubDate: item.pubDate,
      readingTime:
        Math.max(1, Math.ceil(textContent.split(/\s+/).length / 200)) +
        " min read",
      link: item.link,
    };
  });
};
