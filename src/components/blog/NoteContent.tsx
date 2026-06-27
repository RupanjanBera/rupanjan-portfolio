import { ContentBlock } from "@/data/blog";
import { cn } from "@/lib/utils";

export function NoteContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="note-prose space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-base leading-[1.8] text-navy/75 md:text-lg">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="font-display pt-4 text-xl font-bold tracking-tight text-navy md:text-2xl"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base leading-relaxed text-navy/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className={cn(
                  "relative rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 to-indigo-50/50 px-6 py-5",
                  "text-base font-medium italic leading-relaxed text-navy/80 md:text-lg"
                )}
              >
                <span className="absolute -left-1 top-4 h-8 w-1 rounded-full bg-gradient-to-b from-violet-500 to-indigo-500" />
                &ldquo;{block.text}&rdquo;
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}