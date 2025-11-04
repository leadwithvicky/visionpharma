import { Check } from 'lucide-react';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const PricingPlans = ({
  handleFirstNameFocus,
}: {
  handleFirstNameFocus: () => void;
}) => {
  const plans: PricingPlan[] = [
    {
      title: 'Ultimate Learner Plan',
      price: '₹7999',
      features: [
        'Weekly 5 Live Classes for 2 months',
        'Each Class Duration is up to 1h 30min',
        'Last 30min Doubt Sessions',
        'Lifetime LMS Access',
        'Weekly Assessments and Knowledge Checkpoint',
        '1 Mini and 1 Major Project',
        'Skill Development Certificate',
        'Co - Branded Internship Completion Certificate',
        // 'Star Performer Certificate',
      ],
    },
    {
      title: 'Infinity Learner Plan',
      price: '₹11999',
      features: [
        'Weekly 5 Live Classes for 3 months',
        'Each Class Duration is up to 1h 30min',
        'Last 30min Doubt Sessions',
        'Lifetime LMS Access',
        'Weekly Assessments and Knowledge Checkpoint',
        '1 Mini and 1 Major Project',
        'Skill Development Certificate',
        'Co - Branded Internship Completion Certificate',
        // 'Star Performer Certificate',
        'LinkedIn & Resume Building Session',
        'Placement Training Program',
        'Mock Tests & Interviews',
        'Star Performer Certificate ',
        'Letter of Recommendation',
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden md:p-8 sm:p-6 p-4 rounded-md">
      {/* Animated SVG Background */}
      <div
        className="absolute inset-0 w-full h-full opacity-40"
        style={{
          background: `url("https://cdn.svgator.com/images/2022/06/background-svg-image-pattern.svg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          animation: 'moveBackground 30s linear infinite',
        }}
      />

      {/* Add keyframes for background animation */}
      <style jsx global>{`
        @keyframes moveBackground {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>

      {/* Pricing Content */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto relative">
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            className="flex-1 flex flex-col justify-between bg-white/90 backdrop-blur-sm rounded-lg shadow-lg md:p-8 sm:p-6 p-4 hover:shadow-xl transition-all duration-300 border border-border"
          >
            <div>
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
                <p className="text-4xl font-bold">{plan.price}</p>
              </div>
              <div className="border border-b-1 mb-4"></div>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-900 font-semibold">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleFirstNameFocus}
              className="w-full mt-8 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
