import SectionTitle from "../components/section-title";
import { CheckIcon } from "lucide-react";

export default function OurPricingSection() {
  const data = [
    {
      title: "Starter Plan",
      description: "Perfect for small business and personal use",
      price: "$19",
      buttonText: "Get Started",
      features: [
        "Create up to 10 free projects",
        "Get 10 AI tasks monthly",
        "Generate simple AI text content",
        "Access a basic chatbot tool",
        "Receive email-based support only",
      ],
    },
    {
      title: "Pro Plan",
      description: "Perfect for medium business and personal use",
      price: "$49",
      mostPopular: true,
      buttonText: "Upgrade Now",
      features: [
        "Enjoy unlimited AI task usage",
        "Integrate API for smooth workflow",
        "Create text and image outputs",
        "Get priority chat and email help",
        "View detailed analytics and reports",
      ],
    },
    {
      title: "Custom Plan",
      description: "Perfect for organizations and personal use",
      price: "$149",
      buttonText: "Contact Sales",
      features: [
        "Build fully customized AI models",
        "Manage teams with shared access",
        "Get a dedicated account manager",
        "Integrate private APIs securely",
        "Guaranteed uptime with SLA support",
      ],
    },
  ];

  return (
    <section id="pricing" className="flex flex-col items-center justify-center">
      <SectionTitle
        title="Our Pricing Plan"
        description="Our pricing plans are affordable and flexible, catering to all budgets. Choose the plan that suits your needs best."
      />
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
        {data.map((item, index) => (
          <div key={index} className="group w-full max-w-80">
            <div
              className={`flex flex-col items-center justify-center rounded-xl border border-brand-dark/20 p-6 text-center transition-all duration-300 group-hover:-translate-y-1 ${
                item.mostPopular ? "bg-brand-dark text-white" : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p
                className={
                  item.mostPopular ? "text-white/80" : "text-brand-dark/70"
                }
              >
                {item.description}
              </p>
              <p className="mt-4 text-2xl font-semibold">
                {item.price}{" "}
                <span
                  className={`text-sm font-normal ${
                    item.mostPopular ? "text-white/80" : "text-brand-dark/70"
                  }`}
                >
                  /month
                </span>
              </p>
              <button
                className={`mt-4 w-full rounded-lg py-2.5 font-medium transition ${
                  item.mostPopular
                    ? "bg-brand text-brand-dark hover:opacity-90"
                    : "bg-brand-dark text-white hover:opacity-90"
                }`}
              >
                {item.buttonText}
              </button>
            </div>
            <div className="mt-2 flex flex-col">
              {item.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 border-b border-brand-dark/15 py-2.5 text-brand-dark"
                >
                  <div className="rounded-full bg-brand-dark p-1">
                    <CheckIcon
                      className="size-3 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
