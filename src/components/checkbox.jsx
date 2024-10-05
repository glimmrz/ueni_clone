import { Icon } from "./icon";

export function Checkbox({ data }) {
  return (
    <div className="flex items-center gap-2">
      <Icon icon={data?.icon} size={20} />
      <span className="capitalize font-normal text-base md:text-xl">
        {data?.label}
      </span>
    </div>
  );
}
