import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export const useFormContext = () => {
  const {
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
  } = useContext(FormContext);

  return {
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
  };
};
