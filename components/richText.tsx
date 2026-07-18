import Link from "next/link";
import { Fragment, type ReactNode } from "react";

// The blog body uses just two bits of inline markup — **bold** and
// [label](/path) links — so we parse that subset by hand rather than pull in a
// full markdown library. Internal links (starting with "/") use next/link for
// client-side navigation; anything else opens in a new tab.

function bold(text: string, keyBase: string): ReactNode[] {
  // split() with a capture group keeps the bold text; odd indices are bold.
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyBase}b${i}`} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      <Fragment key={`${keyBase}t${i}`}>{part}</Fragment>
    ),
  );
}

export function richText(input: string): ReactNode {
  const nodes: ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;

  while ((m = linkRe.exec(input)) !== null) {
    if (m.index > last) nodes.push(...bold(input.slice(last, m.index), `s${k}`));
    const label = m[1];
    const href = m[2];
    const internal = href.startsWith("/");
    nodes.push(
      internal ? (
        <Link
          key={`l${k}`}
          href={href}
          className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`l${k}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
        >
          {label}
        </a>
      ),
    );
    last = linkRe.lastIndex;
    k++;
  }
  if (last < input.length) nodes.push(...bold(input.slice(last), `s${k}`));
  return nodes;
}
