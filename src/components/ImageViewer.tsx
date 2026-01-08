import { motion } from "framer-motion"
import { X } from "lucide-react"

type Props = {
  src: string
  onClose?: () => void
}

export default function ImageViewer({ src, onClose }: Props) {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-30 text-white p-2 rounded-full hover:bg-white/10 transition"
      >
        <X className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Image wrapper */}
      <div
        className="relative w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <motion.img
          src={src}
          alt="Full view"
          className="w-full h-full object-contain"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        {/* Overlay ON TOP of image */}
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </div>
    </div>
  )
}
