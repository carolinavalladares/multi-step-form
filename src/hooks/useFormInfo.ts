import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useFormInfo = () => {
  const {
    name,
    email,
    phoneNumber,
    step,
    setStep,
    billingPeriod,
    plan,
    addOns,
    setName,
    setEmail,
    setPhoneNumber,
    setPlan,
    setBillingPeriod,
    setAddOns,
  } = useContext(FormContext);

  return {
    name,
    email,
    phoneNumber,
    step,
    setStep,
    billingPeriod,
    plan,
    addOns,
    setName,
    setEmail,
    setPhoneNumber,
    setPlan,
    setBillingPeriod,
    setAddOns,
  };
};
