import ax from "../assets/1.jpg";
import ax1 from "../assets/2.jpg";
import ax2 from "../assets/3.jpg";
import ax3 from "../assets/4.jpg";
import ax4 from "../assets/5.jpg";
import ax5 from "../assets/6.jpg";

function Carousel() {
  return (
    <div className="flex items-center justify-center pb-20 w-full bg-black">
      <div className="flex gap-10 overflow-x-scroll bg-black w-11/12 snap-x snap-mandatory">
        <div className="flex flex-col flex-shrink-0 gap-4 h-full py-1">
          <img src={ax} alt="" />
          <button className="text-white underline text-start">Store →</button>
        </div>
        <div className="flex flex-col flex-shrink-0 gap-4 h-full py-1">
          <img src={ax1} alt="" />
          <button className="text-white underline text-start">Technology →</button>
        </div>
        <div className="flex flex-col flex-shrink-0 gap-4 h-full py-1">
          <img src={ax2} alt="" />
          <button className="text-white underline text-start">Blog →</button>
        </div>
        <div className="flex flex-col flex-shrink-0 gap-4 h-full py-1">
          <img src={ax3} alt="" />
          <button className="text-white underline text-start">Restaurant →</button>
        </div>
        <div className="flex flex-col flex-shrink-0 gap-4 h-full py-1">
          <img src={ax4} alt="" />
          <button className="text-white underline text-start">Fashion →</button>
        </div>
        <div className="flex flex-col flex-shrink-0 gap-4 h-full py-1">
          <img src={ax5} alt="" />
          <button className="text-white underline text-start">Portfolio →</button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
