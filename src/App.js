import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
