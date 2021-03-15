import { useEffect, useState } from "react";

import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getCollatedTasksExist, getTitle, getCollatedTitle } from "../helpers";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { AddTask } from "./AddTask";

export const Tasks = () => {
	const { selectedProject } = useSelectedProjectValue();
	const { projects } = useProjectsValue();
	const { tasks } = useTasks(selectedProject);
	let projectName = "";

	if (getCollatedTasksExist(selectedProject) && selectedProject) {
		projectName = getCollatedTitle(collatedTasks, selectedProject).name;
	}

	if (
		projects.length > 0 &&
		selectedProject &&
		!getCollatedTasksExist(selectedProject)
	) {
		projectName = getTitle(projects, selectedProject)?.name;
	}

	useEffect(() => {
		document.title = `${projectName}: Todo`;
	}, []);
	return (
		<div className='tasks' data-testid='tasks'>
			<h2 data-testid='project-name'>{projectName}</h2>
			<ul className='tasks__list'>
				{tasks.map((task) => (
					<li key={task.id}>
						<Checkbox id={task.id} />
						<span>{task.task}</span>
					</li>
				))}
			</ul>
			<AddTask />
		</div>
	);
};
