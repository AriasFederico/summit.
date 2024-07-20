import './FormMessage.css';

export const FormMessage = () => {
  return (
      <form name="contact" method='POST' data-netlify='true' data-netlify-recaptcha="true">
        <input type="hidden" name="name_of_my_form" value="name_of_my_form" />
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
  );
};
