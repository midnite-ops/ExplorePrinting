import exploreLogo from '../assets/explore-logo.svg';
import ex from '../assets/ex.svg';
import cloud from '../assets/brands/cloud.svg';
import victa from '../assets/brands/victa.svg';
import aws from '../assets/brands/aws.svg';
import citi from '../assets/brands/citi.svg';
import fidelity from '../assets/brands/fidelity.svg';
import tsa from '../assets/brands/tsa.svg';
import xpress from '../assets/brands/xpress.svg';
import century from '../assets/brands/century.svg';
import gionee from '../assets/brands/gionee.svg';
import exploreWhite from '../assets/explore-white-logo.svg';
import exBlack from '../assets/ex-black.svg';
import man from '../assets/MAN .svg';

export default function Home() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Services', href: '/services' },
        { name: 'Process', href: '/process' },
        { name: 'Contact', href: '/contact' },
    ]
    const brands:string[] = [fidelity, century, tsa, gionee, citi, xpress, aws, cloud, victa,];
  return (
    <main>
        <section id="Hero" className="my-11 mb-0 h-screen">
            <header className='flex justify-between items-center mb-10 section-spacing '>
                <div>
                    <img src={exploreLogo} alt="explore logo" />
                </div>
                <nav>
                    <ul className='flex gap-5'>
                        {navLinks.map((link) => (
                            <li key={link.name} className="inline-block  font-mont text-[22px]">
                                <a href={link.href}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    <button className="btn bg-primary text-white font-poppins text-[18px] px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                        Get Quote
                    </button>
                </div>
            </header>

            <div className=' bg-primary px-28 text-white flex items-start justify-between py-11 pb-[87px]'>
                <div className='flex flex-col justify-center gap-[63px] flex-2'>
                    <div>
                        <h1 className='font-semibold text-[55px] w-[65%] leading-tight mb-[30px]'>
                            Welcome to your reliable print partner
                        </h1>
                        <p className='subtitle w-[75%]'>
                            We bring your ideas to life with precision printing, vibrant colors and unmatched. attention to detail on every material that matters. 
                        </p>
                    </div>
                    <div className='inline-flex gap-6 font-mont font-medium'>
                        <button className='py-2 text-primary bg-white rounded-[10px] w-[191px] text-xl cursor-pointer'>Get Quote</button>
                        <button className='rounded-[10px] w-[191px] text-xl bg-transparent text-white  border-white border-3 cursor-pointer'>View our work</button>
                    </div>
                </div>
                <div className='flex-1 mt-5'>
                    <img src={ex} alt="explore mockup" className='h-full w-full'/>
                </div>
            </div>
        </section>

        <section id='trusted-brands' className='mb-25'>
            <div className='mb-12'>
                <h1 className='text-3xl font-semibold text-center'>Trusted By</h1>
            </div>
            <div className='overflow-hidden flex gap-[50px]'>
                {brands.map(img => (
                    <img src={img} alt="brand logo" />
                ))}
            </div>
        </section>

        <section id='about-us'>
             <div className='mb-12'>
                <h1 className='text-3xl font-semibold text-center'>ABOUT US</h1>
            </div>
            <div className='bg-primary section-spacing text-white text-xl py-12 px-10 flex relative justify-between'>
                <div className='flex flex-col gap-10 w-[701px]'>
                    <img src={exploreWhite} alt="explore logo" className='w-[150px]'/>
                    <p>
                        Explore Printing & Brand Communication is a growing print-tech startup dedicated to transforming how brands communicate through creative printing and experiential merchandise.
                    </p>
                    <p>
                        We specialize in delivering premium brand materials that amplify marketing efforts and boost visibility — helping businesses stand out and connect meaningfully with their audience.
                    </p>
                    <p>
                        The company was founded by Samuel Jireh, a certified graphic designer with over 15 years of hands-on experience in brand communication and strategy. Samuel has personally contributed to major campaign projects for top multinational brands including MTN, Pepsi, Acer, HP, among others.
                    </p>
                    <p>
                        Explore Printing was born from a simple mission — to redefine the printing culture. Too many print vendors focus only on profit, forgetting that every branded item carries the identity and story of a business. At Explore, we bring back the value, purpose, and excellence that make printing a true extension of brand marketing.
                    </p>
                    <p>
                        Our promise is clear:
                        <br />
                        <span className='font-bold'>
                            “Your Marketing Made Easier.”
                        </span>
                        
                    </p>
                </div>
                <div className='self-end mb-[200px] '>
                    <img src={exBlack} alt="explore acronym logo"/>
                </div>
                <img src={man} alt="a picture of a man" className='absolute bottom-0 right-0'/>
            </div>
        </section>

        <section id='services'>
             <div className='mb-12'>
                <h1 className='text-3xl font-semibold text-center'>Our Printing Services</h1>
            </div>
        </section>
    </main>
    
  )
}

