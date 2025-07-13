import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewPost from './components/ViewPost';
import Addpost from './components/Addpost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewPost />} />
          <Route path="/add-post" element={<Addpost />} />
          <Route path="/search-post" element={<SearchPost />} />
          <Route path="/delete-post" element={<DeletePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
