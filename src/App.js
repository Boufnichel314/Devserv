import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from './Component/Pages/Home/Home.jsx';
import Contact from './Component/Pages/Contact/Contact.jsx';
function App() {
	return (
    <BrowserRouter>
    <React.Fragment>
			<Navbar/>
		</React.Fragment>
      <Routes >
        <Route path="/" element={<Home/>} exact/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
	);
}

export default App;