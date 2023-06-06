import styled from "styled-components";

const UserFeedbackStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  min-width: 320px;
  z-index: 12;
  background-color: ${({ theme }) => theme.colors.dark_grey}bb;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
    width: 60vw;
    background-color: ${(props) => props.theme.colors.light_color};
    border-radius: 10px;
    min-width: 200px;
    max-width: 400px;

    &__feedback-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
`;

export default UserFeedbackStyled;
