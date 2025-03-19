import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import theme from "./theme";
import { RouterLink, routes } from "./Router";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

export default function Contato() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const SLIDE_WIDTH = isDesktop ? 288 : 160;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "3rem",
          mb: 3,
          mt: isDesktop ? 25 : 5,
        }}
      >
        {"Entre em contato"}
      </Typography>

      <Typography textAlign={"justify"} sx={{ fontSize: "1.25rem", mb: 8 }}>
        <br />
        {"Fale comigo!"} <br />
        {"Fique a vontade para entrar em contato usando os links abaixo."}
      </Typography>
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        <Button
          variant="contained"
          size="large"
          href="https://instagram.com/lommsaraujo"
          startIcon={<InstagramIcon />}
        >
          Instagram
        </Button>
        <Button
          variant="contained"
          size="large"
          href="https://tiktok.com/@lommsaraujo"
          startIcon={<MusicNoteIcon />}
        >
          TikTok
        </Button>
        <Button
          variant="contained"
          size="large"
          href="mailto:lomsaraujo@gmail.com"
          startIcon={<MailOutlineIcon />}
        >
          Email
        </Button>
        <Button
          variant="contained"
          size="large"
          href="https://elencodigital.com.br/LommsAraujo"
          startIcon={<StarBorderIcon />}
        >
          Elenco Digital
        </Button>
      </Stack>
    </Box>
  );
}
