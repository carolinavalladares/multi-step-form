import { useEffect, useState } from "react";
import { planType } from "../../types";
import { useFormInfo } from "../hooks/useFormInfo";

const planOptions = {
  monthly: [
    {
      name: "arcade",
      pricePerPeriod: 9,
      tag: "",
      icon: "images/icon-arcade.svg",
    },
    {
      name: "advanced",
      pricePerPeriod: 12,
      tag: "",
      icon: "images/icon-advanced.svg",
    },
    {
      name: "pro",
      pricePerPeriod: 15,
      tag: "",
      icon: "images/icon-pro.svg",
    },
  ],
  yearly: [
    {
      name: "arcade",
      pricePerPeriod: 90,
      tag: "2 months free",
      icon: "images/icon-arcade.svg",
    },
    {
      name: "advanced",
      pricePerPeriod: 120,
      tag: "2 months free",
      icon: "images/icon-advanced.svg",
    },
    {
      name: "pro",
      pricePerPeriod: 150,
      tag: "2 months free",
      icon: "images/icon-pro.svg",
    },
  ],
};

type PlanGroupType = planType[];

export default function StepTwo() {
  const { billingPeriod, setBillingPeriod, plan, setPlan, setStep, step } =
    useFormInfo();
  const [planGroup, setPlanGroup] = useState<PlanGroupType>(
    planOptions.monthly
  );

  useEffect(() => {
    if (billingPeriod == "monthly") {
      setPlanGroup(planOptions.monthly);
    } else {
      setPlanGroup(planOptions.yearly);
    }
  }, [billingPeriod]);

  useEffect(() => {
    const selectedPlan = planGroup.find((item) => item.name == plan.name);

    selectedPlan && setPlan(selectedPlan);
  }, [planGroup]);

  const handleChangeBillingPeriod = () => {
    if (billingPeriod == "monthly") {
      setBillingPeriod("yearly");
    } else {
      setBillingPeriod("monthly");
    }
  };

  const handleChangePlan = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.currentTarget as HTMLDivElement;

    const name = target.getAttribute("id") as string;

    const selectedPlan = planGroup.find((plan) => plan.name == name);

    selectedPlan && setPlan(selectedPlan);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStep(step + 1);
  };

  return (
    <form id="step-2" onSubmit={onSubmit}>
      <h1 className="text-xl font-bold text-marine-blue mb-1">
        Select your plan
      </h1>
      <p className="text-cool-gray mb-4 max-w-[250px]">
        You have the option of monthly or yearly billing.
      </p>

      <div className="pb-3">
        {planGroup.map((planOption, index) => {
          return (
            <div
              onClick={handleChangePlan}
              id={planOption.name}
              className={`flex items-center justify-start gap-4 p-3 rounded-lg mb-3 border ${
                plan?.name == planOption.name
                  ? "border-marine-blue"
                  : "border-light-gray"
              }`}
              key={index}
            >
              <div>
                <img
                  src={planOption.icon}
                  alt={`${planOption.name} plan icon`}
                />
              </div>
              <div>
                <h2 className="text-marine-blue font-semibold capitalize">
                  {planOption.name}
                </h2>
                <p className="text-sm text-cool-gray mb-1">
                  ${planOption.pricePerPeriod}/
                  {billingPeriod == "monthly" ? "mo" : "yr"}
                </p>
                {planOption.tag && (
                  <p className="text-xs text-marine-blue">{planOption.tag}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-magnolia flex items-center justify-center gap-4 p-3">
        <span
          className={`text-[13px] font-semibold ${
            billingPeriod == "monthly" ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Monthly
        </span>
        <div
          onClick={handleChangeBillingPeriod}
          className="relative bg-marine-blue w-10 h-5 rounded-full flex items-center"
        >
          <div
            className={`bg-white h-4 w-4 rounded-full relative transition-all duration-300 ${
              billingPeriod == "monthly" ? "left-[2px]" : "left-[22px]"
            }`}
          ></div>
        </div>
        <span
          className={`text-[13px] font-semibold ${
            billingPeriod == "yearly" ? "text-marine-blue" : "text-cool-gray"
          }`}
        >
          Yearly
        </span>
      </div>
    </form>
  );
}
