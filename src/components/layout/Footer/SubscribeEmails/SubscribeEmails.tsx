import { FC } from "react";
import Form from "./Form";

interface IFormProps {}

const SubscribeEmails: FC<IFormProps> = ({}) => {
  return (
    <div className="footer__subscribe-emails subscribe-emails">
      <span className="subscribe-emails__label">
        Receba as novidades do nice
      </span>
      <Form />
    </div>
  );
};

export default SubscribeEmails;
