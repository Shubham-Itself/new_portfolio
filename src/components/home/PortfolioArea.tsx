 
import { useState } from "react";
// import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

// import portfolio_img_1 from "../../../public/assets/images/projects/work1.jpg";
// import portfolio_img_2 from "../../../public/assets/images/projects/work2.jpg";
// import portfolio_img_3 from "../../../public/assets/images/projects/work3.jpg";
// import portfolio_img_4 from "../../../public/assets/images/projects/work4.jpg";
// import portfolio_img_5 from "../../../public/assets/images/projects/work5.jpg"; 

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
}

const portfolio_data:DataType[] = [
  {
    id: 1,
    col: "6",
    image: '/assets/images/work/icici_work.webp',
    title: "ICICI BANK",
    category: "Banking",
  },
  {
    id: 2,
    col: "6",
    image: '/assets/images/work/iics_work.webp',
    title: "INDIAN INSTITUTE OF CREATIVE SKILLS",
    category: "Education",
  },
  {
    id: 3,
    col: "4",
    image: "/assets/images/work/memorae_work.mp4",
    title: "MEMORAE AI",
    category: "ARTIFICIAL INTELLIGENCE",
  },
  {
    id: 4,
    col: "4",
    image: '/assets/images/work/genera_ai_work.mp4',
    title: "GENERA AI",
    category: "ARTIFICIAL INTELLIGENCE",
  },
  {
    id: 5,
    col: "4",
    image: "/assets/images/work/class_connect_work.webp",
    title: "CLASS CONNECT SAAS APP",
    category: "Education",
  },
];

export default function PortfolioArea() {

  // photoIndex
  // const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  // const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  // const handleImagePopup = (i: any) => {
  //   setPhotoIndex(i);
  //   setIsOpen(true);
  // };
  //  images
  // const image = portfolio_data.slice(0, 5).map((item) => item.image);


  return (
    <>

      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
        <div className="row g-4 portfolio-grid">
        {portfolio_data.map((item, i) => (
  <div
    key={i}
    className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}
  >
    <a
      style={{ cursor: "pointer" }}
      // onClick={() => handleImagePopup(i)}
      className="work-popup"
    >
      <div className="portfolio-box" style={{ height: "100%" }}>
        {item.image.endsWith(".mp4") ? (
          <video
            src={item.image}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <img
            src={item.image}
            alt=""
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            data-rjs="2"
          />
        )}
        <span className="portfolio-category">{item.category}</span>
        <div className="portfolio-caption">
          <h1>{item.title}</h1>
        </div>
      </div>
    </a>
  </div>
))}
</div>
        </div>
      </div>

      {/* image light box start */}
      {/* {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )} */}
      {/* image light box end */}
    </>
  )
}
