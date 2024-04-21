export type TabMenuOptions = 'Params' | 'Headers' | 'Body';

export type Row = {
  key: string;
  value: string;
  description: string;
};

export type KeyValueInputsProps = {
  rows: Row[];
  handleChange: (index: number, field: keyof Row, value: string) => void;
  handleAddRow: () => void;
  handleDeleteRow: (index: number) => void;
};
