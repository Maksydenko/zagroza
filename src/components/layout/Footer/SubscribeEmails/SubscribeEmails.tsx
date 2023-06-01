import { FC } from "react";
import Form from "./Form";

interface FormProps {}

const SubscribeEmails: FC<FormProps> = ({}) => {
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
