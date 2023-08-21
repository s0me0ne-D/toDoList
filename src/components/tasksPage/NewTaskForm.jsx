import { useRef, useState } from "react";
import "./newTaskForm.scss";
export const NewTaskForm = ({ setTasks, getShowNewTaskForm, tasks, currentDirectory }) => {
	const [taskName, setTaskName] = useState("");
	const getTaskName = (event) => setTaskName(event.target.value);

	const [description, setDescription] = useState("");
	const getDescription = (event) => setDescription(event.target.value);

	const [priority, setPriority] = useState("p3");
	const changePriority = (event) => setPriority(event.target.value);

	const onSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		//change tasks
		const updatedTasks = [...tasks];
		const updatedIndex = updatedTasks.findIndex((task) => task.title === currentDirectory.title);
		if (updatedIndex !== -1) {
			updatedTasks[updatedIndex].thisDirectoryTasks.push({ taskName, description, priority });
			// = {
			// 	...updatedTasks[updatedIndex],
			// 	taskName,
			// 	description,
			// 	priority,
			// };
		}
		setTasks(updatedTasks);
		getShowNewTaskForm();
	};
	const cancelBtn = (event) => {
		event.preventDefault();
		event.stopPropagation();
		getShowNewTaskForm();
	};

	return (
		<div className="new-task">
			<form action="submit" onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Task name"
					className="new-task-name"
					value={taskName}
					onChange={getTaskName}
					onKeyDown={(event) => (event.key === "Enter" ? onSubmit(event) : null)}
				/>
				<textarea
					type="text"
					placeholder="Description"
					className="new-task-description"
					value={description}
					onChange={getDescription}
				/>
				<div className="new-task-footer">
					<select name="priority" id="new-task-priority" onChange={changePriority}>
						<option value="p1">p1</option>
						<option value="p2">p2</option>
						<option value="p3" selected>
							p3
						</option>
					</select>
					<div className="new-task-buttons">
						<button className="new-task-cancel" onClick={cancelBtn}>
							Cancel
						</button>
						<button type="submit" className="new-task-add">
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
