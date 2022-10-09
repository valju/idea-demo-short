import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import CategoryListView from './views/CategoryListView';
import CategoryDetailsView from './views/CategoryDetailsView';

function App() {
  return (
      <div className="App">
        <nav>
          <span>Extra navbar at top: </span>
          <NavLink to="categoryListURL">Categories</NavLink>
          <span> </span>
          <NavLink to="categoryDetailsURL">Category Detail</NavLink>
        </nav>
        <Routes>
          <Route path="/" />} />
          <Route path="categoryListURL" element={<CategoryListView />} />
          <Route path="categoryDetailsURL" element={<CategoryDetailsView />} />
        </Routes>
      </div>   
  );
}

export default App;
