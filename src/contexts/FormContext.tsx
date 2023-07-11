import { createContext, useState } from "react";
import { planType, billingOptionsType, addonsType } from "../../types";

interface IFormContext {
  step: number;
  updateStep: (next: number) => void;
  name: string;
  email: string;
  phoneNumber: string;
  billingPeriod: billingOptionsType;
  plan: planType | null;
  addOns: addonsType[];
}

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const FormContext = createContext({} as IFormContext);

export default function FormContextProvider({ children }: IProps) {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [billingPeriod, setBillingPeriod] =
    useState<billingOptionsType>("monthly");
  const [plan, setPlan] = useState<planType | null>(null);
  const [addOns, setAddOns] = useState<addonsType[]>([]);

  const updateStep = (next: number) => {
    setStep(next);
  };

  return (
    <FormContext.Provider
      value={{
        name,
        email,
        phoneNumber,
        step,
        updateStep,
        billingPeriod,
        plan,
        addOns,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
