import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileSaver from "file-saver";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import "./Gallery.css";
import { ToastContainer, toast } from "react-toastify";
const Gallery = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuthContext();

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  const filesaver = (url) => {
    if (user) {
      FileSaver.saveAs(url);
    } else {
      notify();
    }
  };
  const notify = () => {
    toast.success("Join us! Please signin/signup before you download", {
      position: "top-center",
    });
  };
  return (
    <div>
      {openModal && (
        <div className='sliderWrap'>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className='btnClose'
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className='btnPrev'
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className='btnNext'
            onClick={nextSlide}
          />
          <div className='fullScreenImage'>
            <img
              src={`http://localhost:4000/uploads/${galleryImages[slideNumber].imgName}`}
              alt=''
            />
          </div>
        </div>
      )}

      <div className='galleryWrap'>
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div key={slide.__id}>
                <a
                  href='#'
                  onClick={() =>
                    filesaver(`http://localhost:4000/uploads/${slide.imgName}`)
                  }
                  style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-download download'
                    viewBox='0 0 16 16'>
                    <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z' />
                    <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z' />
                  </svg>
                </a>
                <div
                  className='single'
                  key={index}
                  onClick={() => handleOpenModal(index)}>
                  <img
                    src={`http://localhost:4000/uploads/${slide.imgName}`}
                    alt=''
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
