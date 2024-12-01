import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomMenu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleButtonClick = (label) => {
    console.log(`${label} clicked!`);
    // Add any navigation or button logic here.
  };

  return (
    <div>
      {/* Accordion 1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleExpansion("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="ps-8">Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="">
            <div className="py-6 ps-8 grid grid-cols-3">
              <div>
                <h4 className="text-slate-500 text-[10px]">CREATION</h4>
                <hr className="my-4 border-t-2 border-gray-300" />
                <ul className="">
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Website design
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Create your site with intuitive design features.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Website Templates
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Choose from 900+ website templates.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      AI Website Builder
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Create your site in no time with AI.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-500 text-[10px]">BUSINESS</h4>
                <hr className="my-4 border-t-2 border-gray-300" />
                <ul>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      eCommerce
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Run & grow your eCommerce website.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Scheduling
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Manage appointments, staff & clients.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Restaurant
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Manage your menus, orders, and reservations.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-[15px]">
                <hr className="my-4 border-t-2 border-gray-300" />
                <ul>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Blog
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Share ideas & grow your traffic.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Portfolio
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Showcase your work with an online portfolio.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-6 ps-8 bg-gray-100">
              <div className="w-11/12">
                <h4 className="text-slate-500 text-[10px]">ESSENTIALS</h4>
                <hr className="my-4 border-t-2 border-gray-300" />
                <ul className="flex justify-between">
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Domain Names
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Buy & register a domain for your website.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Web Hosting
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Get secure & reliable website hosting.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Website Security
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Get enterprise-grade security for your site.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleExpansion("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className="ps-8">Solutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="py-6 ps-8 grid grid-cols-3">
            <div>
              <h4 className="text-slate-500 text-[10px]">MANAGEMENT</h4>
              <hr className="my-4 border-t-2 border-gray-300" />
              <ul>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    Payment solutions
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Accept & manage payments online.
                    </p>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    Mobile app
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Run your business on the go from your mobile.
                    </p>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    All business features
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Explore all business management features.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-[15px]">
              <hr className="my-4 border-t-2 border-gray-300" />
              <ul>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    CRM system
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Build & manage customer relationships.
                    </p>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    Website analytics
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Get reports with actionable data & insights.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-500 text-[10px]">GROWTH</h4>
              <hr className="my-4 border-t-2 border-gray-300" />
              <ul>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    Email marketing
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Create email marketing campaigns.
                    </p>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    SEO tools
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Optimize your website for search engines.
                    </p>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    All marketing features
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Explore all growth and marketing features.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-6 ps-8 bg-gray-100">
            <div className="w-11/12">
              <h4 className="text-slate-500 text-[10px]">WIX STUDIO</h4>
              <hr className="my-4 border-t-2 border-gray-300" />
              <ul className="flex justify-between">
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    Agencies & freelancers
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Deliver exceptional client websites at scale.
                    </p>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    Developers
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Build sites & apps and offer dev services.
                    </p>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href="#"
                    className="block font-semibold text-[12px] w-32 py-1"
                  >
                    Enterprise
                    <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                      Discover solutions for large-scale businesses.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Accordion 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleExpansion("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography className="ps-8">Resources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div className="py-6 ps-8 grid grid-cols-3">
              <div>
                <h4 className="text-slate-500 text-[10px]">EXPLORE</h4>
                <hr className="my-4 border-t-2 border-gray-300" />
                <ul>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Wix Blog
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Read the latest industry tips and trends.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Wix Learn
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Upskill with on-demand video lessons.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Web design inspiration
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Explore designs by other Wix users.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-500 text-[10px]">SUPPORT</h4>
                <hr className="my-4 border-t-2 border-gray-300" />
                <ul>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Help Center
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Find the answers and support you need.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Hire a professional
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Get expert help with your site & business.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-500 text-[10px]">TOOLS</h4>
                <hr className="my-4 border-t-2 border-gray-300" />
                <ul>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Logo Maker
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Create a custom logo for your brand.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Business Name Generator
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Get name ideas for your business.
                      </p>
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      href="#"
                      className="block font-semibold text-[12px] w-32 py-1"
                    >
                      Free business tools
                      <p className="text-slate-700 leading-snug font-thin text-[10px] py-1">
                        Explore tools to help you run & grow your business.
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-6 ps-8 bg-gray-100">
              <div>
                <h4 className="text-slate-500 text-[10px]">FEATURED ARTICLE</h4>
                <hr className="my-4 border-t-2 border-gray-300" />
                <a className="text-[12px] font-semibold" href="">
                  Learn how to create a website →
                </a>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Non-Dropdown Items */}
      <Accordion onClick={() => handleButtonClick("Pricing")}>
        <AccordionSummary>
          <Typography className="ps-8">Pricing</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion onClick={() => handleButtonClick("Mobile App")}>
        <AccordionSummary>
          <Typography className="ps-8">Mobile App</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion onClick={() => handleButtonClick("Wix Studio")}>
        <AccordionSummary>
          <Typography className="ps-8">Wix Studio</Typography>
        </AccordionSummary>
      </Accordion>

      <Accordion onClick={() => handleButtonClick("Enterprise")}>
        <AccordionSummary>
          <Typography className="ps-8">Enterprise</Typography>
        </AccordionSummary>
      </Accordion>

      {/* Accordion 8 */}
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleExpansion("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8-content"
          id="panel8-header"
        >
          <Typography className="ps-8">Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-cols-3 text-sm justify-center text-center mt-10 mb-48">
            <div className="flex flex-col gap-5 space-y-2">
              <a href="#" className="text-black hover:text-blue-500">
                English
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Deutsch
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Español
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Français
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Italiano
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Nederlands
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Norsk
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Polski
              </a>
            </div>
            <div className="flex flex-col gap-5 space-y-2">
              <a href="#" className="text-black hover:text-blue-500">
                Português
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Русский
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Svenska
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                日本語
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                한국어
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Türkçe
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Dansk
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                हिन्दी
              </a>
            </div>
            <div className="flex flex-col gap-5 space-y-2">
              <a href="#" className="text-black hover:text-blue-500">
                Čeština
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                ไทย
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Українська
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                繁體中文
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Tiếng Việt
              </a>
              <a href="#" className="text-black hover:text-blue-500">
                Bahasa Indonesia
              </a>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
