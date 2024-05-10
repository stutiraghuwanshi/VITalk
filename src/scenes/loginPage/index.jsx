import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      
        <Box
        width="100%"
        backgroundColor= "#0E3D8B" // Change this to the desired color
        p="1rem 6%"
        textAlign="center"
      >
        
      
      
        <Typography fontWeight="bold" fontSize="40px" color="#FFFFFE">
          VITalk
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor="#FFFFFE"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Elevate your VIT experience with VITalk. Connect-Share-Thrive !
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
