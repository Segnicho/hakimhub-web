const HospitalLoading: React.FC = () => {
  return (
    <div data-testid="loading-hospital">
      <div className="animate-pulse bg-slate-100 p-2 mb-16">
        <div className="flex flex-wrap rounded-lg shadow-lg">
          <div className="w-full md:w-1/3 bg-slate-100 rounded-lg shadow-lg">
            <div className="w-full h-[150px] bg-slate-200">
              <div className="relative w-full h-full"></div>
            </div>
            <div className="bg-slate-200 rounded-full flex justify-center object-cover -mt-[60px] mx-auto relative w-[100px] h-[100px]"></div>
            <div className="flex flex-wrap m-2">
              <div className="w-1/2 md:block justify-center p-2">
                <div className="text-xl font-bold max-lg:text-md animate-pulse h-4 w-full bg-slate-200">
                  <div className="text-primary font-extrabold text-2xl max-lg:text-xl -mt-3"></div>
                  <div></div>
                </div>
                <div className=" animate-pulse h-4 w-full"></div>
                <div className="text-sm text-primary-text font-light max-xl:text-xs animate-pulse h-4 w-full bg-slate-200">
                  <div></div>
                </div>
              </div>
              <div className="w-1/2 md:block justify-center p-2">
                <div className="text-xl font-bold max-lg:text-md animate-pulse h-4 w-full bg-slate-200">
                  <div className="text-primary font-extrabold text-2xl max-lg:text-xl -mt-3"></div>
                  <div></div>
                </div>
                <div className=" animate-pulse h-4 w-full"></div>
                <div className="text-sm text-primary-text font-light max-xl:text-xs animate-pulse h-4 w-full bg-slate-200">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-5 w-full md:w-2/3 p-2">
            <div className="font-extrabold text-3xl h-2 w-full bg-slate-200"></div>
            <div className="h-4"></div>
            <div className="text-md pb-6 font-light text-primary-text h-2 w-full bg-slate-200">
              <div></div>
            </div>
            <div className="text-xl font-bold hidden md:block h-4">
              <div></div>
            </div>
            <div className="flex flex-wrap">
              <div className="pt-6 max-lg:pt-0 h-32 rounded-lg bg-slate-200 m-2 w-1/4"></div>
              <div className="pt-6 max-lg:pt-0 h-32 rounded-lg bg-slate-200 m-2 w-1/4"></div>
              <div className="pt-6 max-lg:pt-0 h-32 rounded-lg bg-slate-200 m-2 w-1/4"></div>
              
            </div>
            <div className="h-4"></div>
            <div className="rounded-lg h-4 w-20 bg-slate-200 ml-4 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalLoading;
