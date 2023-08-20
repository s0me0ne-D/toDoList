import { useState } from "react";
import NewDirectorieForm from "./NewDirectorieForm";
import { NavLink } from "react-router-dom";

export const NavBar = ({ changeClassName, addNewTask, tasks, getShowDirectorie }) => {
	const [stateNewDirectorie, setStateNewDirectorie] = useState(false);
	const createNewDirectorie = () => {
		setStateNewDirectorie(!stateNewDirectorie);
	};

	const [newDirectorie, setNewDirectorie] = useState("");
	const addNewDirectorie = (event) => {
		setNewDirectorie(event.target.value);
	};
	const pushNewDirectorie = (event) => {
		addNewTask(newDirectorie);
		event.preventDefault();
		event.stopPropagation();
		setStateNewDirectorie(false);
		setNewDirectorie("");
	};
	const directorieTitles = tasks.map((task) => task.title);
	return (
		<div className={changeClassName ? "navBar" : "navBar activeNavBar"}>
			<ul className="directorie">
				{directorieTitles.map((directorie) => (
					<li
						key={directorie}
						className="direcrorie-name"
						onClick={() => getShowDirectorie(directorie)}
					>
						<NavLink to={`/${directorie}`} className={"navBar-link"}>
							{" "}
							{directorie}
						</NavLink>
					</li>
				))}
				{stateNewDirectorie ? (
					<NewDirectorieForm
						onChange={addNewDirectorie}
						onSubmit={pushNewDirectorie}
						value={newDirectorie}
					/>
				) : null}
			</ul>
			<button type="button" className="add-new-list-button" onClick={createNewDirectorie}>
				<svg
					width="20px"
					height="20px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4 12H20M12 4V20"
						stroke="#de797a"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>Add new list</span>
			</button>
		</div>
	);
};
