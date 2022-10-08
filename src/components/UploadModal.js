import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./navStyle.css";
export default function UploadModal() {
  const [basicModal, setBasicModal] = useState(false);
  const [category, setcategory] = useState(null);
  const [file, setfile] = useState(null);
  const toggleShow = () => setBasicModal(!basicModal);
  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("category", category);
    formData.append("images", file);
    const res = await axios.post("http://localhost:4000/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const data = res.data;
    notify(data.message);
    setBasicModal(false);
    setcategory(null);
    setfile(null);
    e.target.value = null;
  };
  const notify = (msg) => {
    toast.success(msg, {
      position: "top-center",
    });
  };
  return (
    <>
      <MDBBtn onClick={toggleShow} className='auth1'>
        Upload Images
      </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Upload</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Image Category
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Image Category'
                  value={category}
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}>
                  <MenuItem value={"Landscape"}>Landscape</MenuItem>
                  <MenuItem value={"Nature"}>Nature</MenuItem>
                  <MenuItem value={"Portrait"}>Portrait</MenuItem>
                  <MenuItem value={"Sports"}>Sports</MenuItem>
                  <MenuItem value={"Event"}>Event</MenuItem>
                  <MenuItem value={"Wedding"}>Wedding</MenuItem>
                  <MenuItem value={"Travel"}>Travel</MenuItem>
                  <MenuItem value={"Food"}>Food</MenuItem>
                </Select>
              </FormControl>
              <Form.Group controlId='formFile' className='mb-3'>
                <Form.Label>Upload only image files</Form.Label>
                <Form.Control
                  type='file'
                  name='image'
                  onChange={(e) => {
                    setfile(e.target.files[0]);
                  }}
                />
              </Form.Group>
              <MDBBtn color='secondary' onClick={handleUpload}>
                upload
              </MDBBtn>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
