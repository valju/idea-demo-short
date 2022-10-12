import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import CategoryListView from './views/CategoryListView';
import CategoryDetailsView from './views/CategoryDetailsView';

function App() {
  return (
      <div className="App">
        <nav>
          <span>Extra navbar at top: </span>
          <NavLink to="/home">Home</NavLink>
          <span> </span>
          <NavLink to="/category">Categories</NavLink>
        </nav>
        <Routes>
          <Route path="home" element={<HomeView />} />
          <Route path="category" element={<CategoryListView />} />
          <Route path="/category/:categoryId" element={<CategoryDetailsView />} />
        </Routes>
      </div>   
  );
}

export default App;
