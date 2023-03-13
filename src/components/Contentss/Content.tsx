import { Link, useParams } from "react-router-dom";
import Info from "../Info/Info";
import button from "../../assets/icon-chevron.svg";
import Header from "../Header/Header";
import {
  Box,
  Container,
  TextBox,
  ImageBox,
  ContainerTablet,
  HoverBox,
  Flex,
  TabletText,
  Main,
  Text,
  Image,
  LinkBox,
} from "./Content.styled";
import { useState } from "react";
export default function Content(props: any) {
  const { name } = useParams();
  const planets = props.data.find((planet: any) => planet.name === name);
  const [surface, setSurface] = useState(false);
  const [display, setDisplay] = useState<any>(false);
  const [image, setImage] = useState(planets.images.planet);
  const [text, setText] = useState(planets.overview.content);
  return (
    <Main>
      <Header setDisplay={setDisplay} display={display} />
      {display ? (
        <Container>
          {props.data.map((planet: any) => {
            return (
              <Box>
                <TextBox>
                  <ImageBox color={planet.color} />
                  <Text>
                    <Link
                      onClick={(e) => {
                        setDisplay(!display);
                        props.setName(planet.name);
                        setImage(planet.images.planet);
                        setSurface(false);
                        setText(planet.overview.content);
                        props.setTheme({
                          ...props.theme,
                          main: `${planet.color}`,
                        });
                      }}
                      key={planet.name}
                      to={`/${planet.name}`}
                    >
                      <LinkBox>{planet.name}</LinkBox>
                    </Link>
                  </Text>
                </TextBox>
                <Image src={button} />
              </Box>
            );
          })}
        </Container>
      ) : (
        <Flex>
          <TabletText>THE PLANETS</TabletText>
          <ContainerTablet>
            {props.data.map((planet: any) => {
              return (
                <Box>
                  <HoverBox />
                  <Text>
                    <Link
                      onClick={() => {
                        setImage(planet.images.planet);
                        setText(planet.overview.content);
                        props.setName(planet.name);
                        setSurface(false);
                        console.log(planet);
                        props.setTheme({
                          ...props.theme,
                          main: `${planet.color}`,
                        });
                      }}
                      key={planet.name}
                      to={`/${planet.name}`}
                    >
                      <LinkBox>{planet.name}</LinkBox>
                    </Link>
                  </Text>
                </Box>
              );
            })}
          </ContainerTablet>
        </Flex>
      )}
      {!display ? (
        <Info
          setImage={setImage}
          setText={setText}
          text={text}
          image={image}
          surface={surface}
          setSurface={setSurface}
          data={planets}
          name={props.name}
        />
      ) : (
        ""
      )}
    </Main>
  );
}
