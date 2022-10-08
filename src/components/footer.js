import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      className='text-center text-white'
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor='dark'
            link
            floating
            size='lg'
            className='text-dark m-1'
            href='#!'
            role='button'>
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            link
            floating
            size='lg'
            className='text-dark m-1'
            href='#!'
            role='button'>
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            link
            floating
            size='lg'
            className='text-dark m-1'
            href='#!'
            role='button'>
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            link
            floating
            size='lg'
            className='text-dark m-1'
            href='#!'
            role='button'>
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            link
            floating
            size='lg'
            className='text-dark m-1'
            href='#!'
            role='button'>
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor='dark'
            link
            floating
            size='lg'
            className='text-dark'
            href='#!'
            role='button'>
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className='text-center text-light p-3'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
        © 2022 Copyright:
        <a className='text-light'>5StackGallery.com</a>
      </div>
    </MDBFooter>
  );
}
