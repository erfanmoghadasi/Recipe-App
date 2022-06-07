import styled from "styled-components";



const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 0);
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      height: 40%;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
  }
`;

const Gradiant = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export {Wrapper, Card, Gradiant}