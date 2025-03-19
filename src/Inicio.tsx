import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "./theme";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

export default function Inicio() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "transparent",
      }}
    >
      <Typography
        textAlign={"center"}
        sx={{
          fontFamily: "Mogra",
          fontWeight: "bold",
          fontSize: "7rem",
          color: "white",
          pt: isDesktop ? 44 : 15,
          lineHeight: 1,
          position: "relative",
        }}
      >
        {"Lomms Araújo"}
      </Typography>
      <Typography
        textAlign={"center"}
        sx={{
          textTransform: "uppercase",
          fontSize: "1.25rem",
          fontWeight: "bold",
          mb: 18,
          color: "white",
          position: "relative",
        }}
      >
        {"atriz, dubladora & humorista"}
      </Typography>
      {/* Buttons for Spotlight and Elenco Digital */}
      <Stack direction={"row"} justifyContent={"center"} spacing={2}>
        {/* Elenco Digital */}
        <Button
          target="_blank"
          component="a"
          href="https://elencodigital.com.br/LommsAraujo"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
          }}
        >
          <img
            src="https://i.pinimg.com/originals/41/01/33/410133be212eb1ef8d57bd4cb2d8cf1c.png"
            alt="icon"
            style={{
              width: 70,
            }}
          />
        </Button>
      </Stack>
      <Container sx={{ mt: 35, pb: 10 }}>
        {/* Reels Buttons*/}
        <Stack spacing={4} alignItems={"start"} sx={{ mb: 5 }}>
          {/* Actings Reel */}
          <Button
            target="_blank"
            component="a"
            href="https://youtu.be/xpTILFhFDxs"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 20,
              fontWeight: "normal",
            }}
          >
            <PlayCircleIcon sx={{ width: 60, height: 60, mr: 2 }} /> Assita meu
            showreel
          </Button>
          {/* Comedy Reel */}
          <Button
            target="_blank"
            component="a"
            href="https://youtu.be/TqBup73BMP0"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 20,
              fontWeight: "normal",
            }}
          >
            <PlayCircleIcon sx={{ width: 60, height: 60, mr: 2 }} />
            Assita meu reel de comédia
          </Button>
        </Stack>
        <Typography textAlign={"justify"}>
          <br />
          {
            "Atriz nascida no Rio de Janeiro. Estudo Teatro desde os 13 anos de idade."
          }
          <br />
          {
            "Possuo Técnico Profissionalizante em Artes Cênicas pela CAL - Casa das Artes de Laranjeiras. Também estudei Dublagem no Instituto Artístico Brasileiro. Curso Licenciatura em Artes Cênicas e produzo conteúdos para plataformas digitais. Estudo Teatro desde os 13 anos de idade e em 2007 estreei nos palcos do SESC. "
          }
          <br />
          {
            "Ao longo dos anos, realizei muitas peças e em 2024 tive a oportunidade de participar pela primeira vez de um filme longa metragem: 'O Advogado de Deus', dirigido por Wagner de Assis onde pude contracenar com o ator Danilo Mesquita. "
          }
          <br />
          {
            "Minha experiência inclui peças, trabalhos audiovisuais, workshops, entre outros."
          }
        </Typography>
      </Container>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        spacing={3}
        sx={{ pb: 10 }}
      >
        <img
          src="https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/7b635ad9-32bc-43f5-82ea-404508ad59b2.jpg"
          width="40%"
        />
        <img
          src="https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/31efde45-c3aa-4764-8fea-2237fa5fae57.jpg"
          width="40%"
        />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          target="_blank"
          href="https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/elenco/178941/qPPUYsSqEsTUAdeVkMX3Pl2LjAQdrxnRXHKdTWVc.pdf"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          download de currículo
        </Button>
      </Box>
    </Box>
  );
}
