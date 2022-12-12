import React, { memo } from "react";

interface AlphaIndexProps {
  alpha: string;
  onClick: (alpha: string) => void;
}

export const AlphaIndex: React.FC<AlphaIndexProps> = memo(function AlphaIndex(
  props
) {
  const { alpha, onClick } = props;

  return (
    <i className="city-index-item" onClick={() => onClick(alpha)}>
      {alpha}
    </i>
  );
});
