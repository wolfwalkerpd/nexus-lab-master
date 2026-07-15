/**
 * Renders a JSON-LD structured-data block into the page's HTML (server-rendered,
 * so crawlers see it in the initial response). Accepts one schema object or an
 * array of them.
 *
 * The `<` → `<` escape prevents any content containing "</script>" (or other
 * markup) from breaking out of the script tag — Google's recommended safeguard.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // Content is our own static data, and `<` is escaped above.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
