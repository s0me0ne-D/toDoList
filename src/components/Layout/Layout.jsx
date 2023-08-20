import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { NavBar } from "./navBar/NavBar";
import { useState, useEffect, useContext } from "react";
import { tasksContext } from "../../context/Context";

export const Layout = () => {
	const [activeNavBar, setActiveNavBar] = useState(true);
	const showNavBar = () => setActiveNavBar((prev) => !prev);
	const [showDirectorie, setShowDirectorie] = useState("");
	const getShowDirectorie = (directorie) => {
		setShowDirectorie(directorie);
	};

	const { tasks, setTasks } = useContext(tasksContext);
	const addNewTask = (directorieName) => {
		setTasks([...tasks, { title: `${directorieName}` }]);
	};
	const [currentShowTaskList, setCurrentShowTaskList] = useState();

	useEffect(() => {
		setCurrentShowTaskList(
			(prev) => (prev = tasks.filter((task) => task.title === showDirectorie))
		);
	}, [showDirectorie]);

	return (
		<>
			<Header onClick={showNavBar} />
			<div className="main">
				<NavBar
					changeClassName={activeNavBar}
					addNewTask={addNewTask}
					tasks={tasks}
					getShowDirectorie={getShowDirectorie}
				/>
				<Outlet />
			</div>
		</>
	);
};
