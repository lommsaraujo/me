import {
  Link,
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import NotFound from "./NotFound";
import Inicio from "./Inicio";
import Contato from "./Contato";
import Acting from "./Acting";
import App from "./App";
import theme from "./theme";
import { Button, ListItem, Stack } from "@mui/material";
import Fotos from "./components/Fotos";
import { useState } from "react";
import Dublagem from "./Dublagem";

export interface RouteDefinition {
  label: string;
  aria: string;
  to: string;
  element: JSX.Element;
  render: boolean;
}

export const BASE_URL = "/";

export const routes: RouteDefinition[] = [
  {
    label: "Inicio",
    aria: "Navigate to inicio",
    to: "inicio",
    element: <Inicio />,
    render: true,
  },
  {
    label: "Fotos",
    aria: "Navigate to fotos",
    to: "fotos",
    element: <Fotos />,
    render: true,
  },
  {
    label: "Acting",
    aria: "Navigate to Acting",
    to: "acting",
    element: <Acting />,
    render: true,
  },
  {
    label: "Dublagem",
    aria: "Navigate to Dublagem",
    to: "dublagem",
    element: <Dublagem />,
    render: true,
  },
  {
    label: "Contato",
    aria: "Navigate to Contato",
    to: "Contato",
    element: <Contato />,
    render: true,
  },
];

export const isCurrentPath = (path: string) => {
  const location = useLocation();
  return location.pathname === path;
};

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Navigate to="/inicio" replace />,
        },
        ...routes.map((route) => {
          return {
            path: route.to,
            element: route.element,
          };
        }),
      ],
    },
  ],
  {
    basename: BASE_URL,
  }
);

export type RouterLinkProps = {
  to: string;
  label: string;
};

export function RouterLink(props: RouterLinkProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Stack
      direction={"row"}
      alignContent={"center"}
      spacing={1}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={props.to}>
        <Button
          sx={{
            color: isCurrentPath(`/${props.to}`)
              ? theme.palette.highlight.main
              : theme.palette.font.main,
            fontSize: "1.25rem",
          }}
        >
          {props.label}
        </Button>
      </Link>
    </Stack>
  );
}

export function ListRouterLink(props: RouterLinkProps) {
  return (
    <ListItem disablePadding sx={{ justifyContent: "center" }}>
      <Link
        to={props.to}
        style={{
          width: "100%",
          textDecoration: "none",
          padding: "0 1rem",
        }}
      >
        <Button
          fullWidth
          sx={{
            color: isCurrentPath(`/${props.to}`)
              ? theme.palette.highlight.main
              : theme.palette.font.main,
            my: 1,
            fontSize: "1rem",
          }}
        >
          {props.label}
        </Button>
      </Link>
    </ListItem>
  );
}
