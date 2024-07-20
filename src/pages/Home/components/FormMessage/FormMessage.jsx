import './FormMessage.css';

export const FormMessage = () => {
  return (
    <div>
      <form action="https://getform.io/f/adrydrqa"
      method='POST'
      encType='multipart/form-data'
      >

        <input type="text" name='name' />
        <input type="email" name='email' />
        <textarea name="message" id=""></textarea>

        <button type='submit'>send</button>

      </form>
    </div>
  );
};
