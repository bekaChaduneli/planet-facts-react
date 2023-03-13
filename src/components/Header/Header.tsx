import { Container, Image, Text } from "./Header.styled";
import manu from "../../assets/icon-hamburger.svg";
export default function Header(props: any) {
  return (
    <Container>
      <Text>THE PLANETS</Text>
      <Image onClick={() => props.setDisplay(!props.display)} src={manu} />
    </Container>
  );
}
