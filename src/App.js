import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from './Component/Pages/Home/Home.jsx';
import Service from './Component/Pages/Services/Services.jsx';
function App() {
	return (
    <BrowserRouter>
    <React.Fragment>
			<Navbar/>
		</React.Fragment>
      <Routes >
        <Route path="/" element={<Home/>} exact/>
        <Route path="/contact" element={<Service/>}/>
      </Routes>
    </BrowserRouter>
	);
}

export default App;