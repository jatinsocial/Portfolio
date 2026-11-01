// Section title with one word in a purple selection frame and a pen-tool nib, like a layer picked in a design tool.
export default function SelHeading({ lead, word, as: Tag = "h2" }: { lead: string; word: string; as?: "h1" | "h2" }) {
  return (
    <Tag className="work-heading sel-heading">
      <span>{lead}</span>
      <span className="sel">
        {word}
        <i className="cr tl" aria-hidden />
        <i className="cr tr" aria-hidden />
        <i className="cr bl" aria-hidden />
        <i className="cr br" aria-hidden />
        <svg className="pen" viewBox="0 0 36 36" aria-hidden>
          {/* Pen-tool nib: drawn pointing up, rotated so the tip points up-left */}
          <g transform="translate(16 16) rotate(-45)">
            <path
              d="M0 -13 C3.5 -7 8.5 -3 8.5 3 L8.5 7 Q8.5 10.5 5 10.5 L-5 10.5 Q-8.5 10.5 -8.5 7 L-8.5 3 C-8.5 -3 -3.5 -7 0 -13 Z"
              fill="#f5a623" stroke="#1d1d1f" strokeWidth="1.8" strokeLinejoin="round"
            />
            <path d="M0 -10 L0 -1.6" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="0" cy="1.4" r="2.4" fill="#fff" stroke="#1d1d1f" strokeWidth="1.5" />
          </g>
          <rect x="25" y="26" width="8.5" height="5" rx="2.5" transform="rotate(40 29 28.5)" fill="#f5a623" stroke="#1d1d1f" strokeWidth="1.5" />
        </svg>
      </span>
    </Tag>
  );
}
