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
import InputTableItem from "../../components/utils/InputTableItem";
import { useRouter } from "next/router";
import SubTitle from "../../components/utils/SubTitle";

const mainCatergory = [
  { name: "상체", id: "upperBody" },
  { name: "하체", id: "lowerBody" },
];

const upperBodyCatergory = [
  { name: "목/가슴/어께", id: "u1" },
  { name: "팔/손/손목", id: "u2" },
  { name: "등/몸통", id: "u3" },
];

const lowerBodyCatergory = [
  { name: "고관절/둔근", id: "l1" },
  { name: "종아리/발목/발", id: "l2" },
  { name: "무릎/허벅지", id: "l3" },
];
const effectsCategory = [
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
  const [effectValue1, setEffectValue1] = useState(undefined);
  const [effectValue2, setEffectValue2] = useState(undefined);
  const [effectValue3, setEffectValue3] = useState(undefined);
  const [videoLink, setVideoLink] = useState("");
  const [preferTimeValue, setPreferTimeValue] = useState<number | null>(null);
  const [preferSetValue, setPreferSetValue] = useState<number | null>(null);
  const [stretchingOrder, setStretchingOrder] = useState<
    { order: number; detail: string }[]
  >([{ order: 1, detail: "" }]);
  const [isStretchingOrderDeleteMode, setIsStretchingOrderDeleteMode] =
    useState<boolean>(false);
  const [stretchingOrderDeletelist, setStretchingOrderDeletelist] = useState(
    []
  );

  const [cautionOrder, setCautionOrder] = useState<
    { order: number; detail: string }[]
  >([]);
  const [isCautionOrderDeleteMode, setIsCautionOrderDeleteMode] =
    useState<boolean>(false);
  const [cautionOrderDeletelist, setCautionOrderDeletelist] = useState([]);

  const router = useRouter();

  const handleOnClickDeleteStretchingOrder = (order: number) => {
    if (stretchingOrderDeletelist.includes(order)) {
      setStretchingOrderDeletelist((prev) =>
        prev.filter((item) => item !== order)
      );
    } else {
      setStretchingOrderDeletelist((prev) => [...prev, order]);
    }
  };

  const handleOnClickStretchingDeleteButton = () => {
    setIsStretchingOrderDeleteMode((prev) => !prev);

    if (isStretchingOrderDeleteMode && stretchingOrder.length > 1) {
      let restArray = [...stretchingOrder].filter(
        (orderList) =>
          orderList.order !==
          [...stretchingOrderDeletelist].filter(
            (deleteOrder) => deleteOrder === orderList.order
          )[0]
      );
      restArray.map((list, index) => (list.order = index + 1));
      setStretchingOrder([...restArray]);
    }
  };

  const handleOnClickDeleteCautionOrder = (order: number) => {
    if (cautionOrderDeletelist.includes(order)) {
      setCautionOrderDeletelist((prev) =>
        prev.filter((item) => item !== order)
      );
    } else {
      setCautionOrderDeletelist((prev) => [...prev, order]);
    }
  };

  const handleOnClickCautionDeleteButton = () => {
    setIsCautionOrderDeleteMode((prev) => !prev);

    if (isCautionOrderDeleteMode) {
      let restArray = [...cautionOrder].filter(
        (orderList) =>
          orderList.order !==
          [...cautionOrderDeletelist].filter(
            (deleteOrder) => deleteOrder === orderList.order
          )[0]
      );
      restArray.map((list, index) => (list.order = index + 1));
      setCautionOrder([...restArray]);
    }
  };

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
                <SubTitle required>제목</SubTitle>
                <Input
                  value={inputValue}
                  setValue={(e) => setInputValue(e.target.value)}
                ></Input>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={16}
                justifyContent="start"
                width={"100%"}
              >
                <SubTitle required>부위</SubTitle>
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
                <SubTitle caption="＊효과1 선택필수">효과</SubTitle>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="start"
                  gap={8}
                >
                  <ComboBox
                    size="sm"
                    list={effectsCategory}
                    value={effectValue1}
                    setValue={setEffectValue1}
                    label="효과1"
                  ></ComboBox>
                  <ComboBox
                    size="sm"
                    list={effectsCategory}
                    value={effectValue2}
                    setValue={setEffectValue2}
                    label="효과2"
                  ></ComboBox>
                  <ComboBox
                    size="sm"
                    list={effectsCategory}
                    value={effectValue3}
                    setValue={setEffectValue3}
                    label="효과3"
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
                <SubTitle required>이미지</SubTitle>
                <Box width={80}>
                  <Button size="xs" variants="secondary">
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
                height={"100%"}
              >
                <SubTitle required>스트레칭 방법 및 순서</SubTitle>
                <Box
                  border={` 1px solid ${colors.g000}`}
                  display="flex"
                  flexDirection="column"
                  borderRadius={8}
                  overflow="hidden"
                  gap={1}
                  backgroundColor={colors.g000}
                >
                  {stretchingOrder.map((item) => (
                    <InputTableItem
                      order={item.order}
                      key={`stretching-oreder-${item.order}`}
                      deleteMode={isStretchingOrderDeleteMode}
                      onClickDelete={handleOnClickDeleteStretchingOrder}
                    >
                      <Input
                        value={item.detail}
                        setValue={(e) =>
                          setStretchingOrder((prev) =>
                            prev.map((prevItem) =>
                              prevItem.order === item.order
                                ? { ...prevItem, detail: e.target.value }
                                : prevItem
                            )
                          )
                        }
                        invisible
                      ></Input>
                    </InputTableItem>
                  ))}
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="start"
                  gap={4}
                >
                  {!isStretchingOrderDeleteMode && (
                    <Box width={80}>
                      <Button
                        size="xs"
                        variants="secondary"
                        onClick={() =>
                          setStretchingOrder((prev) => [
                            ...prev,
                            { order: prev.at(-1).order + 1, detail: "" },
                          ])
                        }
                      >
                        +추가
                      </Button>
                    </Box>
                  )}
                  <Box width={80}>
                    <Button
                      size="xs"
                      variants="primary"
                      onClick={handleOnClickStretchingDeleteButton}
                    >
                      {isStretchingOrderDeleteMode ? "확인" : "삭제"}
                    </Button>
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
                <SubTitle required>권장 횟수</SubTitle>
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
                        value={preferTimeValue}
                        setValue={setPreferTimeValue}
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
                        value={preferSetValue}
                        setValue={setPreferSetValue}
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
                <SubTitle>주의할 점</SubTitle>
                {cautionOrder.length > 0 && (
                  <Box
                    border={` 1px solid ${colors.g000}`}
                    display="flex"
                    flexDirection="column"
                    borderRadius={8}
                    overflow="hidden"
                    gap={1}
                    backgroundColor={colors.g000}
                  >
                    {cautionOrder.map((item) => (
                      <InputTableItem
                        order={item.order}
                        key={`caution-oreder-${item.order}`}
                        deleteMode={isCautionOrderDeleteMode}
                        onClickDelete={handleOnClickDeleteCautionOrder}
                      >
                        <Input
                          value={item.detail}
                          setValue={(e) =>
                            setCautionOrder((prev) =>
                              prev.map((prevItem) =>
                                prevItem.order === item.order
                                  ? { ...prevItem, detail: e.target.value }
                                  : prevItem
                              )
                            )
                          }
                          invisible
                        ></Input>
                      </InputTableItem>
                    ))}
                  </Box>
                )}
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="start"
                  gap={4}
                >
                  {!isCautionOrderDeleteMode && (
                    <Box width={80}>
                      <Button
                        size="xs"
                        variants="secondary"
                        onClick={() =>
                          setCautionOrder((prev) => [
                            ...prev,
                            {
                              order: prev.at(-1) ? prev.at(-1).order + 1 : 1,
                              detail: "",
                            },
                          ])
                        }
                      >
                        +추가
                      </Button>
                    </Box>
                  )}
                  <Box width={80}>
                    <Button
                      size="xs"
                      variants="primary"
                      onClick={handleOnClickCautionDeleteButton}
                    >
                      {isCautionOrderDeleteMode ? "확인" : "삭제"}
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
                  <SubTitle>참고영상 링크</SubTitle>
                  <Box
                    display="flex"
                    justifyContent="start"
                    alignItems="center"
                    gap={8}
                  >
                    <FiLink2></FiLink2>
                    <Box width={"100%"}>
                      <Input
                        value={videoLink}
                        setValue={(e) => setVideoLink(e.target.value)}
                      ></Input>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box display="flex" gap={8} width={320} justifyContent="center">
                  <Button
                    size="md"
                    variants="secondary"
                    onClick={() => router.push("/stretching")}
                  >
                    취소
                  </Button>
                  <Button size="md" variants="primary">
                    등록
                  </Button>
                </Box>
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
