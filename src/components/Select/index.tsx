import { useEffect, useRef, useState } from "react";
import { Option, SelectProps } from "./models";
import { SelectOption } from "./SelectOption";
import { SelectContext } from "./context";

function Select({ placeholder, data }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState<Option | undefined>();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClose);
      setWidth(containerRef.current?.getBoundingClientRect().width ?? width);
    }
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpen]);

  return (
    <SelectContext.Provider
      value={{ close: () => setIsOpen(false), setSelected }}
    >
      <div className="relative flex flex-col" ref={containerRef}>
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="h-11 rounded-lg border px-3 text-left ring-0 ring-indigo-400/50 duration-100 focus:ring-4 focus-visible:outline-none"
        >
          {selected?.label || placeholder}
        </button>
        {isOpen && (
          <div
            className="absolute top-full z-10 mt-2 flex flex-col rounded-lg border bg-white"
            style={{ width }}
          >
            {data.map((option) => (
              <Select.Option key={option.value} {...option} />
            ))}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
}

namespace Select {
  export const Option = SelectOption;
}

export default Select;
