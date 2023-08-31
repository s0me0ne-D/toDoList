import { useEffect, useState } from "react";
import "./newTaskForm.scss";
export const NewTaskForm = ({
	setTasks,
	getShowNewTaskForm,
	tasks,
	currentDirectory,
	editTaskIndex,
	setEditTaskIndex,
}) => {
	const [taskId, setTaskId] = useState("");

	const [taskName, setTaskName] = useState("");
	const getTaskName = (event) => setTaskName(event.target.value);

	const [description, setDescription] = useState("");
	const getDescription = (event) => setDescription(event.target.value);

	const [priority, setPriority] = useState("priority 3");
	const changePriority = (event) => setPriority(event.target.value);

	useEffect(() => {
		if (editTaskIndex !== undefined) {
			const editTask = currentDirectory.thisDirectoryTasks[editTaskIndex];
			setTaskName(editTask.taskName);
			setDescription(editTask.description);
			setPriority(editTask.priority);
		}
	}, []);

	const onSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();
		if (taskName !== "") {
			const updatedTasks = [...tasks];
			const updatedIndex = updatedTasks.findIndex((task) => task.id === currentDirectory.id);
			if (editTaskIndex !== undefined) {
				const newTask = { taskName, description, priority, taskId, completed: false };
				updatedTasks[updatedIndex].thisDirectoryTasks.splice(editTaskIndex, 1, newTask);
				setTasks(updatedTasks);
				setEditTaskIndex("");
			} else {
				if (updatedIndex !== -1) {
					updatedTasks[updatedIndex].thisDirectoryTasks.push({
						taskName,
						description,
						priority,
						taskId,
						completed: false,
					});

					setTasks(updatedTasks);
					getShowNewTaskForm();
				}
			}
		}
	};
	const cancelBtn = (event) => {
		event.preventDefault();
		event.stopPropagation();
		editTaskIndex !== undefined ? setEditTaskIndex("") : getShowNewTaskForm();
	};
	useEffect(() => setTaskId(Math.floor(Math.random() * 100000).toString()), [tasks]);

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
					required={true}
				/>
				<textarea
					type="text"
					placeholder="Description"
					className="new-task-description"
					value={description}
					onChange={getDescription}
				/>
				<div className="new-task-footer">
					<select
						defaultValue={priority}
						name="priority"
						id="new-task-priority"
						onChange={changePriority}
						onKeyDown={(event) => (event.key === "Enter" ? onSubmit(event) : null)}
					>
						<option value="priority 1">Priority 1</option>
						<option value="priority 2">Priority 2</option>
						<option value="priority 3">Priority 3</option>
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
