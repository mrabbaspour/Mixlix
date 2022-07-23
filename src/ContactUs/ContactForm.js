export default function ContactForm() {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="form-wrapper">
          <form>
            <div className="user-info-inputs">
              <div>
                <input type="text" placeholder="نام کاربری" />
              </div>
              <div>
                <input type="email" placeholder="ایمیل" />
              </div>
              <div>
                <input type="text" placeholder="شماره همراه" />
              </div>
              <div>
                <input type="text" placeholder="موضوع پیام" />
              </div>
            </div>
            <div className="user-message-input">
              <div>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="متن پیام شما ..."
                ></textarea>
              </div>
            </div>
            <div className="send-message-btn">
              <input type="submit" value="ارسال پیام" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
