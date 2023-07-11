import { useFormContext } from "../hooks/useFormContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { PatternFormat } from "react-number-format";

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
    updateStep,
    step,
    updateEmail,
    updateName,
    updatePhoneNumber,
  } = useFormContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: { name, email, phone: phoneNumber },
  });

  const submit: SubmitHandler<FormFields> = (data) => {
    console.log(data);

    updateName(data.name);
    updateEmail(data.email);
    updatePhoneNumber(data.phone);

    updateStep(step + 1);
  };

  return (
    <form onSubmit={handleSubmit(submit)} id="step-1">
      <h1 className="text-xl font-bold text-marine-blue mb-1">Personal info</h1>
      <p className="text-cool-gray mb-4 max-w-[250px]">
        Please provide your name, email address and phone number.
      </p>

      <div className="mb-4 relative">
        <label className="block text-marine-blue text-xs" htmlFor="name">
          Name
        </label>
        <input
          className={`border  rounded-sm w-full h-9 px-3 text-cool-gray placeholder:font-normal text-sm ${
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
      <div className="mb-4 relative">
        <label className="block text-marine-blue text-xs" htmlFor="email">
          Email Address
        </label>
        <input
          className={`border  rounded-sm w-full h-9 px-3 text-cool-gray placeholder:font-normal text-sm ${
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
      <div className="mb-4 relative">
        <label className="block text-marine-blue text-xs" htmlFor="phone">
          Phone Number
        </label>
        <input
          className={`border  rounded-sm w-full h-9 px-3 text-cool-gray placeholder:font-normal text-sm ${
            errors.phone ? "border-rose-500" : " border-light-gray"
          }`}
          id="phone"
          placeholder="e.g. +1 234 567 890"
          {...register("phone", { required: true })}
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
