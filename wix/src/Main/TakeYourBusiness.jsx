import helmet from "../assets/a261d7_6957acfead66463a80d2c605220cc0cd~mv2.webp";
import cofee from "../assets/2.webp";
import yoga from "../assets/3.webp";
import ellie from "../assets/4.webp";
import flexxaction from "../assets/5.webp";
import customize from "../assets/6.webp";

function TakeYourBusiness() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex items-center w-6/12 mt-28 mb-20">
        <h1 className="text-6xl leading-snug text-center">
          Take your business where it needs to go
        </h1>
      </div>
      <div className="w-8/12 flex flex-wrap justify-between">
        <div className="flex flex-col w-[449.28px] gap-5 justify-start mb-20">
          <img className="w-[449.28px] h-[450px]" src={helmet} alt="" />
          <h1 className="font-semibold text-2xl">eCommerce</h1>
          <span>
            {" "}
            <a className="underline" href="">
              Sell online
            </a>{" "}
            and manage your business with powerful eCommerce solutions.
          </span>
          <div className="space-x-4">
            <a
              href="#"
              className="text-black font-normal border-b-2 border-black pb-1 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
            >
              Create Your eCommerce Site →
            </a>
            <a
              href="#"
              className="text-black font-normal border-b-2 border-black pb-1 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
            >
              Learn How →
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[449.28px] gap-5 justify-end mb-20">
          <img className="w-[449.28px] h-[450px]" src={cofee} alt="" />
          <h1 className="font-semibold text-2xl">Blog</h1>
          <span>
            Create a free blog, grow a loyal audience and monetize your content.
          </span>
          <div className="space-x-4">
            <a
              href="#"
              className="text-black font-normal border-b-2 border-black pb-1 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
            >
              Create Your Own Blog →
            </a>
            <a
              href="#"
              className="text-black font-normal border-b-2 border-black pb-1 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
            >
              Learn How →
            </a>
          </div>
        </div>
        <div className="flex flex-col w-[449.28px] gap-5 justify-start mb-20">
          <img className="w-[449.28px] h-[450px]" src={yoga} alt="" />
          <h1 className="font-semibold text-2xl">Scheduling</h1>
          <span>
            Offer services and deliver a seamless booking experience for your
            clients.
          </span>
          <a
            href="#"
            className="text-black bg-slate-400 font-normal border-b-2 border-black pb-1 w-3/12 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
          >
            Learn More →
          </a>
        </div>
        <div className="flex flex-col w-[449.28px] gap-5 mb-20">
          <img className="w-[449.28px] h-[450px]" src={ellie} alt="" />
          <h1 className="font-semibold text-2xl">Portfolio</h1>
          <span>
            Showcase your work and attract new clients with an online portfolio.
          </span>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="flex flex-col w-[449.28px] gap-5">
          <img className="w-[449.28px] h-[450px]" src={flexxaction} alt="" />
          <h1 className="font-semibold text-2xl">Domain and hosting</h1>
          <span>
            Get scalable,
            <a className="underline" href="">
              free web hosting
            </a>{" "}
            when you create your own website, and connect a{" "}
            <a className="underline" href="">
              professional domain name
            </a>{" "}
            .
          </span>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="flex flex-col w-[449.28px] gap-5">
          <img className="w-[449.28px] h-[450px]" src={customize} alt="" />
          <h1 className="font-semibold text-2xl">Branding tools</h1>
          <span>
            Establish a strong brand identity with a{" "}
            <a className="underline" href="">
              customizable logo
            </a>{" "}
            , color and text themes, and more.
          </span>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </section>
  );
}

export default TakeYourBusiness;
