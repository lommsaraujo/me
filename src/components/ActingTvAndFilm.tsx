import { Stack, Typography } from "@mui/material";
import Project from "./Project";

export default function TvAndFilm() {
  return (
    <Stack spacing={15}>
      <Project
        name={"O Advogado de Deus"}
        description={"Longa metragem."}
        info={"Direção: Wagner de Assis, 2024."}
        img={"./credits/adv.jpeg"}
        side={"r"}
      />
    </Stack>
  );
}
