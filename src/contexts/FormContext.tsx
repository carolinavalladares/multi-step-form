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
  updateName: (str: string) => void;
  updateEmail: (str: string) => void;
  updatePhoneNumber: (str: string) => void;
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

  const updateName = (str: string) => {
    setName(str);
  };
  const updateEmail = (str: string) => {
    setEmail(str);
  };
  const updatePhoneNumber = (str: string) => {
    setPhoneNumber(str);
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
        updateName,
        updateEmail,
        updatePhoneNumber,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
