import { parse } from "@bbob/parser";
import render from "@bbob/html";

export function bbcodeToHtml(input?: string): string {
  if (!input || input.trim() === "") {
    return "";
  }

  // Convert Hubzilla custom tags first
  let processed = input
    .replace(/\[zmg\](.*?)\[\/zmg\]/g, '<img src="$1" />')
    .replace(/\[zrl\](.*?)\[\/zrl\]/g, '<a href="$1">$1</a>');

  try {
    const ast = parse(processed);
    return render(ast);
  } catch (e) {
    console.warn("BBCode parse error:", e);
    return processed;
  }
}
