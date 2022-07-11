import { useState } from "react";
import styled from "styled-components";

const GetRepos = (props) => {
  const [gitUserName, setGitUserName] = useState("");
  const [userIsValid, setUserIsValid] = useState(false);

  const userNameChangeHandler = (e) => {
    setGitUserName(e.target.value);
  };

  const getData = (userName) => {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.json())
      .then((data) => props.setReposData(data))
      .catch((error) => console.log(error.message));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (gitUserName) {
      setUserIsValid(false);
      getData(gitUserName);
    } else {
      setUserIsValid(true);
      props.setReposData([]);
      setTimeout(() => setUserIsValid(false), 10000);
    }
    setGitUserName("");
  };

  return (
    <GetContainer>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='GitHub Username'
          value={gitUserName}
          onChange={userNameChangeHandler}
        />
        <button type='submit'>Get Repos</button>
      </form>
      <Alert isValid={userIsValid} className={userIsValid && "show-alert"}>
        Please Enter a User Name!
      </Alert>
    </GetContainer>
  );
};

export default GetRepos;

const GetContainer = styled.section`
  padding: 1.25rem;
  background-color: #eee;

  form {
    display: flex;

    input {
      width: 100%;
      padding: 0.9375rem 1.25rem;
      border: none;
      font-size: 1.25rem;
      height: 54px;
      border-radius: 0.3rem;

      &:focus {
        outline: 1px solid #f44336;
      }
    }

    button {
      width: 140px;
      margin-left: 0.625rem;
      height: 54px;
      line-height: 54px;
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      background-color: #f44336;
      cursor: pointer;
      border: none;
      border-radius: 0.3rem;
    }
  }
`;

const Alert = styled.div`
  position: relative;
  color: #721c24;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  padding: 1rem;
  overflow: hidden;
  transform: translateX(150%);
  transition: transform 2s;

  &.show-alert {
    transform: translateX(0);
  }

  &:after {
    content: "";
    position: absolute;
    width: 110%;
    height: 2px;
    background-color: #ff4343;
    right: 100%;
    bottom: 0;
    animation: ${(props) => (props.isValid ? "timer 10s normal" : "none")};
  }

  @keyframes timer {
    from {
      right: 100%;
    }
    to {
      right: 0;
    }
  }
`;
