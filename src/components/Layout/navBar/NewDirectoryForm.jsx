import { useEffect, useRef } from "react";

export default function NewdirectoryForm({ onSubmit, value, onChange, newDirectoryRef }) {
	const inputRef = useRef();
	useEffect(() => inputRef.current.focus(), []);

	return (
		<li
			ref={newDirectoryRef}
			className="direcrory-name"
			onClick={(event) => event.stopPropagation()}
		>
			<form action="submit" onSubmit={onSubmit}>
				<input ref={inputRef} type="text" value={value} onChange={onChange} />
			</form>
		</li>
	);
}
