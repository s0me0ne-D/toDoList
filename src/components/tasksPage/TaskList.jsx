import { tasksContext } from "../../context/Context";
import { useState, useContext } from "react";
import { DeleteImg } from "../../icons/DeleteImg";
import { EditImg } from "../../icons/EditImg";
import { NewTaskForm } from "./NewTaskForm";

export const TaskList = ({
	currentDirectory,
	changeTaskStatus,
	deleteTask,
	getShowNewTaskForm,
}) => {
	const { tasks, setTasks } = useContext(tasksContext);

	const [editTaskIndex, setEditTaskIndex] = useState("");
	const checkTaskPriority = (priority) => {
		switch (priority) {
			case "priority 1":
				return "task priority-1";
			case "priority 2":
				return "task priority-2";
			case "priority 3":
				return "task priority-3";
			default:
				break;
		}
	};

	return (
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
											name="checkbox"
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
	);
};
