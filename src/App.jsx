import "./App.css";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import Movies from "./components/Movies";
function App() {
  return (
    <>
      <Box p={4}>
        <Navbar />
      </Box>
      <Box>
        <Movies />
      </Box>
    </>
  );
}

export default App;
