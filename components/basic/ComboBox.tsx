import { Dispatch, SetStateAction, useState } from "react";
import { styled } from "styled-components";
import { colors } from "../../constants/style";
import { sizesType } from "../../constants/types";
import { AiOutlineCheck, AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface IProps {
  list: { name: string; id: string }[];
  value: { name: string; id: string };
  setValue: Dispatch<SetStateAction<{ name: string; id: string }>>;
  size: Exclude<sizesType, "xs" | "lg" | "xl">;
}

const variants = {
  sm: {
    fontSize: 16,
    padding: "8px 16px",
  },
  md: {
    fontSize: 24,
    padding: "16px 32px",
  },
};

const ComboBox = (props: IProps) => {
  const { list, value, setValue, size } = props;

  const [isOpend, setIsOpened] = useState(false);

  return (
    <Box>
      <Select
        style={{
          border: `${
            value
              ? `1px solid ${colors.vividPrimaryColor} `
              : `1px solid ${colors.g000}`
          }`,
          color: `${
            value ? ` ${colors.vividPrimaryColor} ` : `${colors.g100}`
          }`,
          fontSize: `${variants[size].fontSize}px`,
          padding: `${variants[size].padding}`,
          borderRadius: `${isOpend ? "4px 4px 0px 0px" : "4px"}`,
        }}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <Span>{value && value.id ? value.name : "선택"}</Span>
        {isOpend ? (
          <AiOutlineUp size={8}></AiOutlineUp>
        ) : (
          <AiOutlineDown size={8}></AiOutlineDown>
        )}
      </Select>

      {isOpend && (
        <OptionWarpper>
          {list.map((item) => (
            <Option
              key={"combBox -" + item.name + "-" + item.id}
              onClick={() => {
                setValue(item);
                setIsOpened((prev) => !prev);
              }}
              style={{
                fontSize: `${variants[size].fontSize}px`,
                padding: `${variants[size].padding}`,
              }}
            >
              {value && value.id === item.id && (
                <span style={{ paddingRight: "8px" }}>
                  <AiOutlineCheck size={10}></AiOutlineCheck>
                </span>
              )}
              {item.name}
            </Option>
          ))}
        </OptionWarpper>
      )}
    </Box>
  );
};

export default ComboBox;

const Box = styled.div`
  width: fit-content;
`;

const Select = styled.div`
  border: none;
  background-color: #ffffff;
  outline: none;
  display: flex;
  justify-content: space-between;
  width: fit-content;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

const Span = styled.span`
  padding-right: 32px;
`;

const OptionWarpper = styled.div`
  border-radius: 0px 0px 4px 4px;
  overflow: hidden;
  border: 1px solid ${colors.g000};
  border-top: none;
  :hover {
    background-color: ${colors.softPrimaryColor};
    color: #ffffff;
    border-color: ${colors.softPrimaryColor};
  }
  :last-child {
    border: none;
  }
`;

const Option = styled.div`
  width: auto;
  border-bottom: 1px solid ${colors.g000};
`;
