import "./tasksPage.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { tasksContext } from "../../context/Context";
import { DeleteImg } from "../../icons/DeleteImg";
import { EditImg } from "../../icons/EditImg";
import { NewTaskForm } from "./NewTaskForm";
import { PlusImg } from "../../icons/PlusImg";

export const TasksPage = () => {
	const id = useParams();
	const { tasks, setTasks } = useContext(tasksContext);
	const currentDirectory = tasks.find((directory) => directory.title === id.directorieId);
	const [showNewTaskForm, setShowNewTaskForm] = useState(false);
	const getShowNewTaskForm = () => setShowNewTaskForm((prev) => !prev);

	const [visible, setVisible] = useState(false);

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
					{currentDirectory.thisDirectoryTasks.map((task) => {
						return (
							<li
								className={checkTaskPriority(task.priority)}
								onMouseEnter={() => {
									setVisible(true);
								}}
								onMouseLeave={() => {
									setVisible(false);
								}}
							>
								<div className="task-wrapper">
									<input type="checkbox" />
									{visible ? (
										<label htmlFor="checkbox" className="task-name">
											{task.taskName}
										</label>
									) : null}
								</div>
								<div className="task-options">
									<button className="task-edit">
										<EditImg />
									</button>
									<button className="task-delete">
										<DeleteImg />
									</button>
								</div>
							</li>
						);

						<div className="task-description">{currentDirectory.description}</div>;
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
			</div>
			{showNewTaskForm ? (
				<NewTaskForm
					tasks={tasks}
					setTasks={setTasks}
					getShowNewTaskForm={getShowNewTaskForm}
					currentDirectory={currentDirectory}
				/>
			) : null}
		</main>
	);
};
