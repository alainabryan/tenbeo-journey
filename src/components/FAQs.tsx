
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-border">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-xl font-medium">{question}</h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus className="w-5 h-5 text-tenbeo-light" />
          ) : (
            <Plus className="w-5 h-5 text-tenbeo-light" />
          )}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <div className="text-muted-foreground">{answer}</div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does heartbeat authentication work?",
      answer: "Tenbeo's authentication works by capturing your unique cardiac electrical pattern through our sensor. This pattern, determined by your heart's unique size, shape, and orientation in your chest, creates a signature that can't be replicated. When you authenticate, our system matches your live heartbeat with your stored profile in milliseconds."
    },
    {
      question: "Is my heartbeat data stored in the cloud?",
      answer: "No, your biometric data never leaves your device. Tenbeo processes all authentication locally, ensuring your sensitive biometric information remains private and secure. This approach eliminates cloud-based security vulnerabilities while providing maximum privacy."
    },
    {
      question: "What happens if someone tries to spoof my heartbeat?",
      answer: "Your cardiac pattern cannot be spoofed or replicated. Unlike fingerprints that can be copied or facial recognition that can be fooled with photographs, your internal cardiac electrical pattern is impossible to duplicate. Additionally, Tenbeo includes liveness detection to ensure we're measuring a real, living heartbeat."
    },
    {
      question: "Can my heartbeat authentication be used if I'm sick or exercising?",
      answer: "Yes. While your heart rate might change when you're sick, exercising, or stressed, the fundamental electrical pattern of your heart remains constant. Our AI is trained to recognize your unique pattern regardless of heart rate variations, ensuring reliable authentication in any condition."
    },
    {
      question: "How secure is Tenbeo compared to other authentication methods?",
      answer: "Tenbeo offers significantly higher security than traditional methods. Passwords can be stolen, phone-based 2FA can be compromised through SIM swapping, and even other biometrics like fingerprints can be replicated. Your cardiac pattern is internal to your body and impossible to duplicate, making it the most secure biometric available."
    },
    {
      question: "What websites can I use Tenbeo with?",
      answer: "The Tenbeo browser extension works with any website that uses standard authentication systems. For enterprise customers, we offer deeper integration options through our API for seamless single sign-on experiences."
    },
  ];

  return (
    <section id="faq" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(87,19,203,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block text-sm font-medium text-tenbeo-light mb-3 tracking-wider">COMMON QUESTIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about Tenbeo's heartbeat authentication technology.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glassmorphism rounded-xl p-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
