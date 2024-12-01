import oneoffour from '../assets/1of4.JPG';
import twooffour from '../assets/2of4.JPG';
import threeoffour from '../assets/3of4.JPG';
import fouroffour from '../assets/4of4.JPG';

function GetInspired() {
  return (
    <section className="bg-black flex w-full py-28">
      <div className="text-white w-1/2 flex flex-col gap-12 justify-center items-center">
        <div className="flex flex-col gap-6 w-2/3">
          <h1 className="text-6xl text-start ">Get inspired, gain </h1>
          <h1 className="text-6xl text-start">new skills and</h1>
          <h1 className="text-6xl text-start">see what’s</h1>
          <h1 className="text-6xl text-start">trending</h1>
        </div>
        <div className="w-2/3 text-left">
          <button className="w-56v hover:bg-slate-300 bg-white rounded-full transform transition duration-200 ease-in-out text-xl text-black px-8 py-3">
            Explore the Blog
          </button>
        </div>
      </div>
      <div className='w-1/2 grid grid-cols-2'>
        <img className='rounded size-5/6' src={oneoffour} alt="" />
        <img className='rounded size-5/6' src={twooffour} alt="" />
        <img className='rounded size-5/6' src={threeoffour} alt="" />
        <img className='rounded size-5/6' src={fouroffour} alt="" />
      </div>
    </section>
  );
}

export default GetInspired;
