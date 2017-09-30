import doctorImage from './images/adc.png'
import carsImage from './images/c4c.png'
import flooringImage from './images/ed.png'

const Metadata = {
	title: 'work',
	projects: [
		{
			title: 'Australian Doctors\' Clinic',
			demoSrc: 'http://australiandoctorsclinic.com.au',
			imgSrc: doctorImage,
			description: `
				A comprehensive website created for a medical center in Kenmore, Queensland.
				Beautifully designed with integration into medical booking software.`
		},
		{
			title: 'Cash4Car Services Brisbane',
			demoSrc: 'http://cars-online.net.au',
			imgSrc: carsImage,
			description: `
				Website developed for a client within the auto recycling industry in Brisbane,
				Australia. Boosted sales by over 20 verified calls per day.
				Conversion monitoring done via twilio & adwords.`
		},
		{
			title: 'Everyday Flooring',
			demoSrc: 'http://everdayflooring.com.au',
			imgSrc: flooringImage,
			description: `
				Tiling and flooring website created for a local family owned business
				in Brisbane Australia. Cooperated with the clients every step of
				the way to ensure their ideal website was acheived.`
		},
	]
};

export default Metadata;
