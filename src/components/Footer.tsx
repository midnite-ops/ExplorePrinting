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
            <div className='w-full px-5 md:w-[70%] flex justify-center flex-col items-center gap-8 text-center'>
                <h1 className='font-poppins text-4xl xl:text-5xl font-medium'>Ready to Bring Your Ideas to Life?</h1>
                <p>
                    Let's Print! Join thousands of satisfied customers who trust PrintCraft for all their printing needs. Get your custom quote today and see why we're the preferred choice for quality printing.
                </p>
                <div className='flex'>
                    <a href="https://wa.me/2348163137546" target='_blank'>
                        <button className="btn bg-primaryBlue text-white font-poppins md:text-[18px] px-6 py-2 rounded-md mr-8 hover:bg-primaryBlue-500 transition duration-300">
                            Request a Quote
                        </button>
                    </a>
                    <a href="tel:+234 8106854809">
                        <button className="btn bg-transparent text-white font-poppins text-[18px] px-6 py-2 rounded-md border border-white hover:bg-gray-800 transition duration-300">
                            Call us now
                        </button>
                    </a>
                    
                </div>
                
            </div>
        </div>
        <footer id='contact' className="py-[50px] xl:px-[100px] bg-primaryBlack text-gray">
            <div className=" mx-auto px-4">
                <div className="flex lg:flex-row gap-10 justify-between flex-col items-start border-b border-gray pb-14 mb-10">
                    {/* Quick Links for Mobile, only shows on mobile */}
                    <div className='lg:hidden'>
                        <h2 className='text-white text-xl mb-6'>Quick Links</h2>
                        <ul className='text-gray flex flex-col gap-5 font-mont'>
                            <a href="#" className="hover:text-gray-300">About Us</a>
                            <a href="#" className="hover:text-gray-300">Portfolio</a>
                            <a href="#" className="hover:text-gray-300">FAQ</a>
                            <a href="#" className="hover:text-gray-300">Contact Us</a>
                        </ul>
                    </div>
                    <div className="text-gray w-[50%] lg:w-[25%] hidden lg:block">
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
                    <div >
                        <h2 className='text-white text-xl mb-6'>Services</h2>
                        <ul className='flex flex-col gap-5 '>
                            <li>Merchandise Printing</li>
                            <li>Billboard & Large Format</li>
                            <li>Books and Publications</li>
                            <li>Marketing Materials</li>
                            <li>Custom Solutions</li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
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
                                <div>
                                    <p className='leading-7 mb-3'>Elephant house 214 broad Street, Lagos Island.</p>
                                    <p className='leading-7'>Print office 3 Akemfenwa Street, Ogba.</p>
                                </div>
                                
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={phoneIcon} alt="a phone icon" />
                                <div>
                                    <p className='leading-7'>+234 8163137546</p>
                                    <p className='leading-7'>+234 8106854809</p>
                                </div>
                                
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={mailIcon} alt="a mail icon" />
                                <p className='leading-7'>exploreprintingafrica@gmail.com</p>
                            </div>
                        </ul>
                    </div>

                    {/* Mobile Footer Logo and Description */}
                    <div className="text-gray w-[50%] lg:w-[25%] lg:hidden">
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
                </div>
                <div className="mt-8 text-center text-[18px] font-light">
                    @ {new Date().getFullYear()} Explore-Printing. All rights reserved. | Privacy Policy | Terms of Service
                </div>
            </div>
        </footer>
    </section>
    
  )
}
