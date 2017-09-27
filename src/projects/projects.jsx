import React, { Component } from 'react';

import Metadata from './metadata.js';
import Project from './project.jsx';
import './projects.scss';

class Projects extends Component {
	renderProjects() {
		const projects = Metadata.projects.map((project, index) => {
			return this.renderProject(project, index);
		});
		return <div className='content'>
			{projects}
		</div>;
	}
	renderProject(project, index) {
		return <Project key={index}
			index={index}
			title={project.title}
			demoSrc={project.demoSrc}
			imgSrc={project.imgSrc}
			description={project.description} />
	}
	render() {
		return <div className='projects section'>
			<h1>{Metadata.title}</h1>
			{this.renderProjects()}
		</div>;
	}
}

export default Projects;

