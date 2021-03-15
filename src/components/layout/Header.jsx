import { useState } from "react";
import { GiNightSleep } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { AddTask } from "../AddTask";

export const Header = ({ darkMode, setDarkMode }) => {
	const [shouldShowMain, setShouldShowMain] = useState(false);
	const [showQuickAddTask, setShowQuickAddTask] = useState(false);
	return (
		<header className='header' data-testid='header'>
			<nav>
				<div className='logo'>
					<img src='/images/logo.png' alt='Todo' />
				</div>
				<div className='settings'>
					<ul>
						<li
							className='settings__add'
							data-testid='quick-add-task-action'
							onClick={() => {
								setShowQuickAddTask(true);
								setShouldShowMain(true);
							}}
						>
							+
						</li>
						<li
							className='settings__darkmode'
							data-testid='dark-mode-action'
							onClick={() => setDarkMode(!darkMode)}
						>
							{darkMode ? <FaSun /> : <GiNightSleep />}
						</li>
					</ul>
				</div>
			</nav>
			<AddTask
				showAddTaskMain={false}
				shouldShowMain={shouldShowMain}
				showQuickAddTask={showQuickAddTask}
				setShowQuickAddTask={setShowQuickAddTask}
			/>
		</header>
	);
};
