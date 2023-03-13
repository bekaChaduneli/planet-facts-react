import { useState } from "react";
import linkImage from "../../assets/icon-source.svg";
import {
  ChangeBox,
  Box,
  Text,
  BottomRadius,
  SecondBox,
  Stats,
  Ul,
  StatsText,
  StatsInfo,
  TextLink,
  Wikipedia,
  Image,
  ChangeBoxTablet,
  TextNumerationTablet,
  ImageBox,
  ContentBox,
  SecondContent,
  ContentSpecialBox,
  BoxTablet,
  TextTablet,
  Tablet,
  Information,
  Headline,
  PlanetImage,
  SurfaceImage,
} from "./Info.styled";
export default function Info(props: any) {
  const [color, setColor] = useState("#fff");
  const [overview, setOverview] = useState<boolean>(false);
  const [structure, setStructure] = useState<boolean>(false);

  const makeOverview = () => {
    setColor("#419EBB");
    setOverview(true);
    props.setText(props.data.overview.content);
    props.setImage(props.data.images.planet);
    props.setSurface(false);
    setStructure(false);
  };
  const makeStructure = () => {
    setColor("#419EBB");
    setStructure(true);
    setOverview(false);
    props.setText(props.data.structure.content);
    props.setImage(props.data.images.internal);
    props.setSurface(false);
  };
  const makeSurface = () => {
    setColor("#419EBB");
    setStructure(false);
    props.setText(props.data.geology.content);
    props.setImage(props.data.images.planet);
    props.setSurface(true);
  };
  return (
    <>
      <ChangeBox>
        <Box onClick={makeOverview}>
          <Text>OVERVIEW</Text>
          <BottomRadius />
        </Box>
        <Box onClick={makeStructure}>
          <Text>Structure</Text>
          <BottomRadius />
        </Box>
        <Box onClick={makeSurface}>
          <Text>Surface</Text>
          <BottomRadius color={props.color} />
        </Box>
      </ChangeBox>
      <SecondBox>
        <Tablet>
          <ContentBox>
            <ImageBox>
              <PlanetImage src={props.image} />
              {props.surface ? (
                <SurfaceImage src={props.data.images.geology} />
              ) : (
                ""
              )}
            </ImageBox>
            <SecondContent>
              <ContentSpecialBox>
                <Headline>{props.name}</Headline>
                <Information>{props.text}</Information>
                <TextLink>
                  Source:{" "}
                  <Wikipedia href={props.data.geology.source}>
                    Wikipedia
                  </Wikipedia>
                  <Image src={linkImage} />
                </TextLink>
              </ContentSpecialBox>
              <ChangeBoxTablet>
                <BoxTablet overview={overview} onClick={makeOverview}>
                  <TextNumerationTablet>01</TextNumerationTablet>
                  <TextTablet>OVERVIEW</TextTablet>
                </BoxTablet>
                <BoxTablet overview={overview} onClick={makeStructure}>
                  <TextNumerationTablet>02</TextNumerationTablet>
                  <TextTablet>Structure</TextTablet>
                </BoxTablet>
                <BoxTablet overview={overview} onClick={makeSurface}>
                  <TextNumerationTablet>03</TextNumerationTablet>
                  <TextTablet>Surface</TextTablet>
                </BoxTablet>
              </ChangeBoxTablet>
            </SecondContent>
          </ContentBox>
        </Tablet>
        <Ul>
          <Stats>
            <StatsText>ROTATION TIME</StatsText>
            <StatsInfo>{props.data.rotation}</StatsInfo>
          </Stats>
          <Stats>
            <StatsText>REVOLUTION TIME</StatsText>
            <StatsInfo>{props.data.revolution}</StatsInfo>
          </Stats>
          <Stats>
            <StatsText>radius</StatsText>
            <StatsInfo>{props.data.radius}</StatsInfo>
          </Stats>
          <Stats>
            <StatsText>AVERAGE TEMP.</StatsText>
            <StatsInfo>{props.data.temperature}</StatsInfo>
          </Stats>
        </Ul>
      </SecondBox>
    </>
  );
}
