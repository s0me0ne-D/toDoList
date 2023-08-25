import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { NavBar } from "./navBar/NavBar";
import { useState, useEffect, useContext } from "react";
import { tasksContext } from "../../context/Context";

export const Layout = () => {
	const [activeNavBar, setActiveNavBar] = useState(true);
	const showNavBar = () => setActiveNavBar((prev) => !prev);

	const [directorieNumber, setDirectorieNumber] = useState("");

	const { tasks, setTasks } = useContext(tasksContext);
	const addNewTask = (directorieName) => {
		setTasks([
			...tasks,
			{
				id: `${directorieNumber}`,
				title: `${directorieName}`,
				thisDirectoryTasks: [],
			},
		]);
	};
	useEffect(() => setDirectorieNumber(Math.floor(Math.random() * 100000)), [tasks]);

	return (
		<>
			<Header onClick={showNavBar} />
			<div className="main">
				<NavBar changeClassName={activeNavBar} addNewTask={addNewTask} tasks={tasks} />
				<Outlet />
			</div>
		</>
	);
};
