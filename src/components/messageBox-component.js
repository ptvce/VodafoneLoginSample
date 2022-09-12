import { Link } from "react-router-dom";

export const MessageBox = ({ title, message, linkText, link }) => {
  return (
    <>
      <div>{title}</div>
      <div>
        <div>
          {message}
          <span>
            <Link to={link}>{linkText}</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
