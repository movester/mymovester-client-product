import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import Modal from "../Modal";
import styled from "styled-components";
import { colors } from "../../../constants/style";
import { Typography } from "movester-design-system";
import { IoIosClose } from "react-icons/io";

interface IProps {
  title: string;
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutsideClick: (e: any) => void;
  setModalClose: Dispatch<SetStateAction<boolean>>;
}

const RoutineListModal = (props: PropsWithChildren<IProps>) => {
  const { modalRef, modalOutsideClick, children, title, setModalClose } = props;
  return (
    <Modal
      modalRef={modalRef}
      modalOutsideClick={modalOutsideClick}
      backgroundColor
    >
      <ModalWrapper>
        <TitleArea>
          <div></div>
          <Typography>{title}</Typography>
          <IoIosClose
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setModalClose(false)}
          ></IoIosClose>
        </TitleArea>
        {children}
      </ModalWrapper>
    </Modal>
  );
};

export default RoutineListModal;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.f000};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  width: 30%;
  max-width: 450px;
  min-width: 300px;
`;

const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
