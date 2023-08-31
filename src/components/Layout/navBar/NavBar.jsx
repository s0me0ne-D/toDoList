import "./navBar.scss";
import { useEffect, useRef, useState } from "react";
import NewdirectoryForm from "./NewDirectoryForm";
import { NavLink, useParams } from "react-router-dom";
import { PlusImg } from "../../../icons/PlusImg";

export const NavBar = ({ changeClassName, addNewTask, tasks }) => {
	const params = useParams();
	const newDirectoryRef = useRef();
	const addNewDirectoryRef = useRef();

	const [stateNewdirectory, setStateNewdirectory] = useState(false);
	const createNewdirectory = () => {
		setStateNewdirectory(!stateNewdirectory);
	};

	const [newdirectory, setNewdirectory] = useState("");
	const addNewdirectory = (event) => {
		setNewdirectory(event.target.value);
	};
	const pushNewdirectory = (event) => {
		addNewTask(newdirectory);
		event.preventDefault();
		event.stopPropagation();
		setStateNewdirectory(false);
		setNewdirectory("");
	};
	const directoryTitles = tasks.map((task) => `${task.title}-${task.id}`);
	const getTitle = (direcrorie) => {
		const index = direcrorie.indexOf("-");
		return direcrorie.slice(0, index);
	};

	const [clickTarget, setClickTarget] = useState("");
	useEffect(() => {
		document.addEventListener("click", (event) => {
			setClickTarget(event.target);
		});
	}, []);
	useEffect(() => {
		if (newDirectoryRef.current !== clickTarget && clickTarget !== addNewDirectoryRef.current) {
			setStateNewdirectory(false);
		}
	}, [clickTarget]);

	return (
		<div className={changeClassName ? "navBar" : "navBar activeNavBar"}>
			<ul className="directory">
				{directoryTitles.map((task, index) => (
					<li
						key={task}
						className={`direcrory-name ${
							params.directoryId === directoryTitles[index] ? "active" : ""
						}`}
					>
						<NavLink to={`/${directoryTitles[index]}`} className={"navBar-link"}>
							{" "}
							{getTitle(directoryTitles[index])}
						</NavLink>
					</li>
				))}
				{stateNewdirectory ? (
					<NewdirectoryForm
						newDirectoryRef={newDirectoryRef}
						onChange={addNewdirectory}
						onSubmit={pushNewdirectory}
						value={newdirectory}
					/>
				) : null}
			</ul>
			<button
				ref={addNewDirectoryRef}
				type="button"
				className="add-new-list-button"
				onClick={(event) => {
					createNewdirectory();
					setClickTarget(addNewDirectoryRef.current);
					event.stopPropagation();
				}}
			>
				<PlusImg /> <span>Add new list</span>
			</button>
		</div>
	);
};
