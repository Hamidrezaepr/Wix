import under from "../assets/a261d7_0bc40554ad8042299b59e56e5918297c~mv2.webp";
import above from "../assets/a261d7_c968efac573a4d898e66cec40f71e9b2~mv2.webp";

function Manage() {
  return (
    <section className="flex h-fit mt-24">
      <div className="w-1/2 ps-20 mb-24 relative">
        <img src={under} alt="" className=" size-fit object-cover" />
        <img
          src={above}
          alt=""
          className="absolute top-28 left-48 object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-10 mt-48">
        <h1 className="text-6xl font-normal w-9/12 leading-snug">
          Manage your business like a pro
        </h1>
        <p className="w-7/12 text-xl">
          Capture leads, get reports and insights, automate your business, and
          more from desktop or on the go from your phone with the Wix Owner app.
        </p>
        <p className="w-7/12 text-xl">
          Everything is synced for seamless management experience.
        </p>
        <button className="w-48 hover:bg-indigo-700 bg-black rounded-full transform transition duration-200 ease-in-out text-2xl text-white px-8 py-3">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Manage;
