import fs from "node:fs";
import path from "node:path";
import ClientEffects from "./client-effects";

export const dynamic = "force-static";

function getLandingMarkup() {
  const file = path.join(process.cwd(), "public", "landing.html");
  const html = fs.readFileSync(file, "utf8");
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!match) throw new Error("Không đọc được nội dung landing page.");
  return match[1].replace(/<script[\s\S]*?<\/script>/gi, "");
}

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: getLandingMarkup() }} />
      <ClientEffects />
    </>
  );
}
