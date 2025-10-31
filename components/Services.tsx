import React from "react";

// FIX: Added explicit types for props to resolve TypeScript errors.
const ServiceCard = ({
  icon,
  title,
  children,
  align,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  align: string;
}) => (
  <div
    className={`flex flex-col ${
      align === "right" ? "items-end text-right" : "items-start text-left"
    } space-y-3`}
  >
    <div className="w-16 h-16 bg-brand-orange/10 rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-brand-text">{title}</h3>
    <p className="text-gray-500 max-w-sm">{children}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">
          Our Services
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-text mt-4 mb-16">
          INDIA'S ONLY RESEARCH APP
        </h2>
        <div className="grid md:grid-cols-3 items-center gap-10 md:gap-4">
          <div className="space-y-12 reveal">
            <ServiceCard
              title="Comprehensive Coverage"
              align="right"
              icon={
                <img
                  src="https://placehold.co/40x40/F9A826/white?text=C"
                  alt=""
                  className="rounded"
                />
              }
            >
              Access India’s most comprehensive equity research, curated by our
              analysts focused on microcap to smallcap companies.
            </ServiceCard>
            <ServiceCard
              title="On-Ground Intelligence"
              align="right"
              icon={
                <img
                  src="https://placehold.co/40x40/F9A826/white?text=I"
                  alt=""
                  className="rounded"
                />
              }
            >
              Real-time market updates and recommendations delivered directly on
              your mobile for informed investment decisions anytime, anywhere.
            </ServiceCard>
          </div>

          <div className="reveal">
            <img
              src="/mobile-img.png"
              alt="Finterest App"
              className="max-w-xs mx-auto transform "
            />
          </div>

          <div className="space-y-12 reveal">
            <ServiceCard
              title="Actionable Research"
              align="left"
              icon={
                <img
                  src="https://placehold.co/40x40/F9A826/white?text=A"
                  alt=""
                  className="rounded"
                />
              }
            >
              Explore curated portfolios designed to capture India’s high-growth
              equity opportunities with deep fundamental insights.
            </ServiceCard>
            <ServiceCard
              title="Investor Guidance"
              align="left"
              icon={
                <img
                  src="https://placehold.co/40x40/F9A826/white?text=G"
                  alt=""
                  className="rounded"
                />
              }
            >
              Built on a research-driven philosophy, our app empowers investors
              with ground-level insights, management interactions, and
              data-backed stock recommendations.{" "}
            </ServiceCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
