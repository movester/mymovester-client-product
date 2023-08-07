/* eslint-disable react-hooks/rules-of-hooks */
import { styled } from "styled-components";
import Button from "../components/basic/Button";
import Typography from "../components/basic/Typography";
import Divider from "../components/basic/Divder";
import ComboBox from "../components/basic/ComboBox";
import { useState } from "react";
import Input from "../components/basic/Input";
import Navigator from "../components/utils/Navigator";

const list = [
  { name: "1번", id: "aaaa" },
  { name: "2번", id: "bbbbb" },
  { name: "3번", id: "cccccc" },
  { name: "4666번", id: "dddd" },
];

const mainPage = () => {
  const [comboBoxValue, setComboBoxValue] = useState(undefined);
  const [inputValue, setInputValue] = useState<string>("");

  console.log(inputValue);

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
