import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import waterBottle from "../assets/hero/water-bottle.svg"
import tShirt from "../assets/hero/T-shirt.svg"
import notebook from "../assets/hero/NOTEBOOK.svg"
import notebookMobile from "../assets/hero/notebook-mobile.svg"
import ex from "../assets/ex.svg"

type HeroItem = {
  title: string
  desc: string
  img: string
  imgMobile?: string
  dimensions?: { width: number; height: number }
}

export default function HeroTicker() {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  })

  const heroDisplay: HeroItem[] = [
    {
      title: "Welcome to your reliable print partner",
      desc:
        "We bring your ideas to life with precision printing, vibrant colors, and unmatched attention to detail — on every material that matters.",
      img: waterBottle,
    },
    {
      title:
        "You want your brand to gain visibility through quality merch, isn’t it?",
      desc:
        "From T-shirts to mugs, billboards to merch — we help your brand stand out with bold, durable, and eye-catching prints that speak for you.",
      img: tShirt,
    },
    {
      title: "What would you like to print today?",
      desc:
        "Whether it’s a book launch, a marketing campaign, or your next event — we’ve got the perfect print solution for you. Let’s start your next project.",
      img: notebook,
      imgMobile: notebookMobile,
	  dimensions: { width: 100, height: 100}
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroDisplay.length)
        setOpacity(1)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentItem = heroDisplay[currentIndex]

  const imageSrc =
    isMobile && currentItem.imgMobile
      ? currentItem.imgMobile
      : currentItem.img

  return (
    <section className="flex w-full justify-start items-center gap-10 xl:gap-0 md:flex-row flex-col-reverse h-[500px] lg:h-[300px] mt-10 md:mt-0">
      <div className="flex-1 flex flex-col w-full">
        <h1
          className={`font-bold text-2xl lg:text-[50px] text-center lg:text-start leading-tight mb-[30px] transition-opacity ${
            currentIndex === 1 ? "lg:w-[580px]" : "lg:w-[450px]"
          } duration-500 ease-in-out w-full`}
          style={{ opacity }}
        >
          {currentItem.title}
        </h1>

        <p
          className="subtitle transition-opacity duration-500 ease-in-out text-center lg:text-start"
          style={{ opacity }}
        >
          {currentItem.desc}
        </p>
      </div>

      <div className="flex-1 mt-5 flex items-center justify-center relative h-[300px] md:h-auto">
        <img src={ex} alt="" className="absolute w-full" />
		{/* Image displays a different book on mobile and a different one on desktop */}
        <img
          src={imageSrc}
          alt="explore mockup"
          className={`transition-opacity duration-700 z-10 object-cover border-transparent md:h-auto md:w-auto ${currentItem.dimensions ? `w-[${currentItem.dimensions.width}px] h-[${currentItem.dimensions.height}px]` : 'h-[300px] w-[250px]'}`}
          style={{ opacity }}
        />
      </div>
    </section>
  )
}
