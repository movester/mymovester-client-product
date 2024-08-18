import { styled } from "styled-components";
import { MemorizedNavigator } from "../../components/utils/Navigator";
import { colors } from "../../constants/style";
import { useEffect, useState } from "react";
import {
  EFFECT_CATEGORY,
  ICategoryIconBoxType,
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
import { useRouter } from "next/router";
import { Box, ComboBox } from "movester-design-system";
import { NextPageContext } from "next";
import { useInView } from "react-intersection-observer";

const PAGE_SIZE = 10;
const GRID_MAX_WIDTH = 900;

export type labeItemType = { label: string; labelId: string };

interface styleType {
  $ismobile: boolean;
}

const StretchingPage = ({ isLoggined }) => {
  const labelItems = [
    { label: "타겟 부위", labelId: "sections" },
    { label: "효과", labelId: "effects" },
  ];

  const ismobile = useIsMobile();

  const router = useRouter();

  const [selectedCategoryButtonItem, setSelectedCategoryButtonItem] =
    useState<labeItemType>(labelItems[0]);
  const [listOrder, setListOrder] = useState<
    IComboBoxType<StretchingListOrderFilter>
  >(LIST_ORDER_CATEGORY[0]);
  const [selectedCategoryItem, setSelectedCategoryItem] =
    useState<ICategoryIconBoxType<
      StretchingMainCategoryType | StretchingSubCategoryType
    > | null>(null);
  const [selectedEffectItem, setSelectedEffectItem] =
    useState<ICategoryIconBoxType<StretchingEffectType> | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetching } = useStretchingInquiry(
    {
      size: PAGE_SIZE,
      orderFilter: listOrder.id,
      effect: selectedEffectItem?.id,
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
    }
  );

  const handleOnClickStretchingItem = (stretchingId) => {
    router.push({
      pathname: "stretchings/detail",
      query: { id: stretchingId },
    });
  };

  useEffect(() => {
    setSelectedCategoryItem(null);
    setSelectedEffectItem(null);
    setListOrder(LIST_ORDER_CATEGORY[0]);
  }, [selectedCategoryButtonItem]);

  const { ref, inView } = useInView({
    threshold: 0.5,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);
  return (
    <PageWrapper>
      <MemorizedNavigator
        isLoggined={isLoggined}
        pageID="STRETCHINGS"
      ></MemorizedNavigator>
      <ContentWrapper $ismobile={ismobile}>
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
            justifyContent={!ismobile ? "center" : "start"}
            alignItems="start"
            width={"100vw"}
            overflow="scroll"
            gap={4}
          >
            {selectedCategoryButtonItem.labelId === "sections"
              ? STRETCHING_TOTAL_CATEGORY.map((categoryItem) => (
                  <StretchingCategoryMenu
                    key={`category-item-id-${categoryItem.id}`}
                    menuItem={categoryItem}
                    isSelected={categoryItem.id === selectedCategoryItem?.id}
                    setSelectedItem={setSelectedCategoryItem}
                    setListOrder={setListOrder}
                  ></StretchingCategoryMenu>
                ))
              : EFFECT_CATEGORY.map((categoryItem) => (
                  <StretchingCategoryMenu
                    key={`category-item-id-${categoryItem.id}`}
                    menuItem={categoryItem}
                    isSelected={categoryItem.id === selectedEffectItem?.id}
                    setSelectedItem={setSelectedEffectItem}
                    setListOrder={setListOrder}
                  ></StretchingCategoryMenu>
                ))}
          </Box>
        </Box>
        <ContentBox>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            width={"100%"}
          >
            <ComboBox
              size="xs"
              list={LIST_ORDER_CATEGORY}
              value={listOrder}
              setValue={setListOrder}
            ></ComboBox>
          </Box>
          {data && (
            <ItemGrid>
              {data.pages.map((queryItem) =>
                queryItem?.data.map((item) => (
                  <DetailThumnailItem
                    key={`${item.id}-thumnail-list`}
                    stretchingItem={item}
                    onClick={handleOnClickStretchingItem}
                  ></DetailThumnailItem>
                ))
              )}
            </ItemGrid>
          )}
          <div ref={ref}>
            <Box height={32}></Box>
          </div>
        </ContentBox>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default StretchingPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f000};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div<styleType>`
  padding-top: ${(props) => (props.$ismobile ? "40px" : "80px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 72px;
  height: 100%;
  overflow-x: scroll;
  max-width: 2560px;
  padding-left: ${(props) => (props.$ismobile ? "16px" : "64px")};
  padding-right: ${(props) => (props.$ismobile ? "16px" : "64px")};
  padding-bottom: 64px;
`;

const ItemGrid = styled.div`
  max-width: ${GRID_MAX_WIDTH}px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContentBox = styled.div`
  max-width: ${GRID_MAX_WIDTH}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const getServerSideProps = ({ req }: NextPageContext) => {
  const isLoggined = req.headers["x-loggined"] === "true" ? true : false;

  return { props: { isLoggined } };
};
