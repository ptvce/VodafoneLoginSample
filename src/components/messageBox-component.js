import {Link} from 'react-router-dom';

const MessageBox = ({ title, message, linkText, link }) => {
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
  </>;
};

export default MessageBox;
