import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Coinpage from "./pages/Coinpage";
import Nopage from "./pages/Nopage";
import { makeStyles } from "tss-react/mui";
import Alert from "./components/Alert";

function App() {
  const useStyles = makeStyles()({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  });
  const { classes } = useStyles();
  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coins/:id" element={<Coinpage />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
      <Alert />
    </Router>
  );
}

export default App;
