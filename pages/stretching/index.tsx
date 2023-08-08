import { styled } from "styled-components";
import Navigator from "../../components/utils/Navigator";
import { colors } from "../../constants/style";
import ShadowBox from "../../components/utils/ShadowBox";
import Typography from "../../components/basic/Typography";
import Button from "../../components/basic/Button";
import ComboBox from "../../components/basic/ComboBox";
import { useState } from "react";
import Input from "../../components/basic/Input";

const mainCatergory = [
  { name: "전체", id: "total" },
  { name: "상체", id: "upperBody" },
  { name: "하체", id: "lowerBody" },
];

const upperBodyCatergory = [
  { name: "상체 전체", id: "total" },
  { name: "목/가슴/어께", id: "u1" },
  { name: "팔/손/손목", id: "u2" },
  { name: "등/몸통", id: "u3" },
];

const lowerBodyCatergory = [
  { name: "하체 전체", id: "total" },
  { name: "고관절/둔근", id: "l1" },
  { name: "종아리/발목/발", id: "l2" },
  { name: "무릎/허벅지", id: "l3" },
];

const effectsCategory = [
  { name: "효과 전체", id: "total" },
  { name: "통증완화", id: "e1" },
  { name: "자세개선", id: "e2" },
  { name: "근육이완", id: "e3" },
  { name: "혈액순환", id: "e4" },
  { name: "거북목 완화", id: "e5" },
  { name: "라운드숄더 완화", id: "e6" },
];

const StrechingPage = () => {
  const [mainValue, setMainValue] = useState(undefined);
  const [subValue, setSubValue] = useState(undefined);
  const [effectValue, setEffectValue] = useState(undefined);
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper>
        <ShadowBox>
          <BreadCrumb>
            <Typography variants="heading2">스트레칭</Typography>
            <Button size="sm" width={160}>
              +추가하기
            </Button>
          </BreadCrumb>
        </ShadowBox>
        <SearchBox>
          <ComboBoxBox>
            <ComboBox
              size="sm"
              list={mainCatergory}
              value={mainValue}
              setValue={setMainValue}
            ></ComboBox>
            <ComboBox
              size="sm"
              disabled={!mainValue}
              list={
                mainValue?.id === "upperBody"
                  ? upperBodyCatergory
                  : lowerBodyCatergory
              }
              value={subValue}
              setValue={setSubValue}
            ></ComboBox>
            <ComboBox
              size="sm"
              disabled={!mainValue && !subValue}
              list={effectsCategory}
              value={effectValue}
              setValue={setEffectValue}
            ></ComboBox>
          </ComboBoxBox>
          <Box>
            <Input
              placeholder="제목으로 검색"
              value={inputValue}
              setValue={setInputValue}
            ></Input>
            {/* <Button variants="primary" size="sm">
              dddd
            </Button> */}
          </Box>
        </SearchBox>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StrechingPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f100};
`;

const ContentWrapper = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BreadCrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 32px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

const ComboBoxBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 8px;
`;

const Box = styled.div`
  width: 300px;
  padding: 0;
`;
