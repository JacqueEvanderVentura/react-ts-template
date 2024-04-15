// Navbar.tsx

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { selectIsMobile } from "../../../redux/appSettingsSlice";
import { enqueueSnackbar } from "notistack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const appSettings = useSelector((state: RootState) => selectIsMobile(state)); // Assuming you have state for checking mobile

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	enqueueSnackbar(appSettings.isMobile.toString(), {
		variant: "info",
		autoHideDuration: 5000,
		anchorOrigin: {
			vertical: "bottom",
			horizontal: "right",
		},
	});

	return (
		<nav className="">
			{appSettings.isMobile ? (
				<div className="flex justify-between items-center">
					<FontAwesomeIcon icon={faBars} />
					{/* <div>
						<button className="text-white focus:outline-none" onClick={toggleMenu}>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
							</svg>
						</button>
					</div>
					<div>
						<NavLink to="/" className="text-white mx-2" onClick={toggleMenu}>
							Home
						</NavLink>
						<NavLink to="/nosotros" className="text-white mx-2" onClick={toggleMenu}>
							Nosotros
						</NavLink>
						<NavLink to="/nuestra-causa" className="text-white mx-2" onClick={toggleMenu}>
							Nuestra Causa
						</NavLink>
						<NavLink to="/contactanos" className="text-white mx-2" onClick={toggleMenu}>
							Contáctanos
						</NavLink>
						<NavLink to="/dona" className="text-white mx-2" onClick={toggleMenu}>
							Dona
						</NavLink>
					</div> */}
				</div>
			) : (
				<div className="flex items-center justify-between">
					<div>
						<NavLink to="/" className="text-white mx-2">
							Home
						</NavLink>
						<NavLink to="/nosotros" className="text-white mx-2">
							Nosotros
						</NavLink>
						<NavLink to="/nuestra-causa" className="text-white mx-2">
							Nuestra Causa
						</NavLink>
						<NavLink to="/contactanos" className="text-white mx-2">
							Contáctanos
						</NavLink>
						<NavLink to="/dona" className="text-white mx-2">
							Dona
						</NavLink>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
