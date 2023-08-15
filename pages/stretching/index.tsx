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
  LOWER_BODY_CATEGORY,
  LOWER_BODY_SEARCH_CATEGORY,
  STRETCHING_MAIN_SEARCH_CATEGORY,
  UPPER_BODY_SEARCH_CATEGORY,
} from "../../constants";
import {
  StretchingEffectType,
  StretchingListOrderFilter,
  StretchingMainCategoryType,
  StretchingSubCategoryType,
} from "../../constants/types";

const StrechingPage = () => {
  const [mainCategoryValue, setMainCategoryValue] =
    useState<IComboBoxType<StretchingMainCategoryType>>(undefined);
  const [subCategoryValue, setSubCategoryValue] =
    useState<IComboBoxType<StretchingSubCategoryType>>(undefined);
  const [effectValue, setEffectValue] =
    useState<IComboBoxType<StretchingEffectType>>(undefined);
  const [listOrderValue, setListOrderValue] = useState<
    IComboBoxType<StretchingListOrderFilter>
  >(LIST_ORDER_CATEGORY[0]);
  const [searchKeywordValue, setSearchKeywordValue] = useState<string>("");

  const router = useRouter();

  return (
    <PageWrapper>
      <Navigator></Navigator>
      <ContentWrapper>
        <ShadowBox>
          <BreadCrumb>
            <Typography variants="heading2">스트레칭</Typography>
            <Button
              size="sm"
              width={160}
              onClick={() => router.push("/stretching/post")}
            >
              + 추가하기
            </Button>
          </BreadCrumb>
        </ShadowBox>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="start"
          width="100%"
        >
          <Box display="flex" justifyContent="start" alignItems="start" gap={8}>
            <ComboBox
              size="sm"
              list={STRETCHING_MAIN_SEARCH_CATEGORY}
              value={mainCategoryValue}
              setValue={setMainCategoryValue}
              label="대분류"
            ></ComboBox>
            <ComboBox
              size="sm"
              disabled={!mainCategoryValue}
              list={
                mainCategoryValue?.id === "total"
                  ? UPPER_BODY_SEARCH_CATEGORY.concat(LOWER_BODY_CATEGORY)
                  : mainCategoryValue?.id === "UPPER_BODY"
                  ? UPPER_BODY_SEARCH_CATEGORY
                  : LOWER_BODY_SEARCH_CATEGORY
              }
              value={subCategoryValue}
              setValue={setSubCategoryValue}
              label="중분류"
            ></ComboBox>
            <ComboBox
              size="sm"
              disabled={!subCategoryValue}
              list={EFFECT_CATEGORY}
              value={effectValue}
              setValue={setEffectValue}
              label="효과"
            ></ComboBox>
          </Box>
          <Box width={400}>
            <Input
              placeholder="제목으로 검색"
              value={searchKeywordValue}
              setValue={(e) => setSearchKeywordValue(e.target.value)}
            ></Input>
          </Box>
        </Box>
        <ShadowBox>
          <Box
            padding={32}
            overflow="scroll"
            gap={32}
            display="flex"
            flexDirection="column"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="end"
              width={"100%"}
            >
              <Typography variants="body2" color={colors.g100}>
                총 30개
              </Typography>
              <ComboBox
                size="xs"
                value={listOrderValue}
                setValue={setListOrderValue}
                list={LIST_ORDER_CATEGORY}
              ></ComboBox>
            </Box>
            <Table>
              <TableGrid>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    제목
                  </Typography>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    부위
                  </Typography>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    효과
                  </Typography>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    조회수
                  </Typography>
                </TableItem>
                <TableItem>
                  <Typography variants="body1" color={colors.g300}>
                    등록일시
                  </Typography>
                </TableItem>
              </TableGrid>
              <TableGirdWrapper>
                <TableGrid onClick={() => router.push(`stretching/detail/1`)}>
                  <TableItem>
                    <Typography variants="heading2">거북목 스트레칭</Typography>
                  </TableItem>
                  <TableItem>
                    <Typography variants="body1">{"상체 > 등/몸통"}</Typography>
                  </TableItem>
                  <TableItem>
                    <Typography variants="body1">자세개선, 통증완화</Typography>
                  </TableItem>
                  <TableItem>
                    <Typography variants="body1">30</Typography>
                  </TableItem>
                  <TableItem>
                    <Typography variants="body1">2023-08-01</Typography>
                  </TableItem>
                </TableGrid>
              </TableGirdWrapper>
            </Table>
          </Box>
        </ShadowBox>
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

const Table = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.g300};
  gap: 1px;
`;

const TableGirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.f200};
  gap: 1px;
  :hover {
    div {
      background-color: ${colors.f100};
      cursor: pointer;
    }
  }
`;

const TableGrid = styled.div`
  background-color: ${colors.f200};
  gap: 1px;
  display: grid;
  grid-template-columns:
    minmax(400px, 10fr) minmax(160px, 4fr) minmax(240px, 6fr)
    minmax(80px, 2fr) minmax(120px, 3fr);
  align-items: end;
`;
const TableItem = styled.div`
  background-color: ${colors.f000};
  width: 100%;
  padding: 16px;
  height: 100%;
  text-align: start;
  display: flex;
  align-items: center;
`;
