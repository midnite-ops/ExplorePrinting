import exploreLogo from '../assets/explore-logo.svg';
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
import man from '../assets/MY PIC  1.svg';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import bag from '../assets/BAG (1) 1.svg';
import michaelPic from '../assets/Micheal.svg';
import sarahPic from '../assets/Sarah.svg';
import davidPic from '../assets/David.svg';
import starRating from '../assets/star-rating.svg';
import printingProcessImg from '../assets/printing-process.svg';
import HeroTicker from '../components/HeroTicker';

export default function Home() {

    const brandFeatures =  [
        {
            title: 'Brand Identity', 
            desc: [
                    'We create distinctive brand identities that capture your essence and communicate your story with clarity.', 'From logo design and color systems to complete visual guidelines, we ensure your brand stands out, stays consistent, and connects emotionally with your audience.'
                ]
        },
        {
            title: 'Brand Merchandise',
            desc: [
                'We help brands stay visible beyond the billboard. At Explore, we source high-quality products and transform them into walking brand experiences through creative printing and customization.',

                'From everyday essentials to premium keepsakes, our merchandise keeps your brand in motion — because when people carry them, they carry your brand too.'
            ]
        },
        {
            title: '',
            desc: []
        },
        {
            title: 'Digital Banner',
            desc: [
                'We produce high-quality digital banners for retail marketing, especially for SMEs and fintech brands looking to promote their products and services through their agents.',

                'We also create banners for advertising agencies, billboard campaigns, churches, and NGOs — delivering prints that command attention and drive visibility.'
            ]
        },
        {
            title: 'Rollup Stands/PopUps',
            desc: [
                'We produce high-quality roll-up stands and feather banners designed to elevate your marketing presence.',

                'Available in a variety of sizes and styles from slim-base to flat-base designs our banners are built to suit your brand’s unique needs and make your message stand tall anywhere.'
            ]
        },
        {
            title: 'General Printing',
            desc: [
                'We’re your go-to destination for premium offset printing. Using our state-of-the-art Speedmaster press, we deliver exceptional quality for all your stationery and paper-based needs — from paper bags, business cards, and letterheads to business profiles, gift boxes, and more.',

                'Whatever your print project, we bring precision, color accuracy, and class to every detail.'
            ]
        }

    ]
    const reviews = [
        {
            name: 'Micheal Chan',
            img: michaelPic,
            role: 'Marketing Director, Techstart',
            desc: '"PrintCraft delivered exceptional quality for our trade show banners. The colors were vibrant, the material was durable, and the turnaround time was impressive. Highly recommended!"'
        },
        {
            name: 'Sarah Johnson',
            img: sarahPic,
            role: 'Author & Publisher',
            desc: '"The book printing quality exceeded my expectations. The binding is perfect, colors are accurate, and the customer service team was incredibly helpful throughout the process."'
        },
        {
            name: 'David Rodriguez',
            img: davidPic,
            role: 'Restaurant Owner',
            desc: '"From menu designs to promotional flyers, PrintCraft has been our go-to printing partner. Their attention to detail and competitive pricing make them unbeatable."'
        }
    ]

    const printingProcess = [
        {
            title: 'Submit Design',
            desc: 'Upload your artwork or work with our design team to create something amazing.'
        },
        {
            title: 'Approve Proof',
            desc: 'Review and approve the digital proof before we begin production.'
        },
        {
            title: 'Printing',
            desc: 'Our expert team prints your project using premium materials and equipment.'
        },
        {
            title: 'Delivery',
            desc: 'Fast, secure delivery to your doorstep with tracking information provided'
        },
        
    ]
    const navLinks = [
        { name: 'Home', href: '#Hero' },
        { name: 'About Us', href: '#about-us' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ]

    const brands:string[] = [fidelity, century, tsa, gionee, citi, xpress, aws, cloud, victa,];
  return (
    <>
        <main>
            <section id="Hero" className="py-11 mb-0 h-screen">
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

                <div className=' bg-primary px-28 text-white h-[600px] flex justify-center items-center'>
                    <div className='flex flex-col justify-center'>
                        <HeroTicker/>
                        <div className=' flex gap-6 font-mont font-medium mt-15'>
                            <button className='py-2 text-primary bg-white rounded-[10px] w-[191px] text-lg cursor-pointer'>Get Quote</button>
                            <button className='rounded-[10px] w-[191px] text-lg bg-transparent text-white  border-white border-3 cursor-pointer'>View our work</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='trusted-brands' className='mb-25'>
                <div className='mb-12'>
                    <h1 className='text-3xl font-semibold text-center'>Trusted By</h1>
                </div>
                <div className='overflow-hidden flex gap-[50px]'>
                    <div className='flex animate-infinite-scroll-left'>
                        {[...brands, ...brands].map((brand, index) => (
                            <img src={brand} alt="brand logo" key={index} className='h-12 object-contain mx-10'/>
                        ))}
                    </div>
                    
                </div>
            </section>

            <section id='about-us'>
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
                    <div className='self-end mb-[200px] relative'>
                        <img src={exBlack} alt="explore acronym logo"/>
                    </div>
                    <img src={man} alt="a picture of a man" className='absolute bottom-0 right-0 '/>
                    
                </div>
            </section>

            <section className='bg-[#FFCCCC] h-[1000px] py-16 flex jusify-center items-center flex-col gap-10 relative mb-[100px]'>
                <h1 className='text-center text-3xl font-normal'>What we bring to the table</h1>
                <div className='bg-white mx-25 h-full py-[90px] px-5 shadow-xl'>
                    <div className="grid grid-cols-3 gap-4 gap-y-10 gap-x-5">
                        {
                           brandFeatures.map((item, index) => (
                            index === 2 ? (
                                <div key={index} className="p-4 bg-transparent border-0 shadow-none">
                                    {/* Empty space */}
                                </div>
                            ) : (                               
                                <div key={index} className="p-4 border border-[#FF400A] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                    <p className="text-gray-700 text-sm mb-5">{item.desc[0]}</p>
                                    <p className="text-gray-700 text-sm">{item.desc[1]}</p>
                                </div>
                           )))
                        }

                        {/* Empty space */}
                       
                        <div className='absolute -top-3 right-25'>
                            <img src={bag} alt="bag" />
                        </div>
                    </div>


                </div>
            </section>


            <section className='section-spacing flex flex-col items-center justify-center' id='clients'>
                <div className='w-[60%]'>
                    <h1 className='font-poppins text-4xl xl:text-5xl font-medium text-center'>What Our Clients Say</h1>
                    <p className='text-center lg:text-lg text-sm md:text-base mt-4 font-poppins'>
                        Don't just take our word for it - hear from satisfied customers across industries.
                    </p>
                </div>
                <div className='flex gap-5'>
                    {reviews.map((review, index) => (
                        <div key={index} className='bg-gray-100 p-8 mt-10 rounded-lg shadow-md'>
                            <div className='flex gap-5 mb-8'>
                                <img src={review.img} alt={review.name} className='w-16 h-16 rounded-full mb-4'/>
                                <div >
                                    <h3 className='text-lg font-semibold text-gray-900'>{review.name}
                                    </h3>
                                    <p className='text-gray-600'>   {review.role}
                                    </p>
                                </div>
                            </div>
                            <img src={starRating} alt="star ratings image" className='mb-5'/>
                            <p className=' text-gray-800 mb-6'>{review.desc}</p>
                           
                        </div>
                    ))}
                </div>

                <div className='w-[70%] mt-13 flex justify-center gap-10'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-semibold text-4xl'>500+</h1>
                        <p className='font-poppins text-xl text-center'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-semibold text-4xl'>10k+</h1>
                        <p className='font-poppins text-xl text-center'>Projects Completed</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-semibold text-4xl'>99%</h1>
                        <p className='font-poppins text-xl text-center'>Satisfaction Rate</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <h1 className='font-semibold text-4xl'>15+</h1>
                        <p className='font-poppins text-xl text-center'>Years of Experience</p>
                    </div>
                </div>
            </section>

            <section id='process' className='section-spacing'>
                <div className='header-centered'>
                    <h1 className='font-poppins text-4xl xl:text-5xl font-medium text-center'>Our Simple Process</h1>
                    <p className='subtitle'>
                        From concept to delivery, we make printing easy and hassle-free.
                    </p>
                </div>

                <div className='mb-5 mt-18 flex justify-center'>
                    <img src={printingProcessImg} alt="Our printing process" className='w-full'/>
                </div>
                <div className='flex justify-between gap-5'>
                    {
                        printingProcess.map((step, index) => (
                            <div key={index} className='flex flex-col items-center justify-center gap-5 mb-8'>
                                <h2 className='text-xl font-semibold'>{step.title}</h2>
                                <p className='text-center'>{step.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="section-spacing" id='portfolio'>
                <div className='header-centered'>
                    <h1 className='font-poppins text-4xl xl:text-5xl font-medium'>Our Work Portfolio</h1>
                </div>
                 <Portfolio />
            </section>
        </main>
        <Footer />
    </>
    
  )
}

