import React from "react";

interface SquareDivProps {
  children: React.ReactNode;
  ratio?: 2 | 1.5 | 1 | 0.7 | 0.6 | 0.5;
  background?: string;
}

export default function SquareDiv({
  background,
  ratio = 1,
  children
}: SquareDivProps) {
  return (
    <div
      className="square-div"
      style={{ background, paddingTop: `${100 * ratio}%` }}
    >
      <div className="square-div_fixed-layer">
        <div className="square-div_normal-layer">{children}</div>
      </div>
    </div>
  );
}
