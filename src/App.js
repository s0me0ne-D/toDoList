import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { tasksContext } from "./context/Context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import "./themes/variables.scss";
function App() {
	const [tasks, setTasks] = useLocalStorage([], "ToDoList");

	return (
		<tasksContext.Provider value={{ tasks, setTasks }}>
			<RouterProvider router={router} />
		</tasksContext.Provider>
	);
}

export default App;
