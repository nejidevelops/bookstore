import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import AddBook from './components/AddBook';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<AddBook />} />
        <Route path="/categories" element={<Booklist />} />
      </Routes>
    </div>
  );
}

export default App;
