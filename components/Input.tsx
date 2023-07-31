import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { styled } from "styled-components";
import { colors } from "../constants/style";

interface IProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input = (props: PropsWithChildren<IProps>) => {
  const { value, setValue } = props;
  return (
    <InputBox
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></InputBox>
  );
};
export default Input;

const InputBox = styled.input`
  border: 1px solid ${colors.g000};
  padding: 16px 8px;
  outline: none;
  border-radius: 4px;
  width: calc(100% - 16px);
  font-size: 16px;
`;
