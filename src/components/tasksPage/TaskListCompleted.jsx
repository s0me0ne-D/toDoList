import { DeleteImg } from "../../icons/DeleteImg";

export const CompletedTaskList = ({ currentDirectory, changeTaskStatus, deleteTask }) => {
	return (
		<div className="tasks">
			<ul className="task-list">
				{currentDirectory.thisDirectoryTasks.map((task, index) => {
					if (task.completed) {
						return (
							<li
								key={task.taskId}
								className={"task checked"}
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
									{task.description && <div className="task-description">{task.description}</div>}
								</div>
							</li>
						);
					}
				})}
			</ul>
		</div>
	);
};
