import { PhoneCall } from "lucide-react";

const Icons = {
  call: PhoneCall,
  check: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" {...props}>
      <path
        d="M38.5 92.899a6.457 6.457 0 0 1-4.596-1.904l-30-30C2.676 59.769 2 58.136 2 56.399s.677-3.37 1.905-4.598l9.898-9.898C15.031 40.676 16.663 40 18.399 40s3.368.676 4.596 1.904L38.5 57.408l40.5-40.5c1.228-1.228 2.86-1.904 4.596-1.904s3.368.676 4.596 1.904l9.899 9.899c1.227 1.227 1.904 2.859 1.904 4.596s-.677 3.37-1.905 4.598L43.096 90.996a6.46 6.46 0 0 1-4.596 1.903z"
        opacity={0.35}
      />
      <path
        fill="#f2f2f2"
        d="M36.5 90.899a6.457 6.457 0 0 1-4.596-1.904l-30-30C.676 57.769 0 56.136 0 54.399s.677-3.37 1.905-4.598l9.898-9.898C13.031 38.676 14.663 38 16.399 38s3.368.676 4.596 1.904L36.5 55.408l40.5-40.5c1.228-1.228 2.86-1.904 4.596-1.904s3.368.676 4.596 1.904l9.899 9.899c1.227 1.227 1.904 2.859 1.904 4.596s-.677 3.37-1.905 4.598L41.096 88.996a6.46 6.46 0 0 1-4.596 1.903z"
      />
      <path
        fill="#96c362"
        d="m36.5 84.399-30-30 9.899-9.899L36.5 64.601l45.097-45.097 9.899 9.899z"
      />
      <path
        fill="none"
        stroke="#40396e"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={3}
        d="m36.5 84.399-30-30 9.899-9.899L36.5 64.601l45.097-45.097 9.899 9.899z"
      />
    </svg>
  ),
};

export function Icon({ size = 16, icon = "", iconColor, strokeWidth = 2 }) {
  const CurrentIcon = Icons[icon];

  if (!CurrentIcon) return null;

  return (
    <CurrentIcon
      size={size}
      color={iconColor}
      height={size}
      width={size}
      strokeWidth={strokeWidth}
    />
  );
}
