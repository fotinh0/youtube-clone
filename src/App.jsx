import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [feedData, setFeedData] = useState(null);
  const [category, setCategory] = useState(0);

  return (
    <div>
      <Navbar
        setSidebar={setSidebar}
        setFeedData={setFeedData}
        setCategory={setCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sidebar={sidebar}
              feedData={feedData}
              setFeedData={setFeedData}
              category={category}
              setCategory={setCategory}
            />
          }
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
