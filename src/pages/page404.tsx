import vector2 from '../assets/Vector-2.svg';
import vector from '../assets/Vector.svg';
function Page404() {
  return (
    <div className=" w-full h-screen flex justify-center place-items-center bg-white">
      <div>
        <div className="absolute right-0  -bottom-10 -z-10">
          <img src={vector} alt="a blue vector element"/>
        </div>
        <div className="absolute right-0  -top-10 -z-10">
          <img src={vector2} alt="a blue vector element"/>
        </div>
        <div className="font-inter text-center mb-10 ">
            <h1 className="text-6xl md:text-[100px] font-bold text-center mb-2.5">404</h1>
            <p className='gray-text'>Ooops! Something went wrong ......</p>
        </div>

        <div className="flex flex-col items-center gap-10 mt-8 text-center ">
          <p className="w-[90%] md:w-[w-70%] gray-text"> The page you are looking for is not available. Contact your developer to fix any issues.</p>
          
        </div>
      </div>
      
        
    </div>
  )
}
export default Page404