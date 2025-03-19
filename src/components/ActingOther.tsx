import { Stack, Typography } from "@mui/material";
import Project from "./Project";

export default function Other() {
  return (
    <Stack spacing={15}>
      <Project
        name={"Snapchat - The Bad Cat Company"}
        description={"Publicidade"}
        info={"Snapchat, 2021."}
        img={"./credits/snapchat.png"}
        side={"r"}
      />{" "}
      <Project
        name={"Emissora RIT"}
        description={"Gravações de simulações para a programação."}
        info={"Direção: Júlio Costa, 2009"}
        img={"./credits/snapchat.png"}
        side={"l"}
      />{" "}
    </Stack>
  );
}
