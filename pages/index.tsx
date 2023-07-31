/* eslint-disable react-hooks/rules-of-hooks */
import { styled } from "styled-components";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Divider from "../components/Divder";
import ComboBox from "../components/ComboBox";
import { useState } from "react";
import Input from "../components/Input";

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
    <div>
      <Typography variants="heading1">heading1</Typography>
      <Typography variants="heading2">heading2</Typography>
      <Typography variants="body1">body1</Typography>
      <Typography variants="body2">body2</Typography>
      <Button size="sm" variants="secondary">
        dddd
      </Button>
      <Divider></Divider>
      <ComboBox
        list={list}
        value={comboBoxValue}
        setValue={setComboBoxValue}
        size="sm"
      ></ComboBox>
      <GridBox>
        <ComboBox
          list={list}
          value={comboBoxValue}
          setValue={setComboBoxValue}
          size="md"
        ></ComboBox>

        <Input value={inputValue} setValue={setInputValue}></Input>
      </GridBox>
    </div>
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
