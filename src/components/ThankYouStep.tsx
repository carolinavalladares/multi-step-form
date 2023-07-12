export default function ThankYouStep() {
  return (
    <div className="flex items-center justify-center flex-col h-[350px]">
      <div className="mb-6">
        <img
          className="w-12"
          src="/images/icon-thank-you.svg"
          alt="thank you icon"
        />
      </div>

      <div>
        <h1 className="text-center text-xl text-marine-blue font-semibold mb-2">
          Thank you!
        </h1>

        <p className="text-center text-cool-gray ">
          Thanks for confirming your subscription!
        </p>
        <p className="text-center text-cool-gray max-md:max-w-[280px]">
          We hope yeu have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
