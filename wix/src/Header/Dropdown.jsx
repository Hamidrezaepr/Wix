import { useState, useEffect, useRef } from "react";
import aks from "../assets/22a917_59b1d50700814897907e44537d9eea19~mv2.webp";

function Dropdown() {
  const [openProduct, setOpenProduct] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  const productRef = useRef(null);
  const solutionsRef = useRef(null);
  const resourcesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setOpenProduct(false);
      }
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setOpenSolutions(false);
      }
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target)
      ) {
        setOpenResources(false);
      }
    };

    // Add the event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-none w-8/12 z-40">
        <ul className="flex lg:gap-0 md:gap-0 items-center gap-4 justify-around w-full">
          {/* Product Dropdown */}
          <li
            className={`relative border-b-4 ${
              openProduct ? "border-indigo-700" : "border-transparent"
            }`}
            ref={productRef}
          >
            <button
              onClick={() => setOpenProduct(!openProduct)}
              className="flex items-center text-gray-700 h-14 font-semibold focus:outline-none"
            >
              Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  openProduct ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`fixed flex top-16 left-0 w-full h-auto bg-white shadow-lg z-50 overflow-hidden transition-all duration-200 ease-in-out ${
                openProduct ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              <div className="py-6 px-16 w-8/12 grid grid-cols-3">
                <div>
                  <h4 className="text-slate-500">CREATION</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Website design
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Create your site with intuitive design features.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Website Templates
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Choose from 900+ website templates.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        AI Website Builder
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Create your site in no time with AI.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-slate-500">BUSINESS</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        eCommerce
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Run & grow your eCommerce website.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Scheduling
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Manage appointments, staff & clients.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Restaurant
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Manage your menus, orders, and reservations.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Blog
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Share ideas & grow your traffic.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Portfolio
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Showcase your work with an online portfolio.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-6 px-16 w-4/12 bg-gray-100">
                <div>
                  <h4 className="text-slate-500">ESSENTIALS</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Domain Names
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Buy & register a domain for your website.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Web Hosting
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Get secure & reliable website hosting.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Website Security
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Get enterprise-grade security for your site.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* Solutions Dropdown */}
          <li
            className={`relative border-b-4 ${
              openSolutions ? "border-indigo-700" : "border-transparent"
            }`}
            ref={solutionsRef}
          >
            <button
              onClick={() => setOpenSolutions(!openSolutions)}
              className="flex items-center text-gray-700 h-14 font-semibold focus:outline-none"
            >
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  openSolutions ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`fixed flex top-16 left-0 w-full h-auto bg-white shadow-lg z-50 overflow-hidden transition-all duration-200 ease-in-out ${
                openSolutions ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              <div className="py-6 px-16 w-8/12 grid grid-cols-3">
                <div>
                  <h4 className="text-slate-500">MANAGEMENT</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Payment solutions
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Accept & manage payments online.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Mobile app
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Run your business on the go from your mobile.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        All business features
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Explore all business management features.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        CRM system
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Build & manage customer relationships.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Website analytics
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Get reports with actionable data & insights.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-slate-500">GROWTH</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Email marketing
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Create email marketing campaigns.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        SEO tools
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Optimize your website for search engines.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        All marketing features
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Explore all growth and marketing features.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-6 px-16 w-4/12 bg-gray-100">
                <div>
                  <h4 className="text-slate-500">WIX STUDIO</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Agencies & freelancers
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Deliver exceptional client websites at scale.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Developers
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Build sites & apps and offer dev services.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Enterprise
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Discover solutions for large-scale businesses.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* Resources Dropdown */}
          <li
            className={`relative border-b-4 ${
              openResources ? "border-indigo-700" : "border-transparent"
            }`}
            ref={resourcesRef}
          >
            <button
              onClick={() => setOpenResources(!openResources)}
              className="flex items-center text-gray-700 h-14 font-semibold focus:outline-none"
            >
              Resources
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                  openResources ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`fixed flex top-16 left-0 w-full h-auto bg-white shadow-lg z-50 overflow-hidden transition-all duration-200 ease-in-out ${
                openResources ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transitionProperty: "max-height, opacity" }}
            >
              <div className="py-6 px-16 w-8/12 grid grid-cols-3">
                <div>
                  <h4 className="text-slate-500">EXPLORE</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Wix Blog
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Read the latest industry tips and trends.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Wix Learn
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Upskill with on-demand video lessons.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Web design inspiration
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Explore designs by other Wix users.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-slate-500">SUPPORT</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Help Center
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Find the answers and support you need.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Hire a professional
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Get expert help with your site & business.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-slate-500">TOOLS</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <ul>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Logo Maker
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Create a custom logo for your brand.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Business Name Generator
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Get name ideas for your business.
                        </p>
                      </a>
                    </li>
                    <li className="pt-2">
                      <a
                        href="#"
                        className="block font-semibold text-lg w-52 py-1"
                      >
                        Free business tools
                        <p className="text-slate-700 leading-snug font-thin py-2">
                          Explore tools to help you run & grow your business.
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-6 px-16 w-4/12 bg-gray-100">
                <div>
                  <h4 className="text-slate-500">FEATURED ARTICLE</h4>
                  <hr className="my-4 border-t-2 border-gray-300" />
                  <a className="text-lg font-semibold" href="">
                    Learn how to create a website →
                  </a>
                  <div className="rounded-md pt-8">
                    <img className="rounded-md" src={aks} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>

          {/* Non-Dropdown Items */}
          <li className="pb-1.5">
            <a href="#" className="text-gray-700 h-16 font-semibold">
              Pricing
            </a>
          </li>
          <span className="border-l lg:block border-gray-300 h-5"></span>
          <li className="pb-1.5">
            <a href="#" className="text-gray-700 h-16 font-semibold">
              Wix Studio
            </a>
          </li>
          <li className="pb-1.5">
            <a href="#" className="text-gray-700 h-16 font-semibold">
              Enterprise
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Dropdown;
