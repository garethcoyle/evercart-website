import { type CSSProperties, type ReactNode } from "react";

// A table for the legal pages. The first cell of each row heads the row.
//
// On a phone (below 640px) each row becomes a small card: the row's heading
// first, then each cell under its column's name (the CSS in app/globals.css
// reads it from data-label). The explicit ARIA roles keep the table's meaning
// for screen readers when the cells are laid out as blocks.
//
// From 640px up it is an ordinary table. A table given a minWidth scrolls
// sideways inside its frame when the column is narrower than that, and the
// frame takes keyboard focus so it can be scrolled without a pointer.
export function LegalTable({
  id,
  label,
  head,
  rows,
  minWidth,
}: {
  id: string;
  label: string;
  head: string[];
  rows: ReactNode[][];
  minWidth?: number;
}) {
  const captionId = `${id}-caption`;
  const style = minWidth
    ? ({ "--legal-table-min": `${minWidth}px` } as CSSProperties)
    : undefined;
  return (
    <div
      role="region"
      aria-labelledby={captionId}
      tabIndex={0}
      className="legal-table"
    >
      <table role="table" style={style}>
        <caption id={captionId} className="sr-only">
          {label}
        </caption>
        <thead role="rowgroup">
          <tr role="row">
            {head.map((h) => (
              <th key={h} scope="col" role="columnheader">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((cells, i) => (
            <tr key={i} role="row">
              {cells.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" role="rowheader">
                    {cell}
                  </th>
                ) : (
                  <td key={j} role="cell" data-label={head[j]}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
