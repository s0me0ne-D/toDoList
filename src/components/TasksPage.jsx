import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TasksPage = () => {
	const id = useParams();
	console.log(id.directorieId);
	return (
		<></>
		// <main className="tasks-page">
		// 	<div className="tasks">
		// 		<h1 className="tasks-title">{id.directorieid}</h1>
		// 		<ul className="task-list">
		// 			<li className="task">
		// 				<div className="task-wrapper">
		// 					<input type="checkbox" />
		// 					<label htmlFor="checkbox" className="task-name">
		// 						Milk
		// 					</label>{" "}
		// 				</div>
		// 				<div className="task-options">
		// 					<button className="task-edit">
		// 						<svg
		// 							width="20px"
		// 							height="20px"
		// 							viewBox="0 0 24 24"
		// 							fill="none"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 						>
		// 							<path
		// 								d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 						</svg>
		// 					</button>
		// 					<button className="task-delete">
		// 						<svg
		// 							width="20px"
		// 							height="20px"
		// 							viewBox="0 0 24 24"
		// 							fill="none"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 						>
		// 							<path
		// 								d="M10 12V17"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M14 12V17"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M4 7H20"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 						</svg>
		// 					</button>
		// 				</div>
		// 			</li>
		// 			<li className="task">
		// 				<div className="task-wrapper">
		// 					<input type="checkbox" />
		// 					<label htmlFor="checkbox" className="task-name">
		// 						Milk
		// 					</label>{" "}
		// 				</div>
		// 				<div className="task-options">
		// 					<button className="task-edit">
		// 						<svg
		// 							width="20px"
		// 							height="20px"
		// 							viewBox="0 0 24 24"
		// 							fill="none"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 						>
		// 							<path
		// 								d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 						</svg>
		// 					</button>
		// 					<button className="task-delete">
		// 						<svg
		// 							width="20px"
		// 							height="20px"
		// 							viewBox="0 0 24 24"
		// 							fill="none"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 						>
		// 							<path
		// 								d="M10 12V17"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M14 12V17"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M4 7H20"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 						</svg>
		// 					</button>
		// 				</div>
		// 			</li>
		// 			<li className="task">
		// 				<div className="task-wrapper">
		// 					<input type="checkbox" />
		// 					<label htmlFor="checkbox" className="task-name">
		// 						Milk
		// 					</label>{" "}
		// 				</div>
		// 				<div className="task-options">
		// 					<button className="task-edit">
		// 						<svg
		// 							width="20px"
		// 							height="20px"
		// 							viewBox="0 0 24 24"
		// 							fill="none"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 						>
		// 							<path
		// 								d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 						</svg>
		// 					</button>
		// 					<button className="task-delete">
		// 						<svg
		// 							width="20px"
		// 							height="20px"
		// 							viewBox="0 0 24 24"
		// 							fill="none"
		// 							xmlns="http://www.w3.org/2000/svg"
		// 						>
		// 							<path
		// 								d="M10 12V17"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M14 12V17"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M4 7H20"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 							<path
		// 								d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
		// 								stroke="#000000"
		// 								stroke-width="2"
		// 								stroke-linecap="round"
		// 								stroke-linejoin="round"
		// 							/>
		// 						</svg>
		// 					</button>
		// 				</div>
		// 			</li>
		// 		</ul>
		// 		<button className="add-new-task">
		// 			<svg
		// 				width="20px"
		// 				height="20px"
		// 				viewBox="0 0 24 24"
		// 				fill="none"
		// 				xmlns="http://www.w3.org/2000/svg"
		// 			>
		// 				<path
		// 					d="M4 12H20M12 4V20"
		// 					stroke="#de797a"
		// 					stroke-width="2"
		// 					stroke-linecap="round"
		// 					stroke-linejoin="round"
		// 				/>
		// 			</svg>
		// 			<span>Add new task</span>
		// 		</button>
		// 	</div>
		// </main>
	);
};
