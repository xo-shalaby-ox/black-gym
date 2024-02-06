import React from "react";

export const Contact = () => {
  return (
    <div id="contact">
      <div className="contact__text">
        <h1>contact us</h1>
      </div>
      <div className="form">
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Type Your E-Mail" required />
          <textarea placeholder="Write Here ....... " name="message"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
