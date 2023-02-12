import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  font-family: ${(props) => props.theme.font.family};
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;

  @media (min-width: 1100px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayishBlue};
`;
