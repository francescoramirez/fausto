import { briefMarkdown } from "@/content/brief";

export function GET() {
  return new Response(briefMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mirra-brief.md"',
    },
  });
}
