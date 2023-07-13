import "./App.css";
import StepFour from "./components/StepFour";

import StepOne from "./components/StepOne";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";
import { useFormInfo } from "./hooks/useFormInfo";

function App() {
  const { step, setStep, setDone, done } = useFormInfo();

  const handlePrevStep = () => {
    if (step <= 1) {
      return;
    }
    return setStep(step - 1);
  };

  return (
    <div className="relative h-screen flex flex-col font-ubunto md:flex-row md:items-start md:justify-center md:h-[500px] md:bg-white md:shadow-lg md:p-3 md:rounded-lg md:max-w-full">
      <div className="sidebar pt-8 pb-28 md:h-full md:rounded-lg md:w-60">
        <nav className="md:flex md:items-start md:justify-start md:h-full md:w-full">
          <ul className="flex items-center justify-center gap-4 md:flex-col  md:w-full md:justify-start md:items-start md:px-4 md:text-white">
            <li className="md-w-full">
              <div
                className="md:flex md:items-center md:justify-start md:gap-4"
                id="1"
              >
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold   ${
                    step == 1
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  1
                </span>

                <div className="hidden md:block">
                  <p className="text-xs text-light-gray uppercase m-0">
                    Step 1
                  </p>
                  <p className="text-sm font-semibold ">YOUR INFO</p>
                </div>
              </div>
            </li>
            <li className="md-w-full">
              <div
                className="md:flex md:items-center md:justify-start md:gap-4"
                id="2"
              >
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold   ${
                    step == 2
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  2
                </span>

                <div className="hidden md:block">
                  <p className="text-xs text-light-gray uppercase m-0">
                    Step 2
                  </p>
                  <p className="text-sm font-semibold ">SELECT PLAN</p>
                </div>
              </div>
            </li>
            <li className="md-w-full">
              <div
                className="md:flex md:items-center md:justify-start md:gap-4"
                id="3"
              >
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold   ${
                    step == 3
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  3
                </span>

                <div className="hidden md:block">
                  <p className="text-xs text-light-gray uppercase m-0">
                    Step 3
                  </p>
                  <p className="text-sm font-semibold ">ADD-ONS</p>
                </div>
              </div>
            </li>
            <li className="md-w-full">
              <div
                className="md:flex md:items-center md:justify-start md:gap-4"
                id="4"
              >
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold   ${
                    step == 4
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  4
                </span>

                <div className="hidden md:block">
                  <p className="text-xs text-light-gray uppercase m-0">
                    Step 4
                  </p>
                  <p className="text-sm font-semibold ">SUMMARY</p>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 bg-magnolia flex flex-col  md:bg-white    md:mx-20 md:h-full md:py-5 md:w-full">
        <div className="flex-1 relative px-4 md:px-0">
          <div className=" bg-white pt-7 pb-5 px-5 rounded-lg -translate-y-[74px] shadow-lg md:translate-y-0 md:shadow-none md:px-0 md:w-[400px]">
            {step == 1 ? (
              <StepOne />
            ) : step == 2 ? (
              <StepTwo />
            ) : step == 3 ? (
              <StepThree />
            ) : step == 4 ? (
              <StepFour />
            ) : null}
          </div>
        </div>

        {/* buttons */}

        {!done && (
          <div
            className={`flex items-center justify-between p-4 bg-white absolute bottom-0 w-full md:static md:p-0`}
          >
            {step > 1 ? (
              <button
                onClick={handlePrevStep}
                className="font-semibold h-8 w-[86px] text-sm rounded-lg text-cool-gray  "
              >
                Go Back
              </button>
            ) : (
              <div></div>
            )}

            {step < 4 && (
              <button
                className="bg-marine-blue text-white font-semibold h-8 w-[86px] text-sm rounded-lg md:h-10 md:w-[96px] "
                type="submit"
                form={`step-${step}`}
                value="update"
              >
                Next Step
              </button>
            )}

            {step >= 4 && (
              <button
                className="bg-purplish-blue text-white  h-8 w-[86px] text-sm rounded-lg md:h-10 md:w-[96px] "
                onClick={() => setDone(true)}
              >
                Confirm
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
