import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import ApplicationsPage from './Pages/ApplicationsPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/applications' element={<ApplicationsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
