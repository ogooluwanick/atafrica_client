import './App.scss';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
        <Router>
                <div className="App">
                        <NavBar/>

                        <main >
                                <Routes>
                                        <Route path='/' element={ <LandingPage/>} exact/> 
                                </Routes>
                        </main>

                        <Footer/>
                </div>
        </Router>
  );
}

export default App;
