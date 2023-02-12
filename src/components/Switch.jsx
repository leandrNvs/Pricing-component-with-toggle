import { Wrapper, Text, StyledSwitch } from "./styles/switch.styles";

export default function Switch({ activeWhen, activated, textStart, textEnd }) {
  return (
    <Wrapper>
      <Text>{textStart}</Text>
      <StyledSwitch onClick={activated} active={activeWhen} />
      <Text>{textEnd}</Text>
    </Wrapper>
  );
}
