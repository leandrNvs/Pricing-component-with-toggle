import {
  Button,
  Icon,
  List,
  ListItem,
  Price,
  StyledCard,
  Title,
} from "./styles/card.styles";

export default function Card({ title, price, storage, user, sendUp }) {
  return (
    <StyledCard primary={title === "professional"}>
      <Title>{title}</Title>
      <Price primary={title === "professional"}>
        <Icon>$</Icon>
        {price}
      </Price>
      <List>
        <ListItem>{storage} Storage</ListItem>
        <ListItem>{user} Users Allowed</ListItem>
        <ListItem>Send up to {sendUp}</ListItem>
      </List>

      <Button>Learn More</Button>
    </StyledCard>
  );
}
