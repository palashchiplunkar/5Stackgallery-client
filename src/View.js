import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Gallery from "./components/Gallery";
import Spinner from "react-bootstrap/Spinner";
import "./View.css";

function View() {
  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [images, setimages] = useState(null);
  useEffect(() => {
    const fetchImages = async () => {
      console.log(`/view/${id}`);
      const res = await fetch(`http://localhost:4000/api/retreive/${id}`, {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        if (data.length != 0) {
          setimages(data);
          setloading(false);
        }
      } else {
        console.log(res.status);
      }
    };
    setloading(true);
    fetchImages();
  }, []);

  return (
    <>
      <div className='App'>
        {loading && (
          <Spinner
            animation='border'
            variant='light'
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              margin: "-25px 0 0 -25px",
            }}
          />
        )}
        {images && <Gallery galleryImages={images} />}
      </div>
    </>
  );
}

export default View;
