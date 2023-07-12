import "./App.css";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { useFormInfo } from "./hooks/useFormInfo";

function App() {
  const { step, setStep } = useFormInfo();

  const handlePrevStep = () => {
    if (step <= 1) {
      return;
    }
    return setStep(step - 1);
  };

  return (
    <div className="h-screen flex flex-col font-ubunto">
      <div className="sidebar pt-8 pb-28">
        <nav>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <div className="cursor-pointer" id="1">
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold ${
                    step == 1
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  1
                </span>
              </div>
            </li>
            <li>
              <div className="cursor-pointer" id="2">
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold ${
                    step == 2
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  2
                </span>
              </div>
            </li>
            <li>
              <div className="cursor-pointer" id="3">
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold ${
                    step == 3
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  3
                </span>
              </div>
            </li>
            <li>
              <div className="cursor-pointer" id="4">
                <span
                  className={`h-7 w-7 rounded-full flex items-center justify-center border  text-xs leading-none font-bold ${
                    step == 4
                      ? "bg-light-blue border-light-blue text-marine-blue"
                      : "text-white border-white "
                  }`}
                >
                  4
                </span>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex-1 bg-magnolia flex flex-col">
        <div className="flex-1 relative px-4 ">
          <div className=" bg-white w-full pt-7 pb-5 px-5 rounded-lg -translate-y-[74px]">
            {step == 1 ? <StepOne /> : step == 2 ? <StepTwo /> : null}
          </div>
        </div>

        {/* buttons */}
        <div
          className={`flex items-center justify-between p-4 bg-white max-md:absolute max-md:bottom-0 max-md:w-full`}
        >
          {step > 1 ? (
            <button
              onClick={handlePrevStep}
              className="font-semibold h-8 w-[86px] text-sm rounded-[4px] text-cool-gray"
            >
              Go Back
            </button>
          ) : (
            <div></div>
          )}

          <button
            className="bg-marine-blue text-white font-semibold h-8 w-[86px] text-sm rounded-[4px]"
            type="submit"
            form={`step-${step}`}
            value="update"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
