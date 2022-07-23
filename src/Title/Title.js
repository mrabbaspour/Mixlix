import "./Title.css";

export const titles = [
  {
    titleHeading: "افزایش انرژی با میکس لیکس",
    titleDescription: "پودر مکمل راهی برای افزایش وزن و اشتها و سلامتی کامل",
    titleText: "",
  },
  {
    titleHeading: "ویژگی ها",
    titleDescription: "ویژگی محصولات",
    titleText: "",
  },
  {
    titleHeading: "چرا ما ؟ ",
    titleDescription: "چرا باید ما را انتخاب کنید ؟",
    titleText:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    titleHeading: "مقالات",
    titleDescription: "جدیدترین اخبار و مقالات",
    titleText: "",
  },
  {
    titleHeading: "سوالات متداول",
    titleDescription: "هر پاسخی را از اینجا دریافت کنید.",
    titleText: "",
  },
];

export default function Title(props) {
  return (
    <div className="title">
      <h6 className="title-heading">
        <span className="pipe">|</span>
        {props.titleHeading}
      </h6>
      <h2 className="title-desc">{props.titleDescription}</h2>
      <p className="title-text">{props.titleText}</p>
    </div>
  );
}
