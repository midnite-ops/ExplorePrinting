import explorewhite from '../assets/explore-white-logo.svg';
import instagram from '../assets/instagram-icon.svg';
import facebook from '../assets/facebook-icon.svg';
import twitter from '../assets/twitter-icon.svg';
import phoneIcon from '../assets/phone-icon.svg';
import locationIcon from '../assets/location-icon.svg';
import mailIcon from '../assets/mail-icon.svg';
import CTAbg from '../assets/portfolio/CTA-bg.svg';
export default function Footer() {
  return (
    <section >
        <div className='relative h-[500px] flex justify-center items-center text-white'>
            <img src={CTAbg} alt="a printing press background" className="absolute top-0 left-0 w-full h-full object-cover -z-10"/>
            <div className='w-[70%] flex justify-center flex-col items-center gap-8 text-center'>
                <h1 className='font-poppins text-4xl xl:text-5xl font-medium'>Ready to Bring Your Ideas to Life?</h1>
                <p>
                    Let's Print! Join thousands of satisfied customers who trust PrintCraft for all their printing needs. Get your custom quote today and see why we're the preferred choice for quality printing.
                </p>
                <div>
                    <button className="btn bg-primary text-white font-poppins text-[18px] px-6 py-2 rounded-md mr-8 hover:bg-primary-500 transition duration-300">
                        Request a Quote
                    </button>
                    <button className="btn bg-transparent text-white font-poppins text-[18px] px-6 py-2 rounded-md border border-white hover:bg-gray-800 transition duration-300">
                        Call us now
                    </button>
                </div>
                
            </div>
        </div>
        <footer id='contact' className="py-[50px] xl:px-[100px] bg-primaryBlack text-gray">
            <div className="container mx-auto ">
                <div className="flex justify-between items-start border-b border-gray pb-14 mb-10 ">
                    <div className="text-gray w-[25%]">
                        <img src={explorewhite} alt="Explore Printing Logo" className='mb-6'/>
                        <p className="text-sm mt-2">
                            Your trusted partner for all printing needs. Quality, speed, and reliability in every project.
                        </p>
                        <div className='flex gap-5 mt-5'>
                            <a href="">
                                <img src={facebook} alt="a facebook link" />
                            </a>
                            <a href="">
                                <img src={twitter} alt="a twitter link" />
                            </a>
                            <a href="">
                                <img src={instagram} alt="an instagram logo embedded with a link" />
                            </a>
                        </div>
                    </div>
                    <div className=''>
                        <h2 className='text-white text-xl mb-6'>Services</h2>
                        <ul className='flex flex-col gap-5 '>
                            <li>Merchandise Printing</li>
                            <li>Billboard & Large Format</li>
                            <li>Books and Publications</li>
                            <li>Marketing Materials</li>
                            <li>Custom Solutions</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className='text-white text-xl mb-6'>Quick Links</h2>
                        <ul className='text-gray flex flex-col gap-5 font-mont'>
                            <a href="#" className="hover:text-gray-300">About Us</a>
                            <a href="#" className="hover:text-gray-300">Portfolio</a>
                            <a href="#" className="hover:text-gray-300">FAQ</a>
                            <a href="#" className="hover:text-gray-300">Contact Us</a>
                        </ul>
                    </div>
                    <div className='w-[260px]'>
                        <h2 className='text-xl mb-6 text-white'>Contact Info</h2>
                        <ul className='flex flex-col gap-5 font-mont'>
                            <div className='flex items-center gap-4'>
                                <img src={locationIcon} alt="a location icon" />
                                <p className='leading-7'>123, George Street Shomulu, Lagos</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={phoneIcon} alt="a phone icon" />
                                <p className='leading-7'>+234 123 456 78</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={mailIcon} alt="a mail icon" />
                                <p className='leading-7'>info@xploreprinting.com</p>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-[18px] font-light">
                    @ {new Date().getFullYear()} Explore-Printing. All rights reserved. | Privacy Policy | Terms of Service
                </div>
            </div>
        </footer>
    </section>
    
  )
}
