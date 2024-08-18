import { PropsWithChildren } from "react";
import styled from "styled-components";

interface IProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  backgroundColor?: boolean;
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutsideClick: (e: any) => void;
}

const Modal = (props: PropsWithChildren<IProps>) => {
  const {
    children,
    modalOutsideClick,
    modalRef,
    backgroundColor = false,
  } = props;
  return (
    <Wrapper
      ref={modalRef}
      onClick={(e) => modalOutsideClick(e)}
      $backgroundColor={backgroundColor}
    >
      {children}
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div<{ $backgroundColor: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${(props) =>
    props.$backgroundColor ? "rgba(0,0,0,0.2)" : "transparent"};
  z-index: 800;
`;
