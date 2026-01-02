import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { ImageGrid } from "./ImageGrid";
import { AnimatePresence, motion } from "framer-motion";

type ImageModule = { default: string };

export default function Portfolio() {
  const [activeDiv, setActiveDiv] = useState("Merchandise");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const divs = ["Merchandise", "Billboards", "Recent Jobs"];

  // Load images dynamically
  const imageModules = import.meta.glob(
    "../assets/portfolio/**/*.{png,jpg,jpeg,webp,svg}",
    { eager: true }
  );

  function loadImages(folder: string): string[] {
    return Object.entries(imageModules)
      .filter(([path]) => path.includes(`/portfolio/${folder}/`))
      .map(([, module]) => (module as ImageModule).default);
  }

  const imagesMap: Record<string, string[]> = {
    Merchandise: loadImages("merchandise"),
    Billboards: loadImages("billboards"),
    "Recent Jobs": loadImages("recent-jobs"),
  };

  // Lock scroll when image is open
  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
  }, [activeImage]);

  // Escape key close
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section className="mt-13">
      <div className="flex flex-col gap-5">

        {/* Tabs */}
        <div className="flex gap-5 justify-center flex-wrap">
          {divs.map((div) => (
            <button
              key={div}
              onClick={() => setActiveDiv(div)}
              className={`py-2 px-4 md:px-10 rounded-[10px] font-bold text-[16px] xl:text-lg transition
                ${activeDiv === div ? "bg-primaryBlue text-white" : "bg-[#E3F5FF]"}`}
            >
              {div}
            </button>
          ))}
        </div>

        {/* Grid */}
        <ImageGrid
          images={imagesMap[activeDiv]}
          onImageClick={setActiveImage}
        />
      </div>

      {/* Facebook-style viewer */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-60 text-white p-2 rounded-full 
                        hover:bg-white/10 transition focus:outline-none"
            >
              <X className="w-6 h-6 md:w-7 md:h-7" />
            </button>

            {/* Image */}
            <div className="w-full h-full flex items-center justify-center">
              <motion.img
                src={activeImage}
                className="max-w-[90vw] max-h-[90vh] object-contain"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
