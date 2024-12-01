function HowToCreate() {
  return (
    <section className="w-full bg-[#f3efe5]">
      <div className="flex flex-col gap-5 justify-center items-center mt-24">
        <h1 className="text-6xl font-normal  leading-snug">
          How to create a website for free
        </h1>
        <p className="text-lg">
          Follow these 6 simple steps to create a website today
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <ol className="list-decimal list-inside text-xl space-y-6">
          <li>
            <span className="font-bold">Choose a platform.</span> Sign up for a secure, reliable and powerful
            website builder.
          </li>
          <li>
            <span className="font-bold">Start creating.</span> Choose from 900+ fully-functional templates or use
            the AI website builder.
          </li>
          <li>
            <span className="font-bold">Customize your website.</span> Use the drag-and-drop editor and tailor your
            site to fit your brand.
          </li>
          <li>
            <span className="font-bold">Optimize for search engines.</span> Increase your site’s visibility with a
            suite of built-in SEO tools.
          </li>
          <li>
            <span className="font-bold">Publish your website.</span> Register and connect a custom domain name and
            go live.
          </li>
          <li>
            <span className="font-bold">Promote and drive traffic.</span> Use built-in marketing tools to grow and
            expand your reach.
          </li>
        </ol>
      </div>
      <div className="text-center space-x-10 my-20">
        <button className="w-48 hover:bg-indigo-700 bg-black rounded-full transform transition duration-200 ease-in-out text-2xl text-white px-8 py-3">
          Get Started
        </button>
        <a
            href="#"
            className="text-black  text-xl border-b-2 border-black pb-1 w-3/12 hover:text-blue-500 hover:border-blue-500 hover-underline-thin"
          >
            Learn More →
          </a>
      </div>
    </section>
  );
}

export default HowToCreate;
