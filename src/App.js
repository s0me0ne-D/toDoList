import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { tasksContext } from "./context/Context";
import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([]);

	return (
		<tasksContext.Provider value={{ tasks, setTasks }}>
			<RouterProvider router={router} />;
		</tasksContext.Provider>
	);
}

export default App;
