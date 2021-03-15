import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";

export const AddProject = ({ isShowing = false }) => {
	const [show, setShow] = useState(isShowing);
	const [projectName, setProjectName] = useState("");

	const projectId = generatePushId();
	const { projects, setProjects } = useProjectsValue();
	const addProject = () => {
		projectName &&
			firebase
				.firestore()
				.collection("projects")
				.add({ projectId, name: projectName, userId: "1" })
				.then(() => {
					setProjects([...projects]);
					setProjectName("");
					setShow(false);
				});
	};

	return (
		<div className='add-project' data-testid='add-project'>
			{show && (
				<div className='add-project__input'>
					<input
						type='text'
						value={projectName}
						onChange={({ target }) => setProjectName(target.value)}
						className='add-project__name'
						data-testid='project-name'
						placeholder='Name your project'
					/>
					<button
						className='add-project__submit'
						data-testid='add-project-submit'
						onClick={() => addProject()}
					>
						Add Project
					</button>
					<span
						className='add-project__cancel'
						data-testid='hide-project-overlay'
						onClick={() => setShow(false)}
					>
						Cancel
					</span>
				</div>
			)}
			<span className='add-project__plus'>+</span>
			<span
				data-testid='add-project-action'
				className='add-project__text'
				onClick={() => setShow(!show)}
			>
				Add Project
			</span>
		</div>
	);
};
