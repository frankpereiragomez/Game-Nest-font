import styled from "styled-components";

const DetailsPageStyled = styled.main`
  .videogame-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(204, 204, 204);
    border-radius: 12px;
    width: 270px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px,
      rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
    margin: 0 auto;
    margin-top: 30px;

    &__heading {
      text-align: center;
      background-color: ${({ theme }) => theme.colors.medium_grey};
      color: ${({ theme }) => theme.colors.light_color};
      padding: 13px 0;
      min-width: 320px;
      font-size: 25px;
    }

    &__image-container {
      object-fit: cover;
      padding-block: 14px;
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      padding: 20px;
      border-radius: 0 0 12px 12px;
      background-color: ${({ theme }) => theme.colors.medium_grey};
      color: ${({ theme }) => theme.colors.light_color};
      width: 270px;
      gap: 15px;
      position: relative;
    }

    &__details-container p {
      font-size: 18px;
      font-family: ${({ theme }) => theme.fonts.tertiary};
    }

    &__name {
      font-size: 20px;
    }

    &__details-container {
      display: flex;
      flex-direction: column;
    }

    &__game-price {
      font-size: 16px;
      margin-top: 35px;
    }

    &__buttons-container {
      position: absolute;
      right: 10px;
      bottom: 8px;
    }
  }
`;

export default DetailsPageStyled;
