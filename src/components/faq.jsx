import { FaqDropodown } from "./faq/faq-dropdown";
import { Section } from "./section";

const faqs = [
  {
    question: "What’s included in the website package?",
    answer:
      "You’ll get a fully built, multi-page website that is search-engine optimized and mobile friendly. All websites accept appointments and are ecommerce-enabled so you can take bookings and sell products immediately with 0 commissions. You also get unlimited hosting, a custom domain name and pro email inbox, along with our easy-to-use website editor.",
  },

  {
    question: "Are hosting and domain included? Can I use my own domain?",
    answer:
      "Unlimited hosting, tech maintenance, a custom domain and an email inbox are included. If you already have a domain, you are able to connect it to your Walton website at no additional cost.",
  },
  {
    question: "Once launched, can I still edit the website myself?",
    answer:
      "Absolutely! You can use our Website Editor once your website is ready. It is simple to use from any device and requires no tech skills. You can also ask our team to make any changes for you for the first 30 days after your website is launched.",
  },
  {
    question: "Are Walton websites secure?",
    answer:
      "100%. In 7 years, having served over 700,000 customers, we never had a single security breach or cyber attack. All our data is stored on AWS (Amazon Web Services), one of the safest providers in the market. Plus, all websites come with an SSL certificate, ensuring they are secure.",
  },
];

export function Faq() {
  return (
    <Section
      title="Most common questions we get"
      description="read or ask us a question"
    >
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FaqDropodown faq={faq} key={index} />
        ))}
      </div>
    </Section>
  );
}
