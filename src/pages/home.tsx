import exploreLogo from '../assets/explore-logo.svg';
import cloud from '../assets/brands/cloud.svg';
import victa from '../assets/brands/victa.svg';
import aws from '../assets/brands/aws.svg';
import infinite from '../assets/brands/IN3.svg';
import fpl from '../assets/brands/IN1.svg'; 
import mtn from '../assets/brands/IN2.svg';
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
import pic1 from '../assets/pic1.svg';
import pic2 from '../assets/pic2.svg';
import pic3 from '../assets/pic3.svg';
import starRating from '../assets/star-rating.svg';
import printingProcessImg from '../assets/printing-process.svg';
import HeroTicker from '../components/HeroTicker';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Accordion,AccordionContent, AccordionItem,AccordionTrigger } from "@/components/ui/accordion"
import { MenuIcon } from 'lucide-react';
import processImg1 from '../assets/process/img-1.svg';
import processImg2 from '../assets/process/img-2.svg';
import processImg3 from '../assets/process/img-3.svg';
import processImg4 from '../assets/process/img-4.svg';
import eye from '../assets/table/eye.svg';
import faceCap from '../assets/table/face-cap.svg';
import printer1 from '../assets/table/printer-1.svg';
import printer2 from '../assets/table/printer-2.svg';
import flex from '../assets/table/flex.svg';
import Counter from '@/hooks/counter';
export default function Home() {

    const brandFeatures =  [
        {
            title: 'Brand Identity', 
            desc: [
                'We create distinctive brand identities that capture your essence and communicate your story with clarity.', 'From logo design and color systems to complete visual guidelines, we ensure your brand stands out, stays consistent, and connects emotionally with your audience.'
            ],
            img: eye

        },
        {
            title: 'Brand Merchandise',
            desc: [
                'We help brands stay visible beyond the billboard. At Explore, we source high-quality products and transform them into walking brand experiences through creative printing and customization.',

                'From everyday essentials to premium keepsakes, our merchandise keeps your brand in motion — because when people carry them, they carry your brand too.'
            ],
            img: faceCap
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
            ],
            img: printer1
        },
        {
            title: 'Rollup Stands/PopUps',
            desc: [
                'We produce high-quality roll-up stands and feather banners designed to elevate your marketing presence.',

                'Available in a variety of sizes and styles from slim-base to flat-base designs our banners are built to suit your brand’s unique needs and make your message stand tall anywhere.'
            ],
            img: flex
        },
        {
            title: 'General Printing',
            desc: [
                'We’re your go-to destination for premium offset printing. Using our state-of-the-art Speedmaster press, we deliver exceptional quality for all your stationery and paper-based needs — from paper bags, business cards, and letterheads to business profiles, gift boxes, and more.',

                'Whatever your print project, we bring precision, color accuracy, and class to every detail.'
            ],
            img: printer2
        }

    ]
    const faq = [
        {
            title:'How do I place an order with your printing service?', 
            description: 'Placing an order is simple and stress-free. You can reach us via WhatsApp, phone call, or email. Once you share your design (or request design support), we confirm specifications, pricing, and timelines before production begins.'}, 
        {
            title:'What if I don’t have a design ready?', 
            description: 'No problem at all. Our in-house design team can help you create or refine your design to ensure it prints perfectly. We focus on clarity, color accuracy, and print-ready files—so you get the best final result.'},
        {
            title:'How long does printing take?', 
            description:'Turnaround time depends on the job type and quantity, but we always communicate timelines upfront. Most standard print jobs are completed within 24–72 hours, and urgent jobs can be handled on request.'}, 
        {
            title:'How do you ensure quality and accuracy?', 
            description: 'We carefully review every job before printing—checking size, colors, spelling, and finishing. Proofs are shared when necessary, and we only proceed after confirmation. Our goal is to deliver exactly what you expect, without surprises.'}, 
        {
            title:'What level of print quality should I expect from your service?', 
            description: 'You can expect sharp prints, accurate colors, clean finishing, and durable materials. We use professional-grade machines and materials, and every job goes through a quality check before delivery to ensure it meets our standards and your expectations.'}, 
        {
            title: 'What happens if there’s an error or issue with my order?', 
            description: 'If any issue arises from our end, we take responsibility and resolve it promptly. Customer satisfaction is important to us, so we work quickly to correct mistakes and ensure you’re happy with the final output.'
        }
    ]
    const reviews = [
        {
            name: 'Laura Tin Moe Aung',
            img: pic1,
            role: 'TSA Hotel Supply',
            desc: '“We absolutely love the stickers you made for us! Clean prints, vibrant colors, and great attention to detail. Thank you for an amazing job.”'
        },
        {
            name: 'Nicole Horsfall',
            img: pic2,
            role: 'CEO - Infinte gestures',
            desc: '"I’m impressed by how neat their work is. Thank you for the quality work over the years."'
        },
        {
            name: 'Yusuf Usman',
            img: pic3,
            role: 'Visibility - Techive',
            desc: '"Printing with Explore Printing is very seamless. I can’t remeber the last time I had to run after a vendor to deliver. Thank you and God bless you."'
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

    const brands:string[] = [fidelity, century, tsa, gionee, xpress, aws, cloud, victa, mtn, infinite, fpl];
  return (
    <>
        <main>
            <section id="Hero" className="lg:pt-11 pt-7 h-min mb-[100px]">
                <header className='flex flex-wrap justify-between items-center mb-6 lg:mb-10 section-spacing '>
                    <div className='flex-1'>
                        <img src={exploreLogo} alt="explore logo" className=' w-25 lg:w-auto'/>
                    </div>
                    <nav className='hidden items-center justify-between lg:flex flex-2'>
                        <ul className='flex gap-5'>
                            {navLinks.map((link) => (
                                <li key={link.name} className="inline-block  font-mont text-[22px]">
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <a href="https://wa.me/2348163137546" target='_blank'>
                                <button className="btn bg-primaryBlue text-white font-poppins text-[18px] px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                    Get Quote
                                </button>
                            </a>
                            
                        </div>
                    </nav>
                    <SidebarTrigger className='bg-transparent text-black  lg:hidden '>
                        <MenuIcon className='h-4 w-4'/>
                    </SidebarTrigger>
                    
                </header>

                <div className=' bg-primaryBlue md:px-28 text-white lg:h-[600px] flex justify-center items-center pb-10 px-5'>
                    <div className='flex flex-col justify-center'>
                        <HeroTicker/>
                        <div className=' flex gap-6 font-mont font-medium mt-15 w-full lg:justify-start justify-center'>
                            <a href="https://wa.me/2348163137546" target='_blank'>
                                <button className='py-2 text-primaryBlue bg-white rounded-[10px] w-[150px] lg:w-[191px text-lg cursor-pointer'>Get Quote</button>
                            </a>
                            
                            <a href="#portfolio" className='rounded-[10px] w-[160px] lg:w-[191px] text-lg bg-transparent text-white  border-white border-3 cursor-pointer px-1 flex items-center justify-center'>
                                View our Work
                            </a>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section id='trusted-brands' className='mb-[100px] '>
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
                <div className='bg-primaryBlue mx-0 lg:mx-25 section-spacing text-white text-xl py-12 px-5 lg:px-10 flex relative justify-between flex-col lg:flex-row items-center h-[1600px] md:h-auto'>
                    <div className='flex flex-col gap-10 lg:w-[701px]'>
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
                    <div className='self-end flex justify-center items-end w-full h-full md:mb-[200px]  md:w-auto'>
                        <img src={exBlack} alt="explore acronym logo" className='w-[192px] md:w-auto'/>
                    </div>
                    <img src={man} alt="a picture of a man" className='absolute bottom-0 right-20 md:right-0 w-[200px] lg:w-auto md:mb-0 md:mt-5' loading='lazy'/>
                    
                </div>
            </section>

            <section className='bg-[#FFCCCC] px-5 lg:px-24 py-16 pb-5 flex justify-center items-center flex-col gap-10 relative mb-[100px] overflow-hidden '>
                <h1 className='text-center text-3xl font-normal relative z-20'>What we bring to the table</h1>
                <div className='bg-white py-8 lg:py-[90px] px-5 shadow-x z-10  md:z-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative gap-4 gap-y-10 gap-x-5 z-10">
                        {
                           brandFeatures.map((item, index) => (
                            index === 2 ? (
                                <div key={index} className="p-4 bg-transparent border-0 shadow-none hidden lg:block">
                                    {/* Empty space */}
                                </div>
                            ) : (                               
                                <div key={index} className="p-5 border border-[#FF400A] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative bg-white">
                                    <img src={item.img} alt={item.title} className='absolute -top-7 right-10 w-[60px] h-[50px] md:w-auto md:h-auto z-10 bg-white'/>
                                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                                    <p className="text-gray-700 text-sm mb-5">{item.desc[0]}</p>
                                    <p className="text-gray-700 text-sm">{item.desc[1]}</p>
                                </div>
                           )))
                        }

                        {/* Empty space */}
                    </div>
                    <div className='absolute -z-0 -top-3  md:-top-3 -right-30 md:right-25 hidden md:block'>
                        <img src={bag} alt="bag" className=' w-[300px] lg:w-full h-[450px]' />
                    </div>
                </div>
                <div className='absolute z-0 -top-10  md:-top-3 -right-30 md:right-25 md:hidden'>
                    <img src={bag} alt="bag" className=' w-[300px] lg:w-full h-[450px] md:hidden' />
                </div>
                
            </section>


            <section className='section-spacing flex flex-col items-center justify-center' id='clients'>
                <div className='md:w-[60%] w-full'>
                    <h1 className='font-poppins text-4xl xl:text-5xl font-medium text-center'>What Our Clients Say</h1>
                    <p className='text-center lg:text-lg text-sm md:text-base mt-4 font-poppins'>
                        Don't just take our word for it - hear from satisfied customers across industries.
                    </p>
                </div>
                <div className='flex gap-5 flex-wrap justify-center md:justify-self-auto lg:flex-nowrap'>
                    {reviews.map((review, index) => (
                        <div key={index} className='bg-gray-100 w-[400px] p-8 mt-10 rounded-lg shadow-md'>
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

                <div className='w-full lg:w-[70%] mt-13 justify-center gap-10 hidden lg:flex'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <Counter target={500}/> 
                            <p className='font-semibold lg:text-4xl text-2xl'>+</p>
                        </div>
                        
                        <p className='font-poppins text-sm lg:text-xl text-center'>Happy Clients</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <Counter target={3}/> 
                            <p className='font-semibold lg:text-4xl text-2xl'>k+</p>
                        </div>
                        <p className='font-poppins text-xl text-center'>Projects Completed</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <Counter target={99}/> 
                            <p className='font-semibold lg:text-4xl text-2xl'>%</p>
                        </div>
                        <p className='font-poppins text-xl text-center'>Satisfaction Rate</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <Counter target={5}/> 
                            <p className='font-semibold lg:text-4xl text-2xl'>+</p>
                        </div>
                        <p className='font-poppins text-xl text-center'>Years of Experience</p>
                    </div>
                </div>
            </section>

            <section className="section-spacing" id='portfolio'>
                <div className='header-centered'>
                    <h1 className='font-poppins text-center text-4xl xl:text-5xl font-medium'>Our Work Portfolio</h1>
                </div>
                 <Portfolio />
            </section>

            <section id='process' className='section-spacing'>
                <div className='header-centered'>
                    <h1 className='font-poppins text-4xl xl:text-5xl font-medium text-center'>Our Simple Process</h1>
                    <p className='subtitle'>
                        From concept to delivery, we make printing easy and hassle-free.
                    </p>
                </div>
                <div className='flex lg:flex-col mt-18'>
                    <div className='mb-5 flex flex-1 justify-center'>
                        <img src={printingProcessImg} alt="Our printing process" className='w-full h-full hidden lg:block'/>
                        <div className='lg:hidden flex justify-around flex-col pr-5  border-r-8 border-primaryBlue h-full'>
                            {[processImg1,processImg2,processImg3,processImg4].map((img) => (
                                <img src={img} className='w-20'/>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row flex-1 lg:justify-between justify-center gap-5'>
                        {
                            printingProcess.map((step, index) => (
                                <div key={index} className='flex flex-col items-start lg:items-center justify-center gap-5 mb-8'>
                                    <h2 className='text-xl font-semibold'>{step.title}</h2>
                                    <p className='lg:text-center'>{step.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </section>

            <section id="FAQ" className="flex  flex-col justify-center section-spacing  space-y-20 px-2">
            
                <h1 className='font-poppins text-4xl xl:text-5xl font-medium text-center'>FAQ</h1>
                <Accordion
                type="single"
                collapsible
                className="w-full  flex flex-col gap-7.5 justify-center "
                defaultValue="">
                    {faq.map((item, index) => (
                        <AccordionItem key={index} value={`item ${index}`} className='py-4 px-5 border-none bg-[#F4F4F4] rounded-xl'>
                            <AccordionTrigger className='bg-transparent hover:no-underline'>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-col gap-4 mt-5 flex-start">
                                    <p className='text-start'>{item.description}</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>  
                    ))}
                </Accordion>
            </section>
        </main>
        <Footer />
    </>
    
  )
}

