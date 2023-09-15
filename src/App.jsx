import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Movie from "./components/movie/Movie";
import NuevoVideo from "./components/NuevoVideo/NuevoVideo";
import NuevaCategoria from "./components/NuevaCategoria/NuevaCategoria";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/NuevoVideo/" element={<NuevoVideo />} />
        <Route path="/NuevaCategoria/" element={<NuevaCategoria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const local = () => {};

export default App;
