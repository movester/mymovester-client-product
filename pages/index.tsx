/* eslint-disable react-hooks/rules-of-hooks */
import { styled } from "styled-components";
import Button from "../components/basic/Button";
import Typography from "../components/basic/Typography";
import Divider from "../components/basic/Divder";
import ComboBox from "../components/basic/ComboBox";
import { useState } from "react";
import Input from "../components/basic/Input";
import Navigator from "../components/utils/Navigator";

const mainPage = () => {
  return (
    <>
      <Navigator></Navigator>
    </>
  );
};

export default mainPage;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
