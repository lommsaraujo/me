import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "./theme";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ActingFooter from "./components/ActingFooter";
import Other from "./components/ActingOther";
import Teatro from "./components/ActingTheatre";
import TvAndFilm from "./components/ActingTvAndFilm";
import { useState } from "react";

type Tab = "theatre" | "tv" | "musicals" | "other";

export default function Atriz() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [tab, setTab] = useState<Tab>("tv");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        spacing={isDesktop ? 4 : 2}
        sx={{ justifyContent: "center", mb: 5, mt: isDesktop ? 15 : 5 }}
      >
        <Button
          variant="contained"
          onClick={() => setTab("tv")}
          sx={{
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          TV e Cinema
        </Button>
        <Button
          variant="contained"
          onClick={() => setTab("theatre")}
          sx={{
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          Teatro
        </Button>

        <Button
          variant="contained"
          onClick={() => setTab("other")}
          sx={{
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          Outros
        </Button>
      </Stack>

      <Typography textAlign={"justify"} sx={{ fontSize: "1rem", mb: 5 }}>
        {
          "Aqui estão alguns projetos de que participei. Para mais informações acesse meu Elenco Digital ou PDF CV abaixo."
        }
      </Typography>
      {/* Reels Buttons*/}
      <Stack direction={"row"} spacing={3} alignItems={"start"} sx={{ mb: 5 }}>
        {/* Actings Reel */}
        <Button
          target="_blank"
          component="a"
          href="https://youtu.be/xpTILFhFDxs"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 15,
            fontWeight: "normal",
          }}
        >
          <PlayCircleIcon sx={{ width: 40, height: 40, mr: 2 }} />
          Assita meu showreel
        </Button>
        {/* Musical Reel */}
        <Button
          target="_blank"
          component="a"
          href="https://youtu.be/TqBup73BMP0"
          sx={{
            color: theme.palette.font.main,
            minWidth: 0,
            fontSize: 15,
            fontWeight: "normal",
          }}
        >
          <PlayCircleIcon sx={{ width: 40, height: 40, mr: 2 }} />
          Assita meu reel de comédia
        </Button>
      </Stack>

      <Divider flexItem sx={{ mb: 5 }} />

      {tab === "theatre" && <Teatro />}
      {tab === "tv" && <TvAndFilm />}
      {tab === "other" && <Other />}

      <ActingFooter />
    </Box>
  );
}
