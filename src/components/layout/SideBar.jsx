import { useState } from "react";
import {
	FaInbox,
	FaChevronDown,
	FaRegCalendarAlt,
	FaRegCalendar,
} from "react-icons/fa";
import { useSelectedProjectValue } from "../../context";
import { AddProject } from "../AddProject";
import { Projects } from "../Projects";

export const SideBar = () => {
	const { setSelectedProject } = useSelectedProjectValue();
	const [active, setActive] = useState("inbox");
	const [showProjects, setShowProjects] = useState(true);

	return (
		<div className='sidebar' data-testid='sidebar'>
			<ul className='sidebar__generic'>
				<li
					data-test-id='inbox'
					className={active === "inbox" ? "active" : undefined}
					onClick={() => {
						setActive("inbox");
						setSelectedProject("INBOX");
					}}
				>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li
					data-test-id='today'
					className={active === "today" ? "active" : undefined}
					onClick={() => {
						setActive("today");
						setSelectedProject("TODAY");
					}}
				>
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li
					data-test-id='next_7_days'
					className={active === "next_7_days" ? "active" : undefined}
					onClick={() => {
						setActive("next_7_days");
						setSelectedProject("NEXT_7");
					}}
				>
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Next 7 days</span>
				</li>
			</ul>
			<div
				className='sidebar__projects-dropdown'
				onClick={() => setShowProjects(!showProjects)}
			>
				<span>
					<FaChevronDown
						className={!showProjects ? "hidden-projects" : undefined}
					/>
				</span>
				<h2>Projects</h2>
			</div>
			<ul className='sidebar__projects'>{showProjects && <Projects />}</ul>
			{showProjects && <AddProject />}
		</div>
	);
};
