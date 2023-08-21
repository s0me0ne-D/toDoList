import "./navBar.scss";
import { useState } from "react";
import NewDirectorieForm from "./NewDirectorieForm";
import { NavLink } from "react-router-dom";
import { PlusImg } from "../../../icons/PlusImg";

export const NavBar = ({ changeClassName, addNewTask, tasks }) => {
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
					<li key={directorie} className="direcrorie-name">
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
				<PlusImg /> <span>Add new list</span>
			</button>
		</div>
	);
};
