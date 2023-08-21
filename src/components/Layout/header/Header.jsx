import { BurgerImg } from "../../../icons/BurgerImg";
import logo from "../../../logo.png";
import "./header.scss";
export const Header = ({ onClick }) => {
	return (
		<header className="header">
			<div className="header-wrapper">
				<button className="navButton" onClick={onClick}>
					<BurgerImg />{" "}
				</button>
				<img className="logo" src={logo} />
				<label className="switch">
					<input type="checkbox"></input>
					<span className="slider round"></span>
				</label>
			</div>
		</header>
	);
};
