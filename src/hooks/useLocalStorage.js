import { useState, useEffect } from "react";

export const useLocalStorage = (initialValue, key) => {
	const getTasks = () => {
		const storage = localStorage.getItem(key);
		if (storage) {
			return JSON.parse(storage);
		}
		return initialValue;
	};
	const [value, setValue] = useState(getTasks);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value]);
	return [value, setValue];
};
