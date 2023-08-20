import logo from "../../../logo.png";
export const Header = ({ onClick }) => {
	return (
		<header className="header">
			<div className="header-wrapper">
				<button className="navButton" onClick={onClick}>
					<svg
						width="30px"
						height="30px"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M5 12H18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
						<path d="M5 17H11" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
						<path d="M5 7H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
					</svg>
				</button>
				<img className="logo" src={logo} />
				<label class="switch">
					<input type="checkbox"></input>
					<span class="slider round"></span>
				</label>
			</div>
		</header>
	);
};
