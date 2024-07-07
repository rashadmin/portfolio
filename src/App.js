import Container from 'react-bootstrap/Container';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Backend from './pages/PortfolioPages/Backend';
import Frontend from './pages/PortfolioPages/Frontend';
import Research from './pages/PortfolioPages/Research';
import DataScience from './pages/PortfolioPages/DataScience';
import DataEngineering from './pages/PortfolioPages/DataEngineering';
function App() {
  return (
    <Container className='App' fluid>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/resume' element={<Resume/>}></Route>
        {/* <Route path='/a' element={<Resume/>}></Route> */}
        <Route path='/portfolio/datascience' element={<DataScience/>}></Route>
        <Route path='/portfolio/dataengineering' element={<DataEngineering/>}></Route>
        <Route path='/portfolio/frontend' element={<Frontend/>}></Route>
        <Route path='/portfolio/backend' element={<Backend/>}></Route>
        <Route path='/portfolio/research' element={<Research/>}></Route>
        <Route path='*' element={<Navigate to='/'/>}></Route>
      </Routes>
      </BrowserRouter>
    </Container>

  );
}

export default App;
