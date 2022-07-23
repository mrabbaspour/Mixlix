import "./Blog.css";
import blogData from "./BlogData";
import Title, { titles } from "../Title/Title";
import { MdDateRange } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  let settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blog" id="blog">
      <div className="container">
        <div style={{ textAlign: "center", marginTop: 180 }}>
          <Title {...titles[3]} />
        </div>
        <div className="blog-slider">
          <Slider {...settings}>
            {blogData.map((blog) => (
              <div key={blog.id} className="blog-item">
                <div className="blog-image">
                  <img src={blog.img} alt="blog" />
                </div>
                <div className="blog-body">
                  <h4>{blog.title}</h4>
                  <p>{blog.content}</p>
                  <a href="#">
                    <span>... بیشتر بخوانید</span>
                  </a>
                </div>
                <div className="blog-date">
                  <span>
                    {blog.date}
                    <i>
                      <MdDateRange />
                    </i>
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
