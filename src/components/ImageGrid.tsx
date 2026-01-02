import explorewhite from "../assets/explore-white-logo.svg";
type Props = {
  images: string[];
  onImageClick: (src: string) => void;
};

export function ImageGrid({ images, onImageClick }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 px-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative overflow-hidden group cursor-pointer"
          onClick={() => onImageClick(img)}
        >
          <img
            src={img}
            alt={`Project ${index + 1}`}
            className="w-full h-full object-cover  rounded-md
              transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 group-hover:bg-black/60 transition-colors duration-500 rounded-md" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <img src={explorewhite} alt="explore" className="mb-5" />
              <p className="text-gray-300 text-sm">
                Explore our diverse range of printing projects and see the quality that sets us apart.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
