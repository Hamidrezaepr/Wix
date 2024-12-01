import AWebsiteBuilder from "./AWebsiteBuilder";
import  Carousel  from "./Carousel";
import Comp from "./Comp";
import TakeYourBusiness from "./TakeYourBusiness";
import Video from "./Video";
import DriveTraffic from "./DriveTraffic";
import Manage from "./Manage";
import HowToCreate from "./HowToCreate";
import GetInspired from "./GetInspired";
import WhyTheWix from "./WhyTheWix";
import WereHere from "./WereHere";
import TomorrowsSuccess from "./TomorrowsSuccess";
import FAQs from "./FAQs";





function Main() {
  return (
    <section className="flex flex-col justify-center items-center bg-white w-full h-auto">
      <div className="flex flex-col justify-center items-start py-32 gap-10 w-9/12">
        <div className="">
          <h1 className="text-black leading-tight sm:text-2xl md:text-4xl lg:text-7xl w-[40rem]">
            One platform, infinite possibilities
          </h1>
        </div>
        <div className="flex gap-12">
          <Comp></Comp>
          <Comp></Comp>
          <Comp></Comp>
        </div>
        <div className="flex items-start w-full">
          <button className="w-48 hover:bg-indigo-500 bg-black rounded-full transform transition duration-200 ease-in-out text-2xl ms-10 text-white px-8 py-4">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-12 bg-black py-32">
        <h1 className="text-white text-center text-7xl leading-tight w-7/12">
          Website templates that set you up for success
        </h1>
        <p className="text-white text-xl w-8/12 text-center">
          Get a headstart on your journey with 900+ free, customizable{" "}
          <span className="underline">website templates</span>, strategically
          researched and tailored for every industry — or start from a blank
          canvas on our website builder.
        </p>
        <div>
          <button className="w-48 hover:bg-slate-300 bg-white rounded-full transform transition duration-200 ease-in-out text-2xl ms-10 text-black px-8 py-4">
            Get Started
          </button>
        </div>
      </div>
      {/* {Carousel} */}
      <Carousel></Carousel>
      {/* {Build more than a website} */}
      <div className=" flex items-center justify-center">
        <div className="flex items-center gap-20 my-20  w-9/12 h-80">
          <div className="w-7/12">
            <h1 className="text-black leading-tight text-7xl">
              Build more than a website
            </h1>
          </div>
          <div className="w-7/12 flex flex-col mt-16  h-52 gap-10">
            <p className="w-10/12">
              Get secure web hosting, a custom domain and a full business
              solution tailored to your needs. So whether you’re selling online,
              starting a blog, building a community or anything else—your site
              will do more than just look good, it will be the core of your
              business.
            </p>
            <button className="flex items-center gap-1 underline">
              <p className="text-lg">Get Started</p>
              <svg
                className="size-3 underline"
                data-bbox="0.4 0.3 17.5 11.7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 12"
                data-type="shape"
              >
                <g>
                  <path d="M11.8 12H9.3l5.2-5H.4V5.3h14.1L9.3.3h2.5l6.1 5.9-6.1 5.8z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* {video} */}
      <Video></Video>
      <AWebsiteBuilder></AWebsiteBuilder>
      <TakeYourBusiness></TakeYourBusiness>
      <DriveTraffic></DriveTraffic>
      <Manage></Manage>
      <HowToCreate></HowToCreate>
      <GetInspired></GetInspired>
      <WhyTheWix></WhyTheWix>
      <WereHere></WereHere>
      <TomorrowsSuccess></TomorrowsSuccess>
      <FAQs></FAQs>
    </section>
  );
}

export default Main;
