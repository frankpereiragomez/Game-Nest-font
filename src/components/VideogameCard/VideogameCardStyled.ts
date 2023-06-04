import styled from "styled-components";

const VideogameCardStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.soft_grey};
  border-radius: 12px;
  width: 270px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .videogame-card {
    &__image {
      object-fit: cover;
      padding-block: 14px;
    }

    &__info-container {
      display: flex;
      flex-direction: column;
      padding: 15px 10px;
      border-radius: 0 0 12px 12px;
      background-color: ${({ theme }) => theme.colors.medium_grey};
      color: ${({ theme }) => theme.colors.light_color};
      width: 270px;
      height: 175px;
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
      gap: 25px;
    }

    &__game-price {
      font-size: 16px;
    }

    &__buttons-container {
      position: absolute;
      right: 10px;
      bottom: 8px;
    }
  }
`;

export default VideogameCardStyled;
