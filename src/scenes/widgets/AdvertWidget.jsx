//3rd column

import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          VIT Bhopal
        </Typography>
        <Typography color={medium}>Estb 2017</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/lionVit.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>VIT Bhopal</Typography>
        
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Empowering minds in Bhopal. VIT Bhopal's vibrant community thrives even closer now with our new social web app. Connect, collaborate, and propel your future.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
