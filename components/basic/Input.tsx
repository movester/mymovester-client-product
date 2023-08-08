import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { MdCancel } from "react-icons/md";

interface IProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}

const Input = (props: PropsWithChildren<IProps>) => {
  const { value, setValue, placeholder = "검색어를 적어주세요" } = props;
  return (
    <Box>
      <InputBox
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      ></InputBox>
      {value && (
        <IconBox onClick={() => setValue("")}>
          <MdCancel size={24} color={colors.g000}></MdCancel>
        </IconBox>
      )}
    </Box>
  );
};
export default Input;

const Box = styled.div`
  position: relative;
`;

const IconBox = styled.div`
  position: absolute;
  right: 16px;
  top: 14px;
`;

const InputBox = styled.input`
  border: 1px solid ${colors.g000};
  padding: 16px;
  outline: none;
  border-radius: 4px;
  width: calc(100% - 32px);
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
`;
