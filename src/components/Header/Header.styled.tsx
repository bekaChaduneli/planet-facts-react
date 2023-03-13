import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  display: flex;
  height: 68px;
  border-bottom: 2px solid #ffffff1c;
  justify-content: space-between;
  padding: 24px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Text = styled.h1`
  font-size: 28px;
  line-height: 36.23px;
  color: #fff;
  letter-spacing: -1.05px;
`;

export const Image = styled.img`
  width: 24px;
  margin-top: 5px;
  height: 20px;
  opacity: 80%;
  transition: 0.3s;
  &:hover {
    opacity: 40%;
    transition: 0.3s;
  }
`;
