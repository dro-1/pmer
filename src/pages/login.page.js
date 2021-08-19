import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const OuterContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  height: 100vh;
  max-height: 600px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    border-bottom: solid 1px black;
    padding: 0.5rem;
    display: inline-block;
    margin-bottom: 2rem;
    align-self: center;
  }
  form {
    header {
      margin-bottom: 3rem;
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.3rem;
        color: #bfbfbf;
      }
    }
    label {
      display: block;
      text-align: left;
      width: 80%;
      margin: 0 auto 1rem;
      position: relative;
      font-size: 1.5rem;
      input {
        &:not(&[type="checkbox"]) {
          display: block;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          background-color: #eaeaea;
          font-size: 1.4rem;
          border: 2px solid #fff;
          width: 100%;
          &:focus {
            outline: none;
            background: #fff;
            border: 2px solid #3175dc;
          }
        }
      }
      svg {
        position: absolute;
        right: -30px;
        top: calc(50% - 2px);
        font-size: 2.5rem;
      }
    }
    button {
      background-color: #3175dc;
      color: #fff;
      font-size: 1.3rem;
      padding: 0.7rem 2rem;
      border-radius: 5px;
      width: 100px;
      border: none;
      margin-top: 2rem;
    }
  }

  & > p {
    margin-top: 1rem;
    font-size: 1.2rem;
    a {
      color: #3175dc;
    }
  }
`;

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <OuterContainer>
      <Container>
        <h1>PMer</h1>
        <form>
          <header>
            <h2>Welcome back!</h2>
            <p>Let's get that job done</p>
          </header>
          <label>
            E-mail
            <input type="email" />
          </label>
          <label>
            Password
            <input type={isPasswordVisible ? "text" : "password"} />
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            {isPasswordVisible ? (
              <AiOutlineEyeInvisible
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            ) : (
              <AiOutlineEye
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            )}
          </label>
          {/* <label>
          <input type="checkbox" />
          Keep me signed in
        </label> */}
          <button>Log In</button>
        </form>

        <p>
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
      </Container>
    </OuterContainer>
  );
};

export default LoginPage;
