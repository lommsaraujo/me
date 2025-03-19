import theme from "@/theme";
import { Button, Stack, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function Fotos() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Playfair Display",
          fontSize: "3rem",
          mt: isDesktop ? 15 : 5,
          mb: 5,
        }}
      >
        Headshots
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "left", mb: 5 }}>
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            target="_blank"
            href="https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/elenco/178941/qPPUYsSqEsTUAdeVkMX3Pl2LjAQdrxnRXHKdTWVc.pdf"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
            PDF CV
          </Button>

          <Button
            variant="contained"
            target="_blank"
            href="https://elencodigital.com.br/LommsAraujo"
            sx={{
              color: theme.palette.font.main,
              minWidth: 0,
              fontSize: 15,
              fontWeight: "normal",
            }}
          >
            Elenco Digital
          </Button>
        </Stack>
      </Box>

      <PhotoProvider>
        <ImageList cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <PhotoView src={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  width={"100%"}
                />
              </PhotoView>
            </ImageListItem>
          ))}
        </ImageList>
      </PhotoProvider>
    </Box>
  );
}

const itemData = [
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/5e48cd36-223f-4f52-bdec-ab4a96ec87a0.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/4d0de084-09ed-4e3d-9089-24e16dcba5a5.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/567e898c-1d82-4130-b620-68d3262b82da.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/0d77d77d-149a-48f7-8854-7d94730aac5e.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/bebb1435-5669-4955-8d4e-76d53a060e61.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/0386a87b-73ca-475b-b640-77bf7c07e99f.jpg",
  },

  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/4c21f409-00ff-4e1f-839f-ed238bdda8f8.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/9ceb6a84-3379-44c6-8cce-c30c83642462.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/030ec156-d37b-4891-8a40-658a43f0aac9.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/a6c8451b-9042-42d4-9e9c-f849e27cee3e.jpg",
  },

  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/a5b8d109-8184-4177-927b-8b15945c7296.jpg",
  },
  {
    title: "headshot",
    img: "https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/31efde45-c3aa-4764-8fea-2237fa5fae57.jpg",
  },
];
