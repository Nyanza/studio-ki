import React, { Component } from 'react';

import Landing from '../landing/landing.jsx';
import Services from '../services/services.jsx';
import Projects from '../projects/projects.jsx';
import Contact from '../contact/contact.jsx';

const Metadata = {
	home: {
		title: 'ki.',
		to: 'landing',
		component: <Landing />
	},
	links: [
		{
			title: 'services',
			to: 'services',
			component: <Services />
		},
		{
			title: 'portfolio',
			to: 'portfolio',
			component: <Projects />
		},
		{
			title: 'contact',
			to: 'contact',
			component: <Contact />
		},
	]
};

export default Metadata;