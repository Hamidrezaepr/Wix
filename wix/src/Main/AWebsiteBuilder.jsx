function AWebsiteBuilder() {
  return (
    <div className="bg-[#f3efe5] pt-28 flex flex-col items-center w-full">
      <div className="flex items-center justify-center flex-col w-8/12 mb-28">
        <div>
          <h1 className="text-6xl w-9/12">
            A website builder engineered for growth
          </h1>
        </div>
        <div className="flex flex-wrap mt-16">
          <div className="flex flex-col w-1/4 me-20 mb-10">
            <h1 className="font-bold text-xl">Faster loading</h1>
            <p className="pt-2">Wix is designed for performance so your site loads faster.</p>
          </div>
          <div className="flex flex-col w-1/4 me-20 mb-10">
            <h1 className="font-bold text-xl">Built with SEO in mind</h1>
            <p className="pt-2">
              Get the SEO capabilities you need to optimize your site for search
              visibility.
            </p>
          </div>
          <div className="flex flex-col w-1/4 me-20 mb-10">
            <h1 className="font-bold text-xl">Enterprise-grade security</h1>
            <p className="pt-2">We keep your site and visitors’ data protected, 24/7.</p>
          </div>
          <div className="flex flex-col w-1/4 me-20 mb-10">
            <h1 className="font-bold text-xl">Resilient infrastructure</h1>
            <p className="pt-2">
              Multi-cloud hosting ensures 99.9% uptime, even during traffic
              spikes.
            </p>
          </div>
          <div className="flex flex-col w-1/4 me-20 mb-10">
            <h1 className="font-bold text-xl">Accessible for everyone</h1>
            <p className="pt-2">
              Make your own website inclusive with built-in accessibility tools.
            </p>
          </div>
        </div>
        <div className="w-full items-start">
          <button className="w-48 hover:bg-indigo-700 bg-black rounded-full transform transition duration-200 ease-in-out text-2xl text-white px-8 py-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default AWebsiteBuilder;
