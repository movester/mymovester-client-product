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

const listType = [
  { name: "최신순", id: "latest" },
  { name: "인기순", id: "famous" },
];

const StrechingPage = () => {
  const [mainValue, setMainValue] = useState(undefined);
  const [subValue, setSubValue] = useState(undefined);
  const [effectValue, setEffectValue] = useState(undefined);
  const [listTypeValue, setListTypeValue] = useState(listType[0]);
  const [inputValue, setInputValue] = useState<string>("");

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
            <ComboBox
              size="sm"
              disabled={!mainValue && !subValue}
              list={effectsCategory}
              value={effectValue}
              setValue={setEffectValue}
              label="효과"
            ></ComboBox>
          </Box>
          <Box width={400}>
            <Input
              placeholder="제목으로 검색"
              value={inputValue}
              setValue={(e) => setInputValue(e.target.value)}
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
                value={listTypeValue}
                setValue={setListTypeValue}
                list={listType}
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
                <TableGrid>
                  <TableItem>
                    <Typography variants="body1">거북목 스트레칭</Typography>
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
                <TableGrid>
                  <TableItem>
                    <Typography variants="body1">거북목 스트레칭</Typography>
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
                <TableGrid>
                  <TableItem>
                    <Typography variants="body1">거북목 스트레칭</Typography>
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
