import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage';
 import styles from "./App.module.css"
import MovieDetails from './pages/MoviesDetails';
import Footer from './componentes/Footer/Footer';

function App() {
 return  (
  <Router>
  <main>
       <Link to="/"><h1 className={styles.title}>Películas</h1> </Link>
  </main>
   
      <Routes>
    <Route exact path='/movie/:movieId' element={<MovieDetails />} />
    <Route path='/' element={<LandingPage />} />
      </Routes>
      <Footer />
  </Router>
 )
  
    }
    export default App;
  
  
