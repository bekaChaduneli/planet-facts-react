import styled from "styled-components";
export const ChangeBox = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  transition: 0.4s;
  border-bottom: 2px solid #ffffff1c;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 9px;
  color: #fff;
  text-transform: uppercase;
`;

export const BottomRadius = styled.span`
  width: 0%;
  height: 4px;
  transition: 0.4s;
  transform: translateY(14px);
  background-color: ${({ theme }) => theme.main};
`;

export const Box = styled.div`
  height: 50px;
  align-items: center;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  justify-content: center;
  &:hover ${BottomRadius} {
    width: 100%;
    transition: 0.4s;
  }
`;

export const SecondBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 24px;
  @media screen and (min-width: 768px) {
    padding: 24px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 140px;
    padding-right: 140px;
    margin-top: 80px;
  }
`;

export const Headline = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 40px;
  margin-top: 88px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 80px;
  }
`;

export const Information = styled.h1`
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  width: 100%;
  color: ${({ theme }) => theme.white};
  margin-top: 16px;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 25px;
    margin-top: 23px;
  }
`;

export const PlanetImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    min-width: 350px;
    max-width: 420px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 480px;
    max-width: 530px;
  }
`;
export const SurfaceImage = styled.img`
  width: 95px;
  position: absolute;
  transform: translateY(100px);
  @media screen and (min-width: 768px) {
    width: 150px;
    transform: translateY(200px);
  }
  @media screen and (min-width: 1440px) {
    width: 163px;
    transform: translateY(320px);
  }
`;

export const TextLink = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  font-family: "League Spartan", sans-serif;
  margin-top: 32px;
  opacity: 60%;
  font-weight: 700;
  color: #fff;
  @media screen and (min-width: 1440px) {
    margin-top: 24px;
    font-size: 14px;
  }
`;

export const Wikipedia = styled.a`
  text-decoration: none;
  font-size: 12px;
  line-height: 25px;
  font-weight: 400;
  color: #fff;
`;

export const Image = styled.img`
  width: 12px;
  height: 12px;
  transform: translate(6px, 3px);
`;

export const Stats = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border: 2px solid #ffffff1c;
  @media screen and (min-width: 768px) {
    height: 88px;
    min-width: 164px;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 255px;
    height: 128px;
    gap: 11px;
  }
`;

export const StatsInfo = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.white};
  letter-spacing: -0.75px;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.9px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    letter-spacing: -1.5px;
  }
`;

export const StatsText = styled.h1`
  font-weight: 400;
  color: ${({ theme }) => theme.white};
  opacity: 60%;
  letter-spacing: 0.73px;
  font-size: 8px;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 11px;
    font-weight: 700;
  }
`;

export const Ul = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  padding: 19px;
  gap: 8px;
  width: 100%;
  margin-bottom: 47px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 11px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const Tablet = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ChangeBoxTablet = styled.div`
  display: none;
  width: 100%;
  margin-top: 80px;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0px;
  }
`;
interface StyledComponentProps {
  overview: boolean;
  surface: boolean;
  structure: boolean;
}

export const BoxTablet = styled.div<StyledComponentProps>`
  width: 100%;
  height: 40px;
  border: 2px solid #ffffff1c;
  display: flex;
  transition: 0.4s;
  flex-direction: row;
  background-color: ${(props) => (props.overview ? props.color : "")};
  align-items: center;
  padding: 20px;
  &:hover {
    background-color: ${(props) => (props.overview ? props.color : "")};
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
  }
`;

export const BoxTabletStructure = styled.div<StyledComponentProps>`
  width: 100%;
  height: 40px;
  border: 2px solid #ffffff1c;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.structure ? props.color : "")};
  transition: 0.4s;
  align-items: center;
  padding: 20px;
  &:hover {
    background-color: "#ff0000";
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
  }
`;

export const BoxTabletSurface = styled.div<StyledComponentProps>`
  width: 100%;
  height: 40px;
  transition: 0.4s;
  border: 2px solid #ffffff1c;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.surface ? props.color : "")};
  align-items: center;
  padding: 20px;
  &:hover {
    background-color: "#D8D8D8";
  }
  @media screen and (min-width: 1440px) {
    height: 48px;
  }
`;

export const TextTablet = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.93px;
  color: #fff;
  text-transform: uppercase;
`;

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    gap: 194px;
  }
`;

export const SecondContent = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    text-align: start;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 69px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    min-width: 350px;
    max-width: 600px;
    transform: translateY(-70px);
  }
`;

export const TextNumerationTablet = styled.h1`
  font-size: 15px;
  margin-right: 15px;
  color: ${({ theme }) => theme.white};
  opacity: 50%;
`;

export const ImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentSpecialBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
