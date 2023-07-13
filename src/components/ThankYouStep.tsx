export default function ThankYouStep() {
  return (
    <div className="flex items-center justify-center flex-col h-[350px]">
      <div className="mb-6">
        <img
          className="w-12 md:w-16"
          src="/images/icon-thank-you.svg"
          alt="thank you icon"
        />
      </div>

      <div>
        <h1 className="text-center text-xl text-marine-blue font-semibold mb-2 md:text-3xl">
          Thank you!
        </h1>

        <p className="text-center text-cool-gray ">
          Thanks for confirming your subscription!
        </p>
        <p className="text-center text-cool-gray max-w-[280px] md:max-w-[400px]">
          We hope yeu have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}
