import { ChangeEvent, FC, FormEvent, useState } from "react";

interface IFormProps {}

const Form: FC<IFormProps> = ({}) => {
  const [value, setValue] = useState("");

  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => e.preventDefault();

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value } }) =>
    setValue(value);

  return (
    <form action="#" className="subscribe-emails__form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="name@email.com"
        className="subscribe-emails__input"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="subscribe-emails__submit">
        Inscrever
      </button>
    </form>
  );
};

export default Form;
