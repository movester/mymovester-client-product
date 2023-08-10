import styled from "styled-components";
import Box from "../../components/basic/Box";
import Typography from "../../components/basic/Typography";
import ShadowBox from "../../components/utils/ShadowBox";
import { colors } from "../../constants/style";
import Navigator from "../../components/utils/Navigator";
import Input from "../../components/basic/Input";
import { useState } from "react";
import ComboBox from "../../components/basic/ComboBox";
import Button from "../../components/basic/Button";
import { FiLink2 } from "react-icons/fi";

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

const StretchingPostPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [mainValue, setMainValue] = useState(undefined);
  const [subValue, setSubValue] = useState(undefined);
  const [effectValue, setEffectValue] = useState(undefined);
  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper>
        <ShadowBox>
          <BreadCrumb>
            <Typography variants="heading2">스트레칭</Typography>
            <Typography variants="heading2">{">"}</Typography>
            <Typography variants="heading2">스트레칭 등록</Typography>
          </BreadCrumb>
        </ShadowBox>

        <ShadowBox>
          <Box display="flex" flexDirection="column" gap={120} padding={32}>
            <Box gap={24} display="flex" flexDirection="column" width={"100%"}>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">제목＊</Typography>
                <Input value={inputValue} setValue={setInputValue}></Input>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">부위＊</Typography>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="start"
                  gap={8}
                >
                  <ComboBox
                    size="sm"
                    list={mainCatergory}
                    value={mainValue}
                    setValue={setMainValue}
                    label="대분류"
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
                    label="중분류"
                  ></ComboBox>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">효과</Typography>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="start"
                  gap={8}
                >
                  <ComboBox
                    size="sm"
                    disabled={!mainValue && !subValue}
                    list={effectsCategory}
                    value={effectValue}
                    setValue={setEffectValue}
                    label="효과1"
                  ></ComboBox>
                  <ComboBox
                    size="sm"
                    disabled={!mainValue && !subValue}
                    list={effectsCategory}
                    value={effectValue}
                    setValue={setEffectValue}
                    label="효과2"
                  ></ComboBox>
                  <ComboBox
                    size="sm"
                    disabled={!mainValue && !subValue}
                    list={effectsCategory}
                    value={effectValue}
                    setValue={setEffectValue}
                    label="효과3"
                  ></ComboBox>
                </Box>
                <Typography variants="caption">＊효과1 선택필수</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">이미지＊</Typography>
                <Box width={120}>
                  <Button size="sm" variants="secondary">
                    +추가
                  </Button>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">
                  스트레칭 방법 및 순서＊
                </Typography>
                <Box width={120}>
                  <Button size="sm" variants="secondary">
                    +추가
                  </Button>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">권장 횟수＊</Typography>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  gap={8}
                >
                  <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    gap={8}
                  >
                    <Box width={120}>
                      <Input
                        value={inputValue}
                        setValue={setInputValue}
                      ></Input>
                    </Box>
                    <Typography variants="body1">회</Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    gap={8}
                  >
                    <Box width={120}>
                      <Input
                        value={inputValue}
                        setValue={setInputValue}
                      ></Input>
                    </Box>
                    <Typography variants="body1">세트</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">주의할 점</Typography>
                <Box width={120}>
                  <Button size="sm" variants="secondary">
                    +추가
                  </Button>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <Typography variants="heading2">참고영상 링크</Typography>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  gap={8}
                >
                  <FiLink2></FiLink2>
                  <Box width={500}>
                    <Input value={inputValue} setValue={setInputValue}></Input>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box display="flex" gap={8} width={320} justifyContent="center">
                <Button size="md" variants="secondary">
                  취소
                </Button>
                <Button size="md" variants="primary">
                  등록
                </Button>
              </Box>
            </Box>
          </Box>
        </ShadowBox>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StretchingPostPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f100};
  height: 100%;
`;

const ContentWrapper = styled.div`
  padding: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BreadCrumb = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  padding: 16px 16px 16px 32px;
`;
