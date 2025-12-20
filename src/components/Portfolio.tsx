import { useState } from "react"
import explorewhite from '../assets/explore-white-logo.svg';
export default function Portfolio() {
    const [activeDiv, setActiveDiv] = useState<string>('Projects')
    const divs = ['Projects', 'Merchandise', 'Billboards', 'Books', 'Others'];

    // Dynamically import all images from the portfolio folders
    const imageModules = import.meta.glob('../assets/portfolio/**/*.{png,jpg,jpeg,webp,svg}', { eager: true });
    type ImageModule = { default: string };

    // Function to filter and return images based on folder
    function loadImages(folder: string): string[] {
    return Object.entries(imageModules)
        .filter(([path]) => path.includes(`/portfolio/${folder}/`))
        .map(([, module]) => (module as ImageModule).default);
    }

    const projectImgs = loadImages('projects');
    const merchandiseImgs = loadImages('merchandise');
    const billboardImgs = loadImages('billboards');
    const booksImgs = loadImages('books');
    const othersImgs = loadImages('others');

    
    return (
        <section className="mt-13">
            <div className="flex flex-col justify-center gap-5">
                <div className="flex gap-5 justify-center w-full flex-wrap">
                    {divs.map((div) => (
                        <div className={`bg-[#E3F5FF] py-2 px-10 font-bold rounded-[10px]  xl:text-lg text-[16px] cursor-pointer ${activeDiv === div ? 'bg-primary text-white' : ''}`} onClick={() => setActiveDiv(div)}>
                            {div}
                        </div>
                    ))}
                </div>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8 px-4">
                    {activeDiv === 'Projects' && projectImgs.map((project, index) => (
                        <div key={index} className=" relative overflow-hidden group cursor-pointer">
                            <img src={project} alt={`Project ${index + 1}`} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />


                            {/* Overlay with title and description */}
                            <div className="absolute inset-0  group-hover:bg-black/60 transition-colors duration-500 " />

                            {/* Text with slide up effect */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t">
                                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <img src={explorewhite} alt="explore logo" className="mb-5"/>
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Explore our diverse range of printing projects and see the quality that sets us apart.
                                </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {activeDiv === 'Merchandise' && merchandiseImgs.map((merchandise, index) => (
                        <div key={index} className="p-4">
                            <img src={merchandise} alt={`Merchandise ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    ))}
                    {activeDiv === 'Billboards' && billboardImgs.map((billboard, index) => (
                        <div key={index} className="p-4">
                            <img src={billboard} alt={`Billboard ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    ))}
                    {activeDiv === 'Books' && booksImgs.map((book, index) => (
                        <div key={index} className="p-4">
                            <img src={book} alt={`Book ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    ))}
                    {activeDiv === 'Others' && othersImgs.map((other, index) => (
                        <div key={index} className="p-4">
                            <img src={other} alt={`Other ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}
