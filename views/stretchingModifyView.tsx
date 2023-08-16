import React from "react";
import { FiLink2 } from "react-icons/fi";
import Box from "../components/basic/Box";
import Button from "../components/basic/Button";
import ComboBox from "../components/basic/ComboBox";
import Input from "../components/basic/Input";
import Typography from "../components/basic/Typography";
import InputTableItem from "../components/utils/InputTableItem";
import SubTitle from "../components/utils/SubTitle";
import { colors } from "../constants/style";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  STRETCHING_MAIN_CATEGORY,
  LOWER_BODY_CATEGORY,
  UPPER_BODY_CATEGORY,
  EFFECT_CATEGORY,
  IComboBoxType,
} from "../constants";
import {
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../constants/types";

const StretchingModifyView = () => {
  const [inputValue, setInputValue] = useState("");
  const [mainCategoryValue, setMainCategoryValue] =
    useState<IComboBoxType<StretchingMainCategoryType>>(undefined);
  const [subCategoryValue, setSubCategoryValue] =
    useState<IComboBoxType<StretchingSubCategoryType>>(undefined);
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
  const [cautionOrderDeletelist, setCautionOrderDeletelist] = useState<number[] | undefined>([]);

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
      setCautionOrderDeletelist((prev) => prev.length > 0 ? prev.push(order):);
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
          <Box display="flex" justifyContent="start" alignItems="start" gap={8}>
            <ComboBox
              size="sm"
              list={STRETCHING_MAIN_CATEGORY}
              value={mainCategoryValue}
              setValue={setMainCategoryValue}
              label="대분류"
            ></ComboBox>
            <ComboBox
              size="sm"
              disabled={!mainCategoryValue}
              list={
                mainCategoryValue?.id === "UPPER_BODY"
                  ? UPPER_BODY_CATEGORY
                  : LOWER_BODY_CATEGORY
              }
              value={subCategoryValue}
              setValue={setSubCategoryValue}
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
          <Box display="flex" justifyContent="start" alignItems="start" gap={8}>
            <ComboBox
              size="sm"
              list={EFFECT_CATEGORY}
              value={effectValue1}
              setValue={setEffectValue1}
              label="효과1"
            ></ComboBox>
            <ComboBox
              size="sm"
              list={EFFECT_CATEGORY}
              value={effectValue2}
              setValue={setEffectValue2}
              label="효과2"
            ></ComboBox>
            <ComboBox
              size="sm"
              list={EFFECT_CATEGORY}
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
      </Box>
    </Box>
  );
};

export default StretchingModifyView;
