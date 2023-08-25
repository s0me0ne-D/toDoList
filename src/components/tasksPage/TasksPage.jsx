import "./tasksPage.scss";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { tasksContext } from "../../context/Context";
import { DeleteImg } from "../../icons/DeleteImg";
import { EditImg } from "../../icons/EditImg";
import { NewTaskForm } from "./NewTaskForm";
import { PlusImg } from "../../icons/PlusImg";

export const TasksPage = () => {
	const id = useParams();

	const { tasks, setTasks } = useContext(tasksContext);
	const currentDirectory = tasks.find((task) => `${task.title}-${task.id}` === id.directorieId);
	const deleteTask = (task) => {
		const index = currentDirectory.thisDirectoryTasks.indexOf(task);
		const updatedTasks = [...tasks];
		const updatedIndex = updatedTasks.findIndex((task) => task.title === currentDirectory.title);
		if (updatedIndex !== -1) {
			updatedTasks[updatedIndex].thisDirectoryTasks.splice(index, 1);
		}
		setTasks(updatedTasks);
	};

	const [showNewTaskForm, setShowNewTaskForm] = useState(false);
	const getShowNewTaskForm = () => setShowNewTaskForm((prev) => !prev);

	const [editTaskIndex, setEditTaskIndex] = useState("");

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

	const checkTaskPriority = (priority) => {
		switch (priority) {
			case "p1":
				return "task priority-1";
			case "p2":
				return "task priority-2";
			case "p3":
				return "task priority-3";
			default:
				break;
		}
	};
	return (
		<main className="tasks-page">
			<div className="tasks">
				<h1 className="tasks-title">{currentDirectory.title}</h1>
				<ul className="task-list">
					{currentDirectory.thisDirectoryTasks.map((task, index) => {
						return index !== editTaskIndex ? (
							!task.completed && (
								<li
									key={task.taskId}
									className={checkTaskPriority(task.priority)}
									onClick={() => {
										changeTaskStatus(index);
									}}
								>
									<div className="task-container">
										<div className="task-main">
											<div className="task-wrapper">
												<input
													value={task.completed}
													onChange={() => {
														changeTaskStatus(index);
													}}
													onClick={(event) => event.stopPropagation()}
													className="checkbox"
													type="checkbox"
												/>
												<label htmlFor="checkbox" className="task-name">
													{task.taskName}
												</label>
											</div>
											<div className="task-options">
												<button
													className="task-edit"
													onClick={(event) => {
														event.stopPropagation();
														setEditTaskIndex(index);
													}}
												>
													<EditImg />
												</button>
												<button
													className="task-delete"
													onClick={(event) => {
														event.stopPropagation();
														deleteTask(task);
													}}
												>
													<DeleteImg />
												</button>
											</div>
										</div>
										{task.description && <div className="task-description">{task.description}</div>}
									</div>
								</li>
							)
						) : (
							<NewTaskForm
								key={task.taskId}
								tasks={tasks}
								setTasks={setTasks}
								getShowNewTaskForm={getShowNewTaskForm}
								currentDirectory={currentDirectory}
								setEditTaskIndex={setEditTaskIndex}
								editTaskIndex={editTaskIndex}
							/>
						);
					})}
				</ul>
				<button
					className="add-new-task"
					onClick={() => {
						getShowNewTaskForm();
					}}
				>
					<PlusImg /> <span>Add new task</span>
				</button>
				<button onClick={() => setShowCompletedTasks((prev) => !prev)}>Show competed tasks</button>
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
				<div className="tasks">
					<ul className="task-list">
						{currentDirectory.thisDirectoryTasks.map((task, index) => {
							if (task.completed) {
								return (
									<li
										key={task.taskId}
										className={`${checkTaskPriority(task.priority)} checked`}
										onClick={() => changeTaskStatus(index)}
									>
										<div className="task-container">
											<div className="task-main">
												<div className="task-wrapper">
													<input
														checked={task.completed}
														onChange={() => {
															changeTaskStatus(index);
														}}
														onClick={(event) => event.stopPropagation()}
														className="checkbox"
														type="checkbox"
													/>
													<label htmlFor="checkbox" className="task-name">
														{task.taskName}
													</label>
												</div>
												<div className="task-options">
													<button
														className="task-delete"
														onClick={(event) => {
															event.stopPropagation();
															deleteTask(task);
														}}
													>
														<DeleteImg />
													</button>
												</div>
											</div>
											{task.description && (
												<div className="task-description">{task.description}</div>
											)}
										</div>
									</li>
								);
							}
						})}
					</ul>
				</div>
			) : null}
		</main>
	);
};
