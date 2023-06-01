import { ChangeEvent, FC, useState } from "react";

interface InputProps {
  input: {
    id: string;
    type: string;
    placeholder: string;
  };
}

const Input: FC<InputProps> = ({ input: { id, type, placeholder } }) => {
  const [value, setValue] = useState("");

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <div className="contact__input input">
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
