import Navbar  from './components/Navbar/Navbar';
import Timeline from './components/Timeline/Timeline';
import Post from './components/Post/Post';
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 


function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Timeline />} />
            <Route exact path="/post/:id" element={<Post />} />
        </Routes>
    </>
  );
}

export default App;
