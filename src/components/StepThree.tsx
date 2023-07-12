import { useFormInfo } from "../hooks/useFormInfo";
const addOnOptions = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    pricePerPeriod: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    pricePerPeriod: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    pricePerPeriod: {
      monthly: 2,
      yearly: 20,
    },
  },
];

export default function StepThree() {
  const { addOns, setAddOns, billingPeriod, setStep, step } = useFormInfo();

  const handleAddOns = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLDivElement;

    const name = target.getAttribute("id");

    const selectedAddOn = addOnOptions.find((option) => option.name == name);

    if (!selectedAddOn) {
      return;
    }

    if (!addOns.includes(selectedAddOn)) {
      setAddOns((prev) => [...prev, selectedAddOn]);
    } else {
      const newAddOnsArr = addOns.filter(
        (addOn) => addOn.name !== selectedAddOn.name
      );

      setAddOns([...newAddOnsArr]);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStep(step + 1);
  };
  return (
    <form onSubmit={onSubmit} id="step-3">
      <h1 className="text-xl font-bold text-marine-blue mb-1">Pick add-ons</h1>
      <p className="text-cool-gray mb-4 max-w-[270px]">
        Add-ons help enhance your gaming experience.
      </p>

      <div>
        {addOnOptions.map((addOn, index) => {
          return (
            <div
              onClick={handleAddOns}
              id={addOn.name}
              className={`p-2 rounded-lg flex items-center justify-between mb-3 border ${
                addOns.includes(addOn)
                  ? "border-purplish-blue"
                  : "border-light-gray"
              }`}
              key={index}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`h-5 w-5 rounded bg-purplish-blue text-xl flex items-center justify-center text-white border ${
                    addOns.includes(addOn)
                      ? "bg-purplish-blue border-transparent"
                      : "border-light-gray bg-transparent"
                  } `}
                >
                  {addOns.includes(addOn) && (
                    <img
                      src="/images/icon-checkmark.svg"
                      alt="checkmark icon"
                    />
                  )}
                </div>

                <div>
                  <h2 className="font-semibold text-marine-blue text-sm  ">
                    {addOn.name}
                  </h2>
                  <p className="text-xs text-cool-gray">{addOn.description}</p>
                </div>
              </div>

              <span className="text-purplish-blue text-xs">
                +$
                {billingPeriod == "monthly"
                  ? `${addOn.pricePerPeriod.monthly}/mo`
                  : `${addOn.pricePerPeriod.yearly}/yr`}
              </span>
            </div>
          );
        })}
      </div>
    </form>
  );
}
