import {
  Box,
  Button,
  CheckBox,
  Input,
  Radio,
  Textarea,
  Typography,
} from "movester-design-system";
import { styled } from "styled-components";
import { colors } from "../constants/style";
import { SetStateAction, useReducer, useState } from "react";
import { useRouter } from "next/router";

const WithdrawalPage = () => {
  const [checkBox, setCheckBox] = useState(false);
  const [radio1, setRadio1] = useState<boolean>(false);
  const [radio2, setRadio2] = useState<boolean>(false);
  const [radio3, setRadio3] = useState<boolean>(false);
  const [radio4, setRadio4] = useState<boolean>(false);
  const [radio5, setRadio5] = useState<boolean>(false);
  const [textareaValue, setTextareaValue] = useState("");
  const router = useRouter();
  return (
    <PageWrapper>
      <ContentWrapper>
        <Typography variants="heading1">회원 탈퇴 신청</Typography>
        <Typography variants="body1" color={colors.g100}>
          {"movcoco님,\n뭅스터와 이별하려 하신다니 많이 아쉽습니다."}
        </Typography>
        <Box display="flex" flexDirection="column" gap={32}>
          <Box display="flex" flexDirection="column" gap={4}>
            <Typography variants="body1" color={colors.g100}>
              탈퇴하기 전 아래 내용을 확인해 주세요
            </Typography>
            <Box
              backgroundColor={colors.g200}
              padding={24}
              display="flex"
              flexDirection="column"
              gap={16}
              borderRadius={8}
              boxSahdow="4px 4px 8px rgba(0,0,0,0.1)"
            >
              <Typography variants="heading3">회원 탈퇴시 주의사항</Typography>
              <Box display="flex" flexDirection="column" gap={4}>
                <Typography variants="body2">
                  ✔️ (닉네임)님의 모든 활동 정보는 다른 사용자가 식별할 수
                  없도록 바로 삭제되며, 삭제된 데이터는 복구할 수 없어요.
                </Typography>
                <Typography variants="body2">
                  ✔️ 부정 이용 방지를 위해 탈퇴 후 30일 동안 뭅스터에 다시
                  가입할 수 없어요.
                </Typography>
              </Box>
            </Box>
            <CheckBox isChecked={checkBox} setIsChecked={setCheckBox}>
              위 내용을 모두 확인하였습니다.(필수)
            </CheckBox>
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography variants="heading3">
              뭅스터를 탈퇴하는 이유가 무엇인가요?(중복 가능)(필수)
            </Typography>
            <Box padding={16} display="flex" flexDirection="column" gap={8}>
              <Radio isChecked={radio1} setIsChecked={setRadio1}>
                이용도가 낮음
              </Radio>
              <Radio isChecked={radio2} setIsChecked={setRadio2}>
                사용하기 불편함
              </Radio>
              <Radio isChecked={radio3} setIsChecked={setRadio3}>
                개인정보 보호
              </Radio>
              <Radio isChecked={radio4} setIsChecked={setRadio4}>
                컨텐츠 부족
              </Radio>
              <Radio isChecked={radio5} setIsChecked={setRadio5}>
                기타
              </Radio>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" gap={4}>
            <Typography variants="heading3">
              뭅스터 서비스 이용 중 어떤 부분이 불편하셨나요? (선택)
            </Typography>
            <Typography variants="body2">
              뭅스터를 떠나는 이유를 자세히 알려주시겠어요? 소중한 의견을 반영해
              다시 이용하고 싶은 서비스로 발전하겠습니다.
            </Typography>
            <Box height={250}>
              <Textarea
                value={textareaValue}
                setValue={(e) => setTextareaValue(e.target.value)}
                maxLength={2000}
              ></Textarea>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          gap={8}
          width={"100%"}
          alignItems="center"
          justifyContent="center"
        >
          <Button variants="secondary" size="xs" width={240}>
            탈퇴하기
          </Button>
          <Button
            variants="primary"
            size="xs"
            width={240}
            onClick={() => router.back()}
          >
            회원유지하기
          </Button>
        </Box>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default WithdrawalPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding: 72px 32px 32px 32px;
  height: 100%;
  width: 100%;
  position: relative;
`;
