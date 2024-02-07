import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import Home from './components/Home';
import MovieDetalis from './Pages/MovieDetalis';
// import MovieCard from './components/MovieCard';
import Biografy from './components/Biografi';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
                 <Header/>
                 <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/popular' element={<Popular/>}/>
                  <Route path='/topRated' element={<TopRated/>}/>
                  <Route path='/movieDetalis/:id' element={<MovieDetalis  />}/>
                  <Route path='/biografy/:id' element={<Biografy/>}/>
                  <Route path='/movieSearch/:movieName' element={<Search/>}/>
                  {/* <Route path='/movieDetalis' element={<MovieCard/>}/> */}
                 </Routes> 

    </div>
  );
}

export default App;
