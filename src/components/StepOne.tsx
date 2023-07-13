import { useState, useEffect } from "react";

import { useFormInfo } from "../hooks/useFormInfo";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input/input";

interface FormFields {
  name: string;
  email: string;
  phone: string;
}

export default function StepOne() {
  const {
    name,
    email,
    phoneNumber,
    setStep,
    step,
    setEmail,
    setName,
    setPhoneNumber,
  } = useFormInfo();

  const [number, setNumber] = useState(phoneNumber);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<FormFields>({
    defaultValues: { name, email, phone: phoneNumber },
  });

  const submit: SubmitHandler<FormFields> = (data) => {
    console.log(data);

    setName(data.name);
    setEmail(data.email);
    setPhoneNumber(data.phone);

    setStep(step + 1);
  };

  useEffect(() => {
    setValue("phone", number);
  }, [number]);

  return (
    <form onSubmit={handleSubmit(submit)} id="step-1">
      <h1 className="text-xl font-bold text-marine-blue mb-1 md:text-3xl">
        Personal info
      </h1>
      <p className="text-cool-gray mb-4 max-w-[250px] md:max-w-none">
        Please provide your name, email address and phone number.
      </p>

      <div className="mb-4 relative md:mb-6">
        <label
          className="block text-marine-blue text-xs md:mb-1"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className={`border  rounded-md w-full h-9 px-3 placeholder:text-cool-gray text-marine-blue font-medium  placeholder:font-medium text-sm outline-none  focus:border-marine-blue${
            errors.name ? "border-rose-500" : " border-light-gray"
          }`}
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          {...register("name", { required: true, minLength: 3 })}
        />

        {errors.name?.type == "minLength" ? (
          <p className="absolute text-xs text-rose-500 bg-white">
            Name must be 3 or more characters long
          </p>
        ) : errors.name?.type == "required" ? (
          <p className="absolute text-xs text-rose-500 bg-white">
            Name is required
          </p>
        ) : null}
      </div>
      <div className="mb-4 relative md:mb-6">
        <label
          className="block text-marine-blue text-xs md:mb-1"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className={`border  rounded-md w-full h-9 px-3 placeholder:text-cool-gray text-marine-blue font-medium placeholder:font-medium text-sm outline-none  focus:border-marine-blue${
            errors.email ? "border-rose-500" : " border-light-gray"
          }`}
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email", { required: true })}
        />

        {errors.email && (
          <p className="absolute text-xs text-rose-500 bg-white">
            Email Addreess is required
          </p>
        )}
      </div>
      <div className="mb-4 relative md:mb-6">
        <label
          className="block text-marine-blue text-xs md:mb-1"
          htmlFor="phone"
        >
          Phone Number
        </label>

        <Controller
          control={control}
          name="phone"
          rules={{ required: true }}
          render={({ field }) => (
            <PhoneInput
              className={`border  rounded-md w-full h-9 px-3 placeholder:text-cool-gray text-marine-blue font-medium placeholder:font-medium text-sm  outline-none focus:border-marine-blue ${
                errors.phone ? "border-rose-500" : " border-light-gray"
              }`}
              placeholder="e.g. (234) 567 8910"
              country="US"
              {...field}
              onChange={setNumber as (value?: any | undefined) => void}
            />
          )}
        />

        {errors.phone && (
          <p className="absolute text-xs text-rose-500 bg-white">
            Phone Number is required
          </p>
        )}
      </div>
    </form>
  );
}
