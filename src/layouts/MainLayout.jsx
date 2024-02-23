import { Box } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainLayout(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ mt: "74px", display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <main style={{ background: "#E9ECEF" }}>{props.children}</main>

          <Box sx={{ marginLeft: "257px" }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default MainLayout;
