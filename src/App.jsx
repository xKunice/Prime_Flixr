import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Button from './components/button/Button';
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Movie from './components/movie/Movie';


function App() {

  return(
    <Router>
        <Header/>
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
