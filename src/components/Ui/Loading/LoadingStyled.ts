import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background: url("images/loading-background.webp"), rgba(0, 0, 0);
`;

export default LoadingStyled;
