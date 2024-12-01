import video from "../assets/Website Builder - Create a Free Website Today - Wix.com.mp4";
import bg from "../assets/111 (1).webp";

function Video() {
  return (
    <div className="flex justify-center items-center bg-purple-100 w-full">
      {/* <!-- Left Content --> */}
      <div className="w-5/12 flex flex-col items-start ps-20 gap-5">
        <h1 className="text-6xl text-start font-normal leading-snug w-7/12 mb-6">
          Customize it your way
        </h1>
        <ul className="mb-6 ms-4 space-y-2 text-base">
          <li>• Intuitive drag and drop website editor</li>
          <li>• 1000’s of advanced web design capabilities</li>
          <li>• Powerful AI features for smart customization</li>
          <li>• Full-stack web dev tools for custom functionality</li>
        </ul>
        <button className="w-48 hover:bg-slate-800 bg-black rounded-full transform transition duration-200 ease-in-out text-2xl text-white px-8 py-4">
          Get Started
        </button>
      </div>

      {/* <!-- Right Section with Background Image and Video --> */}
      <div className="w-7/12 relative h-[550px]  overflow-hidden">
        {/* <!-- Background Image --> */}
        <img
          src={bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* <!-- Video on top of background image --> */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 size-9/12 top-16 left-28 rounded-lg object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
