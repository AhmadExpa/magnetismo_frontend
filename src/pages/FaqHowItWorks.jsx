import { useState,useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Magnetismo?",
    answer:
      "Magnetismo is a unique patterned device that attaches to your eyeglasses or sunglasses to help reduce eye strain, alleviate headaches, and improve focus, especially during screen time.",
  },
  {
    question: "How does Magnetismo work?",
    answer:
      "Magnetismo uses specially designed Neodymium magnets to optimize visual comfort by maintaining blood flow and oxygen levels that reduce strain and enhance focus. It works seamlessly with your existing eyewear to promote better eye health.",
  },
  {
    question: "Who can use Magnetismo?",
    answer:
      "Anyone who experiences eye fatigue, headaches from screen use, or wants improved focus can benefit from Magnetismo. It’s ideal for professionals, students, and anyone who spends extended hours on digital screens.",
  },
  {
    question: "Is Magnetismo compatible with all eyeglasses?",
    answer:
      "Magnetismo is designed to be compatible with most eyeglasses and sunglasses. However, if your frames have an unusual shape or size, feel free to contact us for guidance.",
  },
  {
    question: "How do I attach Magnetismo to my glasses?",
    answer:
      "Magnetismo easily clips onto your eyewear without damaging the frame. It is lightweight, secure, and can be adjusted for optimal positioning.",
  },
  {
    question: "Can I wear Magnetismo all day?",
    answer:
      "Yes! Magnetismo is designed for extended wear and comfort. However, if you feel any discomfort, you can adjust its positioning or take short breaks as needed.",
  },
  {
    question: "How do I clean and maintain Magnetismo?",
    answer:
      "Simply wipe it with a soft, dry cloth. Avoid using harsh chemicals or excessive moisture to ensure longevity.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 15-day return policy for items in original condition. If you are not satisfied, you can return or exchange your product. Visit our Return Policy section for more details.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 5-7 business days within the U.S. and 10-15 business days for international orders. Shipping times may vary depending on location.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes! We offer a one-year warranty covering manufacturing defects. If you experience any issues, please contact our support team.",
  },
  {
    question: "How can I contact Magnetismo for support?",
    answer:
      "You can reach us at your email or phone number or through our Contact Us page. We’re happy to assist you!",
  },
];

export default function FaqHowItWorks() {
     useEffect(() => {
            window.scrollTo(0, 0); 
          }, []);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" max-w-[1360px]  mx-auto  bg-gray-100">
      <h2 className="text-4xl font-bold text-[#273771] text-center mb-16">FAQ'S</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-6 md:px-20 px-4 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 bg-gray-100 shadow-md cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
      
    </div>
  );
}
