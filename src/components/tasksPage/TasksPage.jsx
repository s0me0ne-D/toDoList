import "./tasksPage.scss";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { tasksContext } from "../../context/Context";
import { DeleteImg } from "../../icons/DeleteImg";
import { NewTaskForm } from "./NewTaskForm";
import { PlusImg } from "../../icons/PlusImg";
import { TaskList } from "./TaskList";
import { CompletedTaskList } from "./TaskListCompleted";

export const TasksPage = () => {
	const id = useParams();

	const { tasks, setTasks } = useContext(tasksContext);
	const currentDirectory = tasks.find((task) => `${task.title}-${task.id}` === id.directoryId);
	const deleteTask = (task) => {
		const index = currentDirectory.thisDirectoryTasks.indexOf(task);
		const updatedTasks = [...tasks];
		const updatedIndex = updatedTasks.findIndex((task) => task.title === currentDirectory.title);
		if (updatedIndex !== -1) {
			updatedTasks[updatedIndex].thisDirectoryTasks.splice(index, 1);
		}
		setTasks(updatedTasks);
	};
	const deleteDirectory = () => {
		const updatedTasks = [...tasks];
		const deleteIndex = updatedTasks.findIndex((task) => task.title === currentDirectory.title);
		if (deleteIndex !== -1) {
			updatedTasks.splice(deleteIndex, 1);
		}
		setTasks(updatedTasks);
	};
	const [showNewTaskForm, setShowNewTaskForm] = useState(false);
	const getShowNewTaskForm = () => setShowNewTaskForm((prev) => !prev);
	useEffect(() => setShowNewTaskForm(false), [currentDirectory]);

	const changeTaskStatus = (index) => {
		const updatedTasks = [...tasks];
		const updatedIndex = updatedTasks.findIndex((task) => task.id === currentDirectory.id);
		if (updatedIndex !== -1) {
			const status = updatedTasks[updatedIndex].thisDirectoryTasks[index].completed;
			updatedTasks[updatedIndex].thisDirectoryTasks[index].completed = !status;
		}
		setTasks(updatedTasks);
	};

	const [showCompletedTasks, setShowCompletedTasks] = useState(false);
	useEffect(() => setShowCompletedTasks(false), [currentDirectory]);

	return (
		<main className="tasks-page">
			<div className="tasks">
				<div className="task-header">
					<h1 className="tasks-title">{currentDirectory.title}</h1>
					<div className="task-header-buttons">
						<NavLink to={"/"} className="task-directory-delete" onClick={deleteDirectory}>
							<DeleteImg />
						</NavLink>
						<button
							className="task-completed-button"
							onClick={() => setShowCompletedTasks((prev) => !prev)}
						>
							<div className="show-img">
								<div className="show-img-line1"></div>
								<div className={`show-img-line2 ${showCompletedTasks ? "active" : ""}`}></div>
							</div>
							Show competed
						</button>
					</div>
				</div>
				<TaskList
					currentDirectory={currentDirectory}
					changeTaskStatus={changeTaskStatus}
					deleteTask={deleteTask}
					getShowNewTaskForm={getShowNewTaskForm}
				/>
				<button
					className="add-new-task"
					onClick={() => {
						getShowNewTaskForm();
					}}
				>
					<PlusImg /> <span>Add new task</span>
				</button>
			</div>
			{showNewTaskForm ? (
				<NewTaskForm
					tasks={tasks}
					setTasks={setTasks}
					getShowNewTaskForm={getShowNewTaskForm}
					currentDirectory={currentDirectory}
				/>
			) : null}
			{showCompletedTasks ? (
				<CompletedTaskList
					currentDirectory={currentDirectory}
					changeTaskStatus={changeTaskStatus}
					deleteTask={deleteTask}
				/>
			) : null}
		</main>
	);
};
