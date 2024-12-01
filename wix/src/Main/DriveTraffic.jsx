import Summer from "../assets/a261d7_cca4bc2b19b949da89d092addd44511f~mv2.webp";

function DriveTraffic() {
  return (
    <>
      <div className="flex">
        <div className="flex justify-center w-6/12 bg-black text-white">
          <div className="flex flex-col w-9/12 gap-10 ms-20 justify-center items-start">
            <h1 className="text-6xl w-9/12 leading-snug">Drive traffic that converts</h1>
            <p className="w-7/12 text-xl">
              Promote your business and reach the right audience:
            </p>
            <ul className="list-disc list-inside text-xl ms-5">
              <li>Complete SEO solution</li>
              <li>Google, FB & IG ads</li>
              <li>AI powered email campaigns</li>
              <li>Social posts and more</li>
            </ul>
            <button className="w-48 hover:bg-slate-300 bg-white rounded-full transform transition duration-200 ease-in-out text-2xl text-black px-8 py-3">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src={Summer} alt="" />
        </div>
      </div>
    </>
  );
}

export default DriveTraffic;
