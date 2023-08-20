import { useEffect, useRef } from "react";

export default function NewDirectorieForm({ onSubmit, value, onChange }) {
	const inputRef = useRef();
	useEffect(() => inputRef.current.focus(), []);
	return (
		<li className="direcrorie-name">
			<form action="submit" onSubmit={onSubmit}>
				<input ref={inputRef} type="text" value={value} onChange={onChange} />
			</form>
		</li>
	);
}
