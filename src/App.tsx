import { Box, CssBaseline } from "@mui/material";
import MobileLayout from "./components/MobileLayout";
import DesktopLayout from "./components/DesktopLayout";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

interface Bg {
  background?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
}

const homeBg: Bg = {
  backgroundImage:
    "url('https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/5e48cd36-223f-4f52-bdec-ab4a96ec87a0.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 15%",
};

export default function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const location = useLocation();
  const [bg, setBg] = useState<Bg | null>(homeBg);

  const layout = useMemo(
    () => (isDesktop ? <DesktopLayout /> : <MobileLayout />),
    [isDesktop]
  );

  useEffect(() => {
    if (location.pathname === "/inicio") {
      setBg(homeBg);
    } else {
      setBg(null);
    }
  }, [location]);

  return (
    <Box
      sx={{
        width: "100vw",
        transition: "background-color 500ms ease-in-out",
        ...bg,
      }}
    >
      {/* <video
        src="./MiniReel2025.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          objectFit: "cover",
          position: "absolute",
          zIndex: 0,
          display: isInicio ? "block" : "none",
        }}
      /> */}
      <CssBaseline />
      {layout}
    </Box>
  );
}
