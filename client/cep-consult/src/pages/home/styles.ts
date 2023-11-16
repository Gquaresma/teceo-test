import styled, { css } from "styled-components";
import { Modal, Box } from "@mui/material";

export const Page = styled.div`
  height: 100%;
  width: 100%;
`;

export const Title = styled.span`
  font-size: calc(4vw + 1rem);
  ${(props) =>
    css`
      color: ${props.color};
    `};
`;

export const TitleContainer = styled.h1`
  font-family: "Yeseva One";
  font-weight: 400;
  color: #413430;
  margin-bottom: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;

  .input-mask {
    border-radius: 4px;
    border-style: none;
    box-shadow: 1px 1px 4px #0000001f;
    padding: 8px 12px;
    margin-bottom: 1.6rem;
    box-sizing: border-box;
    background: white;
    transition: 0.2s all;
    color: #0c2a71ff;

    &:focus {
      box-shadow: 1px 1px 4px #0000003f;
      outline: none;
    }
  }
`;

export const ContainerModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled(Box)`
  border-radius: 5px;
  background-color: #f0f7ff;
  padding: 2rem;
`;

export const Boxinfo = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  color: #413430;
  margin-bottom: 1rem;
`;
