import phoneImage from './images/mobile-updated.png'
import customImage from './images/custom.png'
import websiteImage from './images/website.png'
const Metadata = {
	header: 'services',
	services: [
		{
			img: websiteImage,
			imgShadow: true,
			title: 'Website Design & Development',
			description: `
				Attractive & affordable custom-made
				websites uniquely representing your business
			`
		},
		{
			img: phoneImage,
			imgShadow: false,
			title: 'App & Mobile Applications',
			description: `
				Get a professionally designed app with
				an elegant design that follows the strands of user
				experience design.
			`
		},
		{
			img: customImage,
			imgShadow: true,
			title: 'Custom Projects / SaaS',
			description: `
				Need a complex web-based tool built?
				Studio Ki expertise turns complex ideas into
				carefully crafted reality.
			`
		},
	]
};


export default Metadata;
