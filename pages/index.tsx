/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { MemorizedNavigator } from "../components/utils/Navigator";
import { middleware } from "../middleware";
import { styled } from "styled-components";
import { colors } from "../constants/style";
import { NextPageContext } from "next";

const mainPage = ({ isLoggined }) => {
  return (
    <PageWrapper>
      <MemorizedNavigator
        isLoggined={isLoggined}
        pageID="HOME"
      ></MemorizedNavigator>
    </PageWrapper>
  );
};

export default mainPage;

const PageWrapper = styled.div`
  display: flex;
  background-color: ${colors.f000};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const getServerSideProps = ({ req }: NextPageContext) => {
  const isLoggined = req.headers["x-loggined"] === "true" ? true : false;

  return { props: { isLoggined } };
};
