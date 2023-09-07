import { Dispatch, SetStateAction, useState } from "react";
import { colors } from "../../constants/style";
import Box from "../basic/Box";
import Typography from "../basic/Typography";
import { labeItemType } from "../../pages/stretchings";

interface IProps {
  labelItems: labeItemType[];
  selectedItem: labeItemType;
  setSelectedItem: Dispatch<SetStateAction<labeItemType>>;
}

const CategoryButton = (props: IProps) => {
  const { labelItems, selectedItem, setSelectedItem } = props;

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
            width={200}
            height={40}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            backgroundColor={
              selectedItem.labelId === item.labelId
                ? colors.softPrimaryColor
                : colors.f000
            }
            key={`category-box-${item.label}-${item.labelId}`}
            onClick={() => setSelectedItem(item)}
          >
            <Typography
              variants="body1"
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
