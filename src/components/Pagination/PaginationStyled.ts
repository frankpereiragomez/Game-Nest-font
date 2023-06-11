import styled from "styled-components";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  .go-next-button:disabled {
    visibility: hidden;
  }

  .go-back-button:disabled {
    visibility: hidden;
  }
`;

export default PaginationStyled;
