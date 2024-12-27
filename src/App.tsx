import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './pages/PostsList';
import PostDetails from './pages/PostDetails';
import AddPost from './pages/AddPost';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </Router>
  );
};

export default App;
