import { PropsWithChildren } from "react";
import styled from "styled-components";

interface IProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutsideClick: (e: any) => void;
}

const Modal = (props: PropsWithChildren<IProps>) => {
  const { children, modalOutsideClick, modalRef } = props;
  return (
    <Wrapper ref={modalRef} onClick={(e) => modalOutsideClick(e)}>
      {children}
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 800;
`;
