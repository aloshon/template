import './App.css';
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Profile from "./Routes/Profile";
import Post from "./Routes/Post";
import NotFound from './Routes/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
