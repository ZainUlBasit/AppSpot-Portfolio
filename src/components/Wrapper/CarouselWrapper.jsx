import styled from "styled-components";

export const LogoCarouselWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-image {
    max-height: 100%;
    margin: 0 auto; /* Center horizontally */
  }
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    .text-wrapper {
      width: 100%;
      height: fit-content !important;
      & > div {
        width: 100%;
        height: fit-content !important;
        padding: 40px 20px;
        justify-content: center;
        align-items: center;
        & > div {
          width: fit-content !important;
          text-align: center;
        }
      }
    }
    .carousel-wrapper {
      width: 90% !important;
    }
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
    .text-wrapper {
    }
    .carousel-wrapper {
      width: 75% !important;
    }
  }
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100% !important;
  background-color: black;
  color: white;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    .text-wrapper {
      width: 100%;
      height: fit-content !important;
      & > div {
        width: 100%;
        height: fit-content !important;
        padding: 40px 20px;
        justify-content: center;
        align-items: center;
        & > div {
          width: fit-content !important;
          text-align: center;
        }
      }
    }
    .carousel-wrapper {
      max-width: 90% !important;
      /* padding-left: 30px; */
    }
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
    .text-wrapper {
    }
    .carousel-wrapper {
      width: 75% !important;
    }
  }
`;
export const CarouselWrapperHorizontal = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100% !important;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    .text-wrapper {
    }
    .carousel-wrapper {
      width: 90% !important;
    }
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
    .text-wrapper {
    }
    .carousel-wrapper {
      width: 75% !important;
    }
  }
`;
