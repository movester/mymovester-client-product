import { Dispatch, SetStateAction, useState } from "react";
import { colors } from "../../constants/style";
import Box from "../basic/Box";
import Typography from "../basic/Typography";
import { labeItemType } from "../../pages/stretchings";
import useIsMobile from "../../hooks/utils/useIsMobile";

interface IProps {
  labelItems: labeItemType[];
  selectedItem: labeItemType;
  setSelectedItem: Dispatch<SetStateAction<labeItemType>>;
}

const CategoryButton = (props: IProps) => {
  const { labelItems, selectedItem, setSelectedItem } = props;

  const isMobile = useIsMobile();

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      backgroundColor={colors.g000}
      border={`1px solid ${colors.g000}`}
      borderRadius={8}
      overflow="hidden"
      width="fit-content"
    >
      {labelItems.length > 0 &&
        labelItems.map((item) => (
          <Box
            width={!isMobile ? 200 : 120}
            height={!isMobile ? 40 : 30}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxSahdow="4px 4px 8px rgba(0, 0, 0, 0.1)"
            backgroundColor={
              selectedItem.labelId === item.labelId
                ? colors.softPrimaryColor
                : colors.f000
            }
            key={`category-box-${item.label}-${item.labelId}`}
            onClick={() => setSelectedItem(item)}
          >
            <Typography
              variants={!isMobile ? "body1" : "body2"}
              color={
                selectedItem.labelId === item.labelId
                  ? colors.f000
                  : colors.vividPrimaryColor
              }
            >
              {item.label}
            </Typography>
          </Box>
        ))}
    </Box>
  );
};

export default CategoryButton;
