function WereHere() {
  return (
    <div className="bg-[#f3efe5] text-center space-y-20 w-full mt-28 pt-28">
      <div>
        <h1 className="text-black leading-tight text-7xl">
          We’re here for you
        </h1>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="max-w-xs text-start border-t border-black">
          <h2 className="text-xl font-bold pt-5">Get answers</h2>
          <p className="mt-5 mb-5 text-black">
            Watch tutorials and read detailed articles in the Wix Help Center.
          </p>
          <a
            href="#"
            className="text-black text-md font-semibold border-b-2 border-black pb-1 w-3/12 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
          >
            Go to Help Center →
          </a>
        </div>
        <div className="max-w-xs text-start border-t border-black">
          <h2 className="text-xl font-bold pt-5">Contact us</h2>
          <p className="mt-5 mb-5 text-black">
            Get support by chat or schedule a call with a Customer Care Expert.
          </p>
          <a
            href="#"
            className="text-black text-md font-semibold border-b-2 border-black pb-1 w-3/12 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
          >
            Chat with Us →
          </a>
        </div>
        <div className="max-w-xs text-start border-t border-black">
          <h2 className="text-xl font-bold pt-5">Hire a pro</h2>
          <p className="mt-5 mb-5 text-black">
            Get help at any stage—from site creation to online growth.
          </p>
          <a
            href="#"
            className="text-black text-md font-semibold border-b-2 border-black pb-1 w-3/12 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
          >
            Browse All Services →
          </a>
        </div>
      </div>
    </div>
  );
}

export default WereHere;
