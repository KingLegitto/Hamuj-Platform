import { FC } from "react";

interface RoundArrowProps {
  className?: string;
  fill?: string
}

const RoundArrow: FC<RoundArrowProps> = ({ className, fill }) => {
  return (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.29016 0.71L0.700159 3.3C0.607456 3.39251 0.533908 3.5024 0.483727 3.62338C0.433545 3.74435 0.407715 3.87403 0.407715 4.005C0.407715 4.13597 0.433545 4.26565 0.483727 4.38662C0.533908 4.5076 0.607456 4.61749 0.700159 4.71L3.29016 7.3C3.92016 7.93 5.00016 7.48 5.00016 6.59V1.41C5.00016 0.52 3.92016 0.08 3.29016 0.71Z"
        fill={fill? fill:'black'}
      />
    </svg>
  );
};

export default RoundArrow;
