import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  height: 100%;

  button {
    background-color: lightskyblue;
    color: white;
    font-weight: bold;
  }

  button:hover {
    background-color: blue;
  }

  img {
    max-height: 250px;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
