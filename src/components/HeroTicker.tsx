import { useEffect, useState } from 'react';
import waterBottle from '../assets/hero/water-bottle.svg';
import tShirt from '../assets/hero/T-shirt.svg';
import notebook from '../assets/hero/NOTEBOOK.svg'
import ex from '../assets/ex.svg';
export default function HeroTicker() {
	const heroDisplay = [
		{
			title: 'Welcome to your reliable print partner',
			desc: 'We bring your ideas to life with precision printing, vibrant colors, and unmatched attention to detail — on every material that matters.',
			img: waterBottle
		},
		{
			title: 'You want your brand to gain visibility through quality merch, isn’t it?',
			desc: 'From T-shirts to mugs, billboards to merch — we help your brand stand out with bold, durable, and eye-catching prints that speak for you.',
			img: tShirt,
			width: '580px' // a specified width for the h1 tag for this particular item
		},
		{
			title: 'What would you like to print today?',
			desc: 'Whether it’s a book launch, a marketing campaign, or your next event — we’ve got the perfect print solution for you. Let’s start your next project.',
			img: notebook
		}
	]

	const [currentIndex, setCurrentIndex] = useState<number>(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setOpacity(0) //fade out

			setTimeout(() => {
      			setCurrentIndex((prev) => (prev + 1) % heroDisplay.length);
      			setOpacity(1); // fade in
			}, 300);
		}, 3000);

  		return () => clearInterval(interval);
	}, []);
	const [opacity, setOpacity] = useState(1);
  return (
    <section className='flex w-full justify-start items-center gap-10 xl:gap-0 lg:flex-row flex-col'>	
    	<div className='flex-1'>
        	<h1 className={`font-normal text-[50px] leading-tight mb-[30px] transition-opacity ${currentIndex === 1 ? 'w-[580px]' : 'w-[450px]'} duration-500 ease-in-out`} style={{opacity: opacity}}>
				{heroDisplay[currentIndex].title}
        	</h1>
        	<p className='subtitle transition-opacity duration-500 ease-in-out' style={{opacity: opacity}}>
				{heroDisplay[currentIndex].desc}
        	</p>
    	</div>
		<div className='flex-1 mt-5 flex items-center justify-end relative'>
			<img src={ex} alt="a placeholder for the image in the hero section" className='absolute -right-5'/>
			<img src={heroDisplay[currentIndex].img} alt="explore mockup" className='transition-opacity duration-700 z-10 object-cover' style={{opacity: opacity}}/>
		</div>
    </section>
  )
}
