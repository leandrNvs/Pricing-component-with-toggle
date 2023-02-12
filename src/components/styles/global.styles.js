import { createGlobalStyle } from "styled-components";
import bgBottom from "../../assets/images/bg-bottom.svg";
import bgTop from "../../assets/images/bg-top.svg";

export default createGlobalStyle`
  body {
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: ${`url(${bgTop})`} no-repeat right top, ${`url(${bgBottom})`} no-repeat left bottom;
    background-color: ${({ theme }) => theme.colors.veryLightGrayishBlue};
    padding-bottom: 3rem;
  }
`;
