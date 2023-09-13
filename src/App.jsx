import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Movie from './components/movie/Movie';


function App() {

  const buttonText = "Nuevo Video";
  


  let showButton;

  return(
    <Router>
        <Header buttonText={buttonText}  />
        <Routes>
          <Route path="/" element={<Movie/>} />
          <Route path="/form/" element={<Form />} />
        </Routes>
        <Footer />
    </Router>
  )
}

const  local =() =>{

}

export default App;
