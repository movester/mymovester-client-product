import { styled } from "styled-components";
import Navigator from "../../components/utils/Navigator";
import { colors } from "../../constants/style";
import ShadowBox from "../../components/utils/ShadowBox";
import Typography from "../../components/basic/Typography";
import Button from "../../components/basic/Button";
import ComboBox from "../../components/basic/ComboBox";
import { useState } from "react";
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
import { StretchingListOrderFilter } from "../../constants/types";

export type labeItemType = { label: string; labelId: string };

const StrechingPage = () => {
  const labelItems = [
    { label: "타겟 부위", labelId: "sections" },
    { label: "효과", labelId: "effects" },
  ];

  const isMobile = useIsMobile();

  const [selectedItem, setSelectedItem] = useState<labeItemType>(labelItems[0]);
  const [listOrder, setListOreder] = useState<
    IComboBoxType<StretchingListOrderFilter>
  >(LIST_ORDER_CATEGORY[0]);

  const data = useStretchingInquiry({
    page: 1,
    size: 15,
  });

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
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          ></CategoryButton>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="start"
          >
            {selectedItem.labelId === "sections"
              ? STRETCHING_TOTAL_CATEGORY.map((categoryItem) => (
                  <StretchingCategoryMenu
                    key={`category-item-id-${categoryItem.id}`}
                    menuItem={categoryItem}
                  ></StretchingCategoryMenu>
                ))
              : EFFECT_CATEGORY.map((categoryItem) => (
                  <StretchingCategoryMenu
                    key={`category-item-id-${categoryItem.id}`}
                    menuItem={categoryItem}
                  ></StretchingCategoryMenu>
                ))}
          </Box>
        </Box>
        <Box>
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
