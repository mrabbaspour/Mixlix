import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-right">
            <div>
              <ul>
                <h4>پشتیبانی</h4>
                <li>
                  <a href="#">دانشنامه</a>
                </li>
                <li>
                  <a href="#">وبلاگ</a>
                </li>
                <li>
                  <a href="#">توسعه دهنده</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h4>مدیریت</h4>
                <li>
                  <a href="#">مدیریت فروش</a>
                </li>
                <li>
                  <a href="#">مدیریت منابع انسانی</a>
                </li>
                <li>
                  <a href="#">مدیریت پروژه</a>
                </li>
                <li>
                  <a href="#">مدیریت مالی</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h4>درباره ما</h4>
                <li>
                  <a href="#">درباره شرکت</a>
                </li>
                <li>
                  <a href="#">درباره مشتریان</a>
                </li>
                <li>
                  <a href="#">قوانین</a>
                </li>
                <li>
                  <a href="#">شرایط و ضوابط</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-top-left">
            <div>
              <a href="#">
                <img src="../images/enamad.png" alt="enamad" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src="../images/rezi.png" alt="rezi" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>تمامی حقوق سایت محفوظ است.</div>
        </div>
      </div>
    </>
  );
}
