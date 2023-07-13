import { useEffect, useState } from "react";
import { useFormInfo } from "../hooks/useFormInfo";
import ThankYouStep from "./ThankYouStep";

export default function StepFour() {
  const { plan, billingPeriod, addOns, setStep, done } = useFormInfo();
  const [total, setTotal] = useState<number>(0);

  const changeStep = () => {
    setStep(2);
  };

  useEffect(() => {
    let tempTotal = 0;

    tempTotal += plan.pricePerPeriod;

    if (addOns.length > 0) {
      addOns.forEach((addOn) => {
        if (billingPeriod == "monthly") {
          tempTotal += addOn.pricePerPeriod.monthly;
        } else {
          tempTotal += addOn.pricePerPeriod.yearly;
        }
      });
    }

    setTotal(tempTotal);
  }, []);

  return (
    <>
      {done ? (
        <ThankYouStep />
      ) : (
        <form id="step-4">
          <h1 className="text-xl font-bold text-marine-blue mb-1 md:text-3xl">
            Finishing up
          </h1>
          <p className="text-cool-gray mb-4 max-w-[250px] md:max-w-none md:pb-4">
            Double-check everything looks OK before confirming.
          </p>

          <div className="bg-magnolia py-4 px-3 rounded-md md:p-6">
            <div className="flex items-center justify-between pb-3 border-b border-light-gray md:pb-4">
              <div>
                <h2 className="capitalize text-sm text-marine-blue font-semibold leading-none">
                  {plan.name} ({billingPeriod})
                </h2>
                <button
                  onClick={changeStep}
                  className="text-cool-gray text-sm underline"
                >
                  Change
                </button>
              </div>

              <span className="text-marine-blue text-sm font-semibold">
                $
                {`${plan.pricePerPeriod}/${
                  billingPeriod == "monthly" ? "mo" : "yr"
                }`}
              </span>
            </div>

            <div className="pt-3">
              {addOns.length < 1 ? (
                <p className="text-sm text-cool-gray text-center">
                  No add-ons selected
                </p>
              ) : (
                <div>
                  {addOns.map((item, index) => {
                    return (
                      <div
                        className="flex items-center justify-between mb-2 last-of-type:mb-0"
                        key={index}
                      >
                        <span className="text-cool-gray text-sm ">
                          {item.name}
                        </span>
                        <span className="text-marine-blue text-sm ">
                          +$
                          {billingPeriod == "monthly"
                            ? `${item.pricePerPeriod.monthly}/mo`
                            : `${item.pricePerPeriod.yearly}/yr`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="py-4 px-3 flex items-center justify-between">
            <span className="text-cool-gray text-sm ">
              Total (per {billingPeriod == "monthly" ? "month" : "year"})
            </span>

            <span className="text-purplish-blue font-semibold ">
              +${`${total}/${billingPeriod == "monthly" ? "mo" : "yr"}`}
            </span>
          </div>
        </form>
      )}
    </>
  );
}
