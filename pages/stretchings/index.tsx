import { styled } from "styled-components";
import Navigator from "../../components/utils/Navigator";
import { colors } from "../../constants/style";
import ShadowBox from "../../components/utils/ShadowBox";
import Typography from "../../components/basic/Typography";
import Button from "../../components/basic/Button";
import ComboBox from "../../components/basic/ComboBox";
import { useEffect, useState } from "react";
import Input from "../../components/basic/Input";
import { useRouter } from "next/router";
import Box from "../../components/basic/Box";
import {
  EFFECT_CATEGORY,
  IComboBoxType,
  LIST_ORDER_CATEGORY,
  STRETCHING_TOTAL_CATEGORY,
} from "../../constants";
import CategoryButton from "../../components/utils/CategoryButton";
import useIsMobile from "../../hooks/utils/useIsMobile";
import StretchingCategoryMenu from "../../components/utils/StretchingCategoryMenu";
import useStretchingInquiry from "../../hooks/api/useStretchingInquiry";
import DetailThumnailItem from "../../components/utils/DetailThumnailItem";
import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";

export type labeItemType = { label: string; labelId: string };

const StrechingPage = () => {
  const labelItems = [
    { label: "타겟 부위", labelId: "sections" },
    { label: "효과", labelId: "effects" },
  ];

  const isMobile = useIsMobile();

  const [selectedCategoryButtonItem, setSelectedCategoryButtonItem] =
    useState<labeItemType>(labelItems[0]);
  const [listOrder, setListOreder] = useState<
    IComboBoxType<StretchingListOrderFilter>
  >(LIST_ORDER_CATEGORY[0]);
  const [selectedCategoryItem, setSelectedCategoryItem] =
    useState<IComboBoxType<
      StretchingMainCategoryType | StretchingSubCategoryType
    > | null>(null);
  const [seletedEffectItem, setSeletedEffectItem] =
    useState<IComboBoxType<StretchingEffectType> | null>(null);

  const data = useStretchingInquiry({
    page: 1,
    size: 15,
    orderFilter: listOrder.id,
    effect: seletedEffectItem?.id,
    mainCategory:
      selectedCategoryItem?.id === "UPPER_BODY" ||
      selectedCategoryItem?.id === "LOWER_BODY"
        ? selectedCategoryItem?.id
        : null,
    subCategory:
      selectedCategoryItem?.id !== "UPPER_BODY" &&
      selectedCategoryItem?.id !== "LOWER_BODY"
        ? selectedCategoryItem?.id
        : null,
  });

  useEffect(() => {
    setSelectedCategoryItem(null);
    setSeletedEffectItem(null);
  }, [selectedCategoryButtonItem]);

  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={32}
        >
          <CategoryButton
            labelItems={labelItems}
            selectedItem={selectedCategoryButtonItem}
            setSelectedItem={setSelectedCategoryButtonItem}
          ></CategoryButton>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="start"
          >
            {selectedCategoryButtonItem.labelId === "sections"
              ? STRETCHING_TOTAL_CATEGORY.map((categoryItem) => (
                  <StretchingCategoryMenu
                    key={`category-item-id-${categoryItem.id}`}
                    menuItem={categoryItem}
                    isSelected={categoryItem.id === selectedCategoryItem?.id}
                    setSelectedItem={setSelectedCategoryItem}
                  ></StretchingCategoryMenu>
                ))
              : EFFECT_CATEGORY.map((categoryItem) => (
                  <StretchingCategoryMenu
                    key={`category-item-id-${categoryItem.id}`}
                    menuItem={categoryItem}
                    isSelected={categoryItem.id === seletedEffectItem?.id}
                    setSelectedItem={setSeletedEffectItem}
                  ></StretchingCategoryMenu>
                ))}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="start"
          gap={16}
        >
          <ComboBox
            size="xs"
            list={LIST_ORDER_CATEGORY}
            value={listOrder}
            setValue={setListOreder}
          ></ComboBox>
          <ItemGrid>
            {data?.stretchingList &&
              data.stretchingList.map((item) => (
                <DetailThumnailItem
                  stretchingItem={item}
                  key={`${item.id}-thumnail-list`}
                ></DetailThumnailItem>
              ))}
          </ItemGrid>
        </Box>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StrechingPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f000};
`;

const ContentWrapper = styled.div`
  padding-top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 72px;
  height: 100%;
  overflow-x: scroll;
  max-width: 2480px;
  padding-left: 64px;
  padding-right: 64px;
  padding-bottom: 64px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
