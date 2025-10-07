import vector from '../assets/Vector.svg'
import vector2 from '../assets/Vector-2.svg'
function Page404() {
  return (
    <div className=" w-full ">
      {/* A div element with the class of absolute. It serves as a vector element for the 404 Page */}
      <div className="absolute right-0  -bottom-10 -z-10">
        <img src={vector} alt="a blue vector element"/>
      </div>
      <div className="absolute right-0  -top-10 -z-10">
        <img src={vector2} alt="a blue vector element"/>
      </div>
      <div className="font-inter text-center mb-10 ">
          <h1 className="text-6xl md:text-[100px] font-bold text-center mb-2.5">404</h1>
          <p>Ooops! Something went wrong ......</p>
      </div>

      <div className="flex flex-col items-center gap-10 mt-8 text-center ">
        <p className="w-[90%] md:w-[w-70%]"> The page you are looking for is under development. Come back in a few weeks to get more out of <span className='font-bold'>ExplorePrinting</span></p>
        {/* <div className="flex gap-6">
          <button className="btn bg-blue-500">GO BACK </button>
          <button className="btn border border-blue-500 text-blue-500">HOMEPAGE</button>
        </div> */}
      </div>
        
    </div>
  )
}
export default Page404