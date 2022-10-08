import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useSignUp } from "../context/useSignUp";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
function Auth() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const { signup, loading: loadingSignup, error: errorSignup } = useSignUp();
  const { login, loading: loadingSignin, error: errorSignin } = useLogin();
  const { user } = useAuthContext();
  const registerUser = async () => {
    await signup(name, email, password);
  };
  const loginUser = async () => {
    await login(email, password);
  };
  const notify = (message) => {
    toast.success(message + " Sucessfull", {
      position: "top-center",
    });
  };
  return (
    <MDBContainer className='my-2 d-flex flex-column w-20'>
      <MDBTabs
        pills
        justify
        className='d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <div className='text-center mb-3'>
            <p>Sign in with:</p>

            <div
              className='d-flex justify-content-between mx-auto'
              style={{ width: "40%" }}>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: "#1266f1" }}>
                <MDBIcon fab icon='facebook-f' size='sm' />
              </MDBBtn>

              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: "#1266f1" }}>
                <MDBIcon fab icon='google' size='sm' />
              </MDBBtn>
            </div>

            <p className='text-center mt-3'>or:</p>
          </div>

          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='loginMail'
            type='email'
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='loginPass'
            type='password'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <MDBBtn
            className='mb-4 w-100'
            onClick={loginUser}
            disabled={loadingSignin}>
            Sign in
          </MDBBtn>
          {errorSignin && (
            <div style={{ color: "red", textAlign: "center" }}>
              {" "}
              {errorSignin}
            </div>
          )}
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === "tab2"}>
          <div className='text-center mb-3'>
            <p>Sign up with:</p>

            <div
              className='d-flex justify-content-between mx-auto'
              style={{ width: "40%" }}>
              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: "#1266f1" }}>
                <MDBIcon fab icon='facebook-f' size='sm' />
              </MDBBtn>

              <MDBBtn
                tag='a'
                color='none'
                className='m-1'
                style={{ color: "#1266f1" }}>
                <MDBIcon fab icon='google' size='sm' />
              </MDBBtn>
            </div>

            <p className='text-center mt-3'>or:</p>
          </div>

          <MDBInput
            wrapperClass='mb-4'
            label='Name'
            id='signupName'
            type='text'
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />

          <MDBInput
            wrapperClass='mb-4'
            label='Email'
            id='signupEmail'
            type='email'
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='signupPass'
            type='password'
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Repeat Password'
            id='signupRepass'
            type='password'
            value={repassword}
            onChange={(e) => {
              setrepassword(e.target.value);
            }}
          />

          <MDBBtn
            className='mb-4 w-100'
            onClick={registerUser}
            disabled={loadingSignup}>
            Sign up
          </MDBBtn>
          {errorSignup && (
            <div style={{ color: "red", textAlign: "center" }}>
              {" "}
              {errorSignup}
            </div>
          )}
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}

export default Auth;
