import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookView from './components/BookView';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookView />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
