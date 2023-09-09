import { styled } from "styled-components";
import Navigator from "../../components/utils/Navigator";
import { colors } from "../../constants/style";
import ComboBox from "../../components/basic/ComboBox";
import { useEffect, useMemo, useState } from "react";
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
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_SIZE = 10;

export type labeItemType = { label: string; labelId: string };

interface styleType {
  isMobile: boolean;
}

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

  const { data, fetchNextPage, hasNextPage } = useStretchingInquiry({
    size: PAGE_SIZE,
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

  console.log(data?.pages, hasNextPage);
  useEffect(() => {
    setSelectedCategoryItem(null);
    setSeletedEffectItem(null);
  }, [selectedCategoryButtonItem]);

  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper isMobile={isMobile}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          gap={32}
          width={"100%"}
        >
          <CategoryButton
            labelItems={labelItems}
            selectedItem={selectedCategoryButtonItem}
            setSelectedItem={setSelectedCategoryButtonItem}
          ></CategoryButton>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent={!isMobile ? "center" : "start"}
            alignItems="start"
            width={"100vw"}
            overflow="scroll"
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
          {data && (
            <InfiniteScroll
              dataLength={data.pages[0].data.length}
              next={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={<div>로딩중</div>}
            >
              <ItemGrid>
                {data.pages.map((queryItem) =>
                  queryItem?.data.map((item) => (
                    <DetailThumnailItem
                      stretchingItem={item}
                      key={`${item.id}-thumnail-list`}
                    ></DetailThumnailItem>
                  ))
                )}
              </ItemGrid>
            </InfiniteScroll>
          )}
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

const ContentWrapper = styled.div<styleType>`
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
  padding-left: ${(props) => (props.isMobile ? "16px" : "64px")};
  padding-right: ${(props) => (props.isMobile ? "16px" : "64px")};
  padding-bottom: 64px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
