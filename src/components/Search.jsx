import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <Container>
      <FormStyle onSubmit={submitHandler}>
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </FormStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0rem 0rem 5rem;
`;

const FormStyle = styled.form`
  margin: 0rem 20rem;
  width: 50rem;
  position: absolute;
  color: white;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
  }
`;

export default Search;