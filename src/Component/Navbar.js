import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../Styles/main.css";

function Navbar() {
    const [value, setValue] = useState(0);
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
    const navigate = useNavigate();
  useEffect(() => { 
    if(value === 0) navigate("/");
    if(value === 1) navigate("/contact");
    if(value === 2) navigate("/Offers");
  }, [value]);
	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<h3 onClick={() => {setValue(0); showNavbar()}}>Home</h3>
				<h3 onClick={() => {setValue(1); showNavbar()}}>Contact</h3>
				<h3>Test1</h3>
				<h3>Test2</h3>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;