import React from "react";

interface SquareDivProps {
  children: React.ReactNode;
  ratio?: number;
  background?: string;
}

export default function SquareDiv({
  background,
  ratio = 1,
  children,
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
