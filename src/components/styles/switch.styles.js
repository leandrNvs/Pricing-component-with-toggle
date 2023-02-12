import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const StyledSwitch = styled.div`
  height: 30px;
  width: 50px;
  background: linear-gradient(${({ theme }) => theme.gradient.body});
  border-radius: 20px;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
    transition: 0.3s;
    ${(props) =>
      props.active &&
      css`
        left: 26px;
      `}
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.lightGrayishBlue};
`;
