import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  padding: 2.5rem;
  border-radius: 0.5rem;
  text-align: center;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  background-color: #fff;
  ${(props) =>
    props.primary &&
    css`
      background-image: linear-gradient(${props.theme.gradient.body});
    `}
  color: ${(props) =>
    props.primary ? "#fff" : props.theme.colors.grayishBlue};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.lightGrayishBlue};

  button {
    background: ${({ primary, theme }) => {
      return primary ? "#fff" : `linear-gradient(${theme.gradient.button})`;
    }};

    color: ${({ primary, theme }) => {
      return primary ? theme.colors.button : "#fff";
    }};

    &:hover {
      background: transparent;
      border: 1px solid
        ${({ primary, theme }) => (primary ? "#fff" : theme.colors.button)};
      color: ${({ primary, theme }) =>
        primary ? "#fff" : theme.colors.button};
    }
  }

  @media (min-width: 1100px) {
    ${({ primary }) =>
      primary &&
      css`
        height: 480px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  text-transform: capitalize;
  margin-top: 0;
`;

export const Icon = styled.span`
  font-size: 2rem;
`;

export const Price = styled.span`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.primary ? "#fff" : props.theme.colors.darkGrayishBlue};
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.lightGrayishBlue};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrayishBlue};
`;

export const ListItem = styled.li`
  padding: 0.7rem 0;

  + li {
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrayishBlue};
  }
`;

export const Button = styled.button.attrs({ type: "button" })`
  width: 100%;
  height: 40px;
  cursor: pointer;
  display: block;
  margin-top: 3rem;
  border: 0;
  color: #fff;
  font-weight: 700;
  border-radius: 0.3rem;
`;
