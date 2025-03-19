import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import theme from "./theme";
import AudioPlayer from "@/components/AudioPlayer";

export default function Dublagem() {
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
      <Stack
        direction="row"
        spacing={2}
        alignItems={"center"}
        sx={{
          mt: isDesktop ? 15 : 5,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/4d0de084-09ed-4e3d-9089-24e16dcba5a5.jpg"
          sx={{ width: 120, height: 120 }}
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            lineHeight: 1,
          }}
        >
          {"Dubladora, atriz e cantora"}
        </Typography>
      </Stack>
      <Typography
        textAlign={"justify"}
        sx={{ fontSize: "1.25rem", mb: 5, mt: -5, fontWeight: "bold" }}
      >
        <br />
        {"Warm, professional, clear voice."}
      </Typography>
      <Typography
        textAlign={"justify"}
        sx={{ fontSize: "1.25rem", mb: 5, mt: -5 }}
      >
        {"Português nativo, inglês fluente, espanhol e francês básicos."}
        <br />
        {
          "Experienced in many areas of voiceover such as; video games, action play, commercial, corporate, e-learning and radio dramas… to name a few."
        }
      </Typography>
      <Stack
        direction={isDesktop ? "row" : "column"}
        spacing={3}
        sx={{ mb: 6 }}
      >
        {/* EN Audios */}
        <Stack direction={"column"} spacing={2}>
          <AudioPlayer
            src="voice/Gaming_EN.mp3"
            title="Gaming Demo"
            subtitle="English"
          />
          <AudioPlayer
            src="voice/Corporate_EN.mp3"
            title="Corporate Demo"
            subtitle="English"
          />
          <AudioPlayer
            src="voice/Commercial_EN.mp3"
            title="Commercial Demo"
            subtitle="English"
          />
          <AudioPlayer
            src="voice/Narration_EN.mp3"
            title="Narration Demo"
            subtitle="English"
          />
        </Stack>
        {/* PT Audios */}
        <Stack direction={"column"} spacing={2}>
          <AudioPlayer
            src="voice/Gaming_PT.mp3"
            title="Demo Gaming"
            subtitle="Português"
            waveColor="green"
          />
          <AudioPlayer
            src="voice/Corporate_PT.mp3"
            title="Demo Corporativo"
            subtitle="Português"
            waveColor="green"
          />
          <AudioPlayer
            src="voice/Comercial_PT.mp3"
            title="Demo Comercial"
            subtitle="Português"
            waveColor="green"
          />
          <AudioPlayer
            src="voice/Narration_PT.mp3"
            title="Demo Narração"
            subtitle="Português"
            waveColor="green"
          />
        </Stack>
      </Stack>
    </Box>
  );
}
