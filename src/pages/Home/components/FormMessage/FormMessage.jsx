import './FormMessage.css';
import send from '../../../../assets/icons/send.svg';

export const FormMessage = () => {
  return (
    <div className="formmessage-container">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Your Name: <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" required /></label>
        </p>
        <p>
          <label>Message: <textarea name="message" required></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};
