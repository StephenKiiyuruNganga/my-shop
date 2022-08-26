import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  justidycontent: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border: 1px solid transparent;
    border-radius: 0 0 20px 20px;
    padding: 0.5rem;
    cursor: pointer;
  }

  button:hover {
    background: lightblue;
    // font-weight: bold;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`
