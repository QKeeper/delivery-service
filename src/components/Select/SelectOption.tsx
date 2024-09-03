import { useContext } from "react";
import { Option } from "./models";
import { SelectContext } from "./context";

export function SelectOption({ value, label, icon }: Option) {
  const { close, setSelected } = useContext(SelectContext);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        close?.();
        setSelected?.({ value, label, icon });
      }}
      className="relative h-9 w-full px-3 text-left first:mt-1 last:mb-1 hover:bg-neutral-50 focus-visible:bg-neutral-50 focus-visible:outline-none"
    >
      {label}
    </button>
  );
}
