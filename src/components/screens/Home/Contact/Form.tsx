import { FC, FormEvent } from "react";
import { inputs } from "./inputs.const";
import Input from "./Input/Input";

interface IFormProps {}

const Form: FC<IFormProps> = ({}) => {
  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="#" className="contact__form" onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <Input key={input.id} input={input} />
      ))}
      <button type="submit" className="contact__submit button">
        Enviar!
      </button>
    </form>
  );
};

export default Form;
