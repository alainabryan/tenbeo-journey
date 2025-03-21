
// Central configuration for all pricing plans
export const plans = {
  earlybird: {
    id: "earlybird",
    title: "Early Bird",
    sensorPrice: 80, // 20% off regular price
    monthlyPrice: 5.99,
    description: "Limited time offer with special benefits",
    freeMonths: 6,
    features: [
      "Tenbeo hardware sensor",
      "Browser extension",
      "Unlimited authentications",
      "Email verification",
      "Verify received emails",
      "Send humanity-verified emails",
      "Send and receive encrypted emails"
    ],
    unavailableFeatures: [],
    highlighted: false,
    earlyBird: true,
    spotsLeft: 92,
    totalSpots: 100,
    buttonText: "Pre-order now",
    contactSales: false
  },
  standard: {
    id: "standard",
    title: "Standard",
    sensorPrice: 100,
    monthlyPrice: 3.99,
    description: "Essential security for individual users",
    freeMonths: 1,
    features: [
      "Tenbeo hardware sensor",
      "Browser extension",
      "Unlimited authentications",
      "Email verification",
      "Verify received emails",
      "Send humanity-verified emails"
    ],
    unavailableFeatures: [
      "Send and receive encrypted emails"
    ],
    highlighted: false,
    earlyBird: false,
    buttonText: "Pre-order now",
    contactSales: false
  },
  premium: {
    id: "premium",
    title: "Premium",
    sensorPrice: 100,
    monthlyPrice: 5.99,
    description: "Enhanced security for professionals and power users",
    freeMonths: 3,
    features: [
      "Tenbeo hardware sensor",
      "Browser extension",
      "Unlimited authentications",
      "Email verification",
      "Verify received emails",
      "Send humanity-verified emails",
      "Send and receive encrypted emails"
    ],
    unavailableFeatures: [],
    highlighted: true,
    earlyBird: false,
    buttonText: "Pre-order now",
    contactSales: false
  },
  enterprise: {
    id: "enterprise",
    title: "Enterprise",
    description: "Custom solution for organizations",
    features: [
      "Everything in Premium",
      "Dedicated account manager",
      "Custom integration options",
      "Volume discounts",
      "Priority support"
    ],
    highlighted: false,
    earlyBird: false,
    buttonText: "Contact Sales",
    contactSales: true
  }
};

export type PlanId = keyof typeof plans;
export type Plan = typeof plans[PlanId];
