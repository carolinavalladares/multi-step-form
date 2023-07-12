import { createContext, useState } from "react";
import { planType, billingOptionsType, addonsType } from "../../types";

interface IFormContext {
  step: number;
  name: string;
  email: string;
  phoneNumber: string;
  billingPeriod: billingOptionsType;
  plan: planType;
  addOns: addonsType[];
  done: boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  setPlan: React.Dispatch<React.SetStateAction<planType>>;
  setBillingPeriod: React.Dispatch<React.SetStateAction<billingOptionsType>>;
  setAddOns: React.Dispatch<React.SetStateAction<addonsType[]>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [plan, setPlan] = useState<planType>({
    name: "arcade",
    icon: "/images/icon-arcade.svg",
    tag: "",
    pricePerPeriod: 9,
  });
  const [addOns, setAddOns] = useState<addonsType[]>([]);

  const [done, setDone] = useState(false);

  return (
    <FormContext.Provider
      value={{
        name,
        email,
        phoneNumber,
        step,
        billingPeriod,
        plan,
        addOns,
        setStep,
        setName,
        setEmail,
        setPhoneNumber,
        setPlan,
        setBillingPeriod,
        setAddOns,
        done,
        setDone,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
