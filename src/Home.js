import React from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import "./components/navStyle.css";
import "./Home.css";
import View from "./View";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button as button, CardActionArea, CardActions } from "@mui/material";
import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Navbar } from "react-bootstrap";

function Home(props) {
  const photoCategories = [
    {
      id: 1,
      category: "Landscape",
      img: "https://www.capturelandscapes.com/wp-content/uploads/2020/11/Fundamentals-of-landscape-photography-gallery-2.jpg",
    },
    {
      id: 2,
      category: "Nature",
      img: "https://www.masterclass.com/cdn-cgi/image/width=828,quality=75,format=webp/https://images.ctfassets.net/3s5io6mnxfqz/AUWonAVxQhoFqxggae3eR/80c49fc106c3c57c1d78610f1fd1a1f6/bird-s-eye-view-of-pine-trees-3312678.jpg",
    },
    {
      id: 3,
      category: "Portrait",
      img: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2012/06/Portrait-Photography-Next-Level-04.jpg?resize=600%2C402&ssl=1",
    },
    {
      id: 4,
      category: "Sports",
      img: "https://www.splento.com/blog/wp-content/uploads/2021/07/Sports-photography.jpg",
    },
    {
      id: 5,
      category: "Event",
      img: "https://www.klicpic.com/klic/images/Event%20photography.png",
    },
    {
      id: 6,
      category: "Wedding",
      img: "https://cdn.mos.cms.futurecdn.net/2nPAyuKxsXdZ37wsiKrCbF-1200-80.jpg.webp",
    },
    {
      id: 7,
      category: "Travel",
      img: "https://images.pexels.com/photos/2916819/pexels-photo-2916819.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      category: "Food",
      img: "https://www.adorama.com/alc/wp-content/uploads/2021/11/Food-Photography-RMalayeri-1-825x465.jpg",
    },
  ];

  const listItems = photoCategories.map((key, index) => (
    // <Col className='mt-5 '>
    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img
    //       variant='top'
    //       src={photoCategories[index].img}
    //       style={{ height: "13rem" }}
    //     />
    //     <Card.Body>
    //       <Card.Title>{photoCategories[index].category}</Card.Title>

    //       <Button variant='primary' onClick={() => navigate("/View")}>
    //         View{" "}
    //       </Button>
    //     </Card.Body>
    //   </Card>
    // </Col>
    <Col
      className='mt-5 mb-5'
      sm={3}
      onClick={() => navigate(`/View/${photoCategories[index].category}`)}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={photoCategories[index].img}
          />
          <CardContent style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
            <Typography
              gutterBottom
              variant='h5'
              component='div'
              style={{ color: "white" }}>
              {photoCategories[index].category}
            </Typography>
            {/* <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
        </CardActionArea>
        <CardActions style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "1.2em",
              marginLeft: "40%",
            }}>
            View
          </Link>
        </CardActions>
      </Card>
    </Col>
  ));
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Container>
          <Row className='ms-10 '>{listItems}</Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
