import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { NavBar } from "./navBar/NavBar";
import { useState, useEffect, useContext } from "react";
import { tasksContext } from "../../context/Context";

export const Layout = () => {
	const [activeNavBar, setActiveNavBar] = useState(true);
	const showNavBar = () => setActiveNavBar((prev) => !prev);

	const [directoryNumber, setdirectoryNumber] = useState("");

	const { tasks, setTasks } = useContext(tasksContext);
	const addNewTask = (directoryName) => {
		setTasks([
			...tasks,
			{
				id: `${directoryNumber}`,
				title: `${directoryName}`,
				thisDirectoryTasks: [],
			},
		]);
	};
	useEffect(() => setdirectoryNumber(Math.floor(Math.random() * 100000)), [tasks]);
	return (
		<div>
			<Header onClick={showNavBar} />
			<div className="main">
				<NavBar changeClassName={activeNavBar} addNewTask={addNewTask} tasks={tasks} />
				<Outlet />
			</div>
		</div>
	);
};
