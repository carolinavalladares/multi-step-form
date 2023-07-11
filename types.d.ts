export type billingOptionsType = "monthly" | "yearly";

export type planType = {
  name: string;
  pricePerPeriod: string;
};

export type addonsType = {
  name: string;
  description: string;
  pricePerPeriod: {
    monthly: string;
    yearly: string;
  };
};
