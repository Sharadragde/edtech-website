import React, { useState, useEffect } from "react";
 import "../../styles/Slideshow.css"; 
// Paths to local images stored in the 'public/images' folder
const images = [
  "./assets/images/hero-img1.png",
  "./assets/images/hero-img2.avif",
  "./assets/images/hero-img3.webp",
  "./assets/images/hero-img4.png",
  "./assets/images/hero-img5.webp",
  "./assets/images/hero-img6.png",
];


const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Handle prev/next buttons
  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  // Handle dot click to change image
  const currentSlide = (n) => {
    showSlides(n);
  };

  // Show the slide at the given index
  const showSlides = (n) => {
    if (n > images.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(images.length);
    } else {
      setSlideIndex(n);
    }
  };

  return (
    <div className="slideshow-container">
      {/* Image slides */}
      <div className="slideshow-images">
        {images.map((image, index) => (
          <div
            className="mySlides"
            style={{
              display: slideIndex === index + 1 ? "block" : "none",
            }}
            key={index}
          >
            <img src={image} alt={`Slideshow ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Next/Previous controls */}
      <button className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </button>

      {/* Dots section */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;