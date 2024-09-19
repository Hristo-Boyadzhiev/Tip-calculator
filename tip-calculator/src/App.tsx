import Box from "@mui/material/Box";
import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";

export default function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: 1000,
          height: 500,
          background: "white",
          borderRadius: "1.5em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2em",
            margin: "2em",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1em",
              flex: 1,
              border: "0.1em solid black",
              borderRadius: "1.5em",
              padding: "1em",
            }}
          >
            <LeftSide />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              border: "0.1em solid black",
              borderRadius: "1.5em",
            }}
          >
            Proba1
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
