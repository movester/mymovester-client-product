/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction } from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IProps {
  imageUrl: string;
  setImageFormatData: Dispatch<SetStateAction<any[]>>;
  setPreviewFile: Dispatch<SetStateAction<any[]>>;
  idx: number;
}

const ImageItem = (props: IProps) => {
  const { imageUrl, setImageFormatData, setPreviewFile, idx } = props;

  const handleOnClickImageDeleteButton = (idx) => {
    setImageFormatData((prev) => [...prev.splice(idx, 1)]);
    setPreviewFile((prev) => [...prev.splice(idx, 1)]);
  };

  return (
    <Draggable index={idx} draggableId={imageUrl}>
      {(provided) => (
        <ImageWrapper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img src={imageUrl} />
          <ImageDeleteButton
            onClick={() => handleOnClickImageDeleteButton(idx)}
          >
            <AiFillMinusCircle size={25} color={"#b20a2c"}></AiFillMinusCircle>
          </ImageDeleteButton>
        </ImageWrapper>
      )}
    </Draggable>
  );
};

export default ImageItem;

const ImageWrapper = styled.div`
  position: relative;
  img:hover {
    filter: brightness(0.9);
  }
`;
const ImageDeleteButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  :hover {
    cursor: pointer;
  }
`;
