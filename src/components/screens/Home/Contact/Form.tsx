import { FC, FormEvent } from "react";

import Input from "./Input/Input";

import { inputs } from "./inputs.const";

interface FormProps {}

const Form: FC<FormProps> = ({}) => {
  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => {
    e.preventDefault();
  };

  const inputItems = inputs.map((input) => (
    <Input key={input.id} input={input} />
  ));

  return (
    <form action="#" className="contact__form" onSubmit={handleSubmit}>
      {inputItems}
      <button type="submit" className="contact__submit button">
        Enviar!
      </button>
    </form>
  );
};

export default Form;
