import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.4s;
`;
export const HoverBox = styled.span`
  width: 0%;
  transition: 0.4s;
  transform: translateY(-20px);
  background-color: ${({ theme }) => theme.main};
  height: 4px;
`;

export const ContainerTablet = styled.div`
  width: 60%;
  padding: 24px;
  margin-top: 15px;
  display: none;
  justify-content: space-between;
  transition: 0.4s;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    width: 60%;
  }
`;

export const Background = styled.img`
  position: absolute;
  width: 70%;
  max-height: 100vh;
  transition: 0.4s;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  border-bottom: 1px solid #ffffff1c;
  transition: 0.4s;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
  &:hover ${HoverBox} {
    width: 70%;
    transition: 0.4s;
  }
`;
export const ImageBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  transition: 0.4s;
`;
export const TextBox = styled.div`
  display: flex;
  transition: 0.4s;
  justify-content: center;
  gap: 25px;
`;
export const Image = styled.img`
  opacity: 70%;
  width: 4px;
  height: 8px;
  transition: 0.4s;
`;

export const Text = styled.p`
  font-size: 15px;
  transition: 0.4s;
  line-height: 25px;
  letter-spacing: 1.36px;
  text-transform: uppercase;
  a:-webkit-any-link {
    color: none;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const LinkBox = styled.p`
  font-family: "League Spartan", sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  border: none;
  transition: 0.4s;
  outline: none;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
`;

export const Main = styled.div`
  background-image: url("./src/assets/background-stars.svg");
`;

export const Flex = styled.div`
  width: 100%;
  padding: 51px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #ffffff1c;
    justify-content: space-between;
    width: 100%;
    padding: 0px;
    margin-top: -10px;
  }
`;

export const TabletText = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  margin-top: 0px;
  @media screen and (min-width: 1440px) {
    margin-left: 40px;
  }
`;
