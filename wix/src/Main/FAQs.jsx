import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordionList() {
  const accordionItems = [
    {
      title: "Is it easy to build a website?",
      details:
        "Yes. Wix offers a few different ways to create your own free website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag and drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom.",
    },
    {
      title: "How much does it cost to build a website?",
      details:
        "The cost of building a website varies depending on the features you need and whether you opt to build it yourself with a website builder or pay a developer to build it for you. On a website builder such as Wix, you can build as many websites as you want for free, however, you’ll have to upgrade to a Premium plan to connect a custom domain, accept payments and get advanced business features. The cost of building a website is significantly higher if you don’t opt for an all-inclusive platform like Wix.",
    },
    {
      title: "What types of websites can you build on Wix?",
      details:
        "With our free website creator, you have the freedom to design a site that perfectly fits your needs. You can build business websites for any industry with a whole host of different features. You can sell products with an online store, sell services and take bookings, share your thoughts on a blog, showcase your work with a beautiful portfolio, and much more. Our solutions are built not only for a variety of industries but also for businesses of all sizes, from a personal brand to an enterprise corporation.",
    },
    {
      title: "How do I create a website?",
      details: (
        <>
          <Typography>
            Here’s how to create your own website in 6 steps:
          </Typography>
          <ol
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1.5rem",
            }}
          >
            <li>
              <strong>Plan your website.</strong> First, think about the type of
              site you’re creating and your target audience. With that in mind,
              you can start mapping out the pages you want to incorporate, like
              the “About” and “Contact” pages, perhaps a blog or a photo
              gallery, and a page for products or services.
            </li>
            <li>
              <strong>Build with AI or choose a template.</strong> Chat with our
              AI website builder about your business and preferences to
              instantly get a fully functional and customizable website built
              for you. You can also start by choosing from a variety of
              templates, all professionally designed with the best site
              practices in mind.
            </li>
            <li>
              <strong>Customize your website.</strong> Whether you start with AI
              or a template, you can use our intuitive drag-and-drop editor to
              customize every aspect of your site to match your brand. Your site
              will also be automatically optimized for mobile, but in the
              editor, you have the option to make changes and customize your
              site’s mobile view.
            </li>
            <li>
              <strong>Get a domain name.</strong> When trying to come up with
              the perfect domain name, you can use Wix to search and register
              available names or connect an existing one to your new site.
            </li>
            <li>
              <strong>Optimize for search engines.</strong> Use a suite of
              advanced SEO tools to help you optimize your site and increase
              organic traffic.
            </li>
            <li>
              <strong>Publish and promote your website.</strong> Once you’re
              happy with your site, you’re ready to hit ‘publish’ and start
              gaining traffic. Now’s the time to promote your site with built-in
              marketing tools and streamline your customer management processes
              with a smart CRM system.
            </li>
          </ol>
          <Typography>
            <Typography>
              {`By following these steps, you'll be able to build a powerful online presence that drives business growth.`}
            </Typography>
          </Typography>
        </>
      ),
    },
    {
      title: "Can I create a website without knowing how to code?",
      details:
        "Absolutely. Wix is an intuitive HTML website builder that makes it possible to create a high-quality website without knowing how to code. In the Wix Editor, you can drag and drop any feature you want and customize it to match the look and feel of your site. Of course, you have the option to add advanced functionality with code as well.",
    },
    {
      title: "Should I use a website builder or hire a developer?",
      details:
        "Wix’s no-code website builder is intuitive to use and will cost you significantly less than hiring a developer. However, if you are looking for expert help, you can hire a freelance web developer through the Wix Marketplace at a cost that suits your budget.",
    },
    {
      title: "Does my free website come with hosting?",
      details:
        "When you create a website with Wix, you not only get reliable, scalable multi-cloud web hosting that ensures 99.98% uptime, but also automatic disaster recovery and worldwide CDN coverage. Your site also comes with 2 layers of DDoS protection against potential vulnerabilities. Plus, with 24/7 security monitoring and HTTPS and SSL protection, your website is always safe and secure—giving you peace of mind.",
    },
    {
      title: "How can I make sure my data and my visitors’ data is secure?",
      details:
        "At Wix, we take care of security for you. With every site you get enterprise-grade security. From threat prevention to real-time detection and rapid response, security is fully managed by our dedicated team of experts—24/7. This includes data encryption in transit using HTTPS, TLS 1.2+ and an automatic SSL certificate.",
    },
    {
      title: "How do I choose the best design for my website?",
      details:
        "You can create a free website with Wix that comes with a Wix domain. To instantly look more professional online, get a custom domain name. It adds credibility to your brand and helps visitors find you online. You can start building your brand by using your domain in a custom email address (info@mystunningwebsite.com), your social channels, email marketing campaigns and more. For inspiration use our Business Name Generator.",
    },
    {
      title: "How can I optimize my site for SEO on Wix?",
      details:"All Wix sites are designed with SEO best practices in mind and come with a suite of built-in SEO tools and guidance to give you everything you need to take on SEO confidently. Customize your SEO settings, use AI to generate meta tags and descriptions, get instant homepage indexing and more. In addition, your site comes with an SEO assistant that analyzes your pages and gives recommendations on ways to improve your search performance. You’ll also get key integrations like Google Search Console and Semrush, to help you compete in organic search. Check out this Google case study for more on Wix SEO.",
    },
    {
      title: "Can I use a website builder to create a landing page?",
      details:
        "Yes, you can create any kind of landing page with Wix, including a landing page or one-page website. Explore beautiful HTML landing page templates and get started with the landing page builder.",
    },
    {
      title: "Can I use 3rd party apps with my website?",
      details:
        "Yes, there are hundreds of Wix-made and 3rd party integrations available through your dashboard and the Wix App Market. These apps integrate seamlessly with your site and can help you with website creation, business management, marketing, and so much more. Popular integrations include Google Analytics, Facebook Pixel, and Zapier, just to name a few.",
    },
    {
      title: "How can I design a logo for my website for free?",
      details:
        "You can design your own logo for free with the intuitive Wix Logo Maker. Any logo you create is ready to go in high resolution for digital or print so your brand stays consistent.",
    },
  ];

  return (
    <div>
      {/* Heading above the accordion */}
      <Typography
        component="h1"
        sx={{ fontSize: "3rem", fontWeight: "semibold", mb: 2, mt: 16 }}
      >
        FAQs
      </Typography>

      {/* Accordion List Container */}
      <div style={{ marginBottom: "128px" }}>
        {accordionItems.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                maxWidth: "900px",
                margin: "0 auto",
              }}
            >
              <Typography>{item.details}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
