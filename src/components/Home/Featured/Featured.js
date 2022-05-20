import "./Featured.scss";

import Featured1 from "../../../assets/images/featured/featured1.webp";
import Featured2 from "../../../assets/images/featured/featured2.webp";

import FeaturedMobile from "./FeaturedMobile/FeaturedMobile";
import FeaturedDesktop from "./FeaturedDesktop/FeaturedDesktop";

const featuredMobileData = [
  {
    image: Featured1,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    time: "22 April 2021",
    comment: "10 comments",
  },
  {
    image: Featured2,
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    time: "22 April 2021",
    comment: "10 comments",
  },
];

const featuredDesktopData = [
  {
    image: Featured1,
    category: "English Department",
    rating: 4.9,
    title: "Graphic Design",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: "15 Sales",
    oldprice: "$16.48",
    newprice: "$6.48",
    colors: ["blue", "green", "orange", "black"],
    time: "22h",
    lessons: "64 Lessons",
    progress: "Progress",
  },
  {
    image: Featured2,
    category: "English Department",
    rating: 4.9,
    title: "Graphic Design",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    sales: "15 Sales",
    oldprice: "$16.48",
    newprice: "$6.48",
    colors: ["blue", "green", "orange", "black"],
    time: "22h",
    lessons: "64 Lessons",
    progress: "Progress",
  },
];

const Featured = () => {
  return (
    <section className="featured">
      <div className="container featured-container">
        <p className="wedo__title">Practice Advice</p>
        <h2 className="wedo__tagline">Featured Posts</h2>

        <div className="featured-mobile">
          {featuredMobileData.map((item, index) => (
            <FeaturedMobile key={index} {...item} />
          ))}
        </div>

        <div className="featured-desktop">
          {featuredDesktopData.map((item, index) => (
            <FeaturedDesktop key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
