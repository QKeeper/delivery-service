export interface ISelectContext {
  selected?: string;
  setSelected?: React.Dispatch<React.SetStateAction<Option | undefined>>;
  close?: () => void;
}

export interface Option {
  value: string;
  label: string;
  icon?: string;
}

export interface SelectProps {
  placeholder?: string;
  data: Option[];
}
