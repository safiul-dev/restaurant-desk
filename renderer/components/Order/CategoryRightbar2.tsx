import CategoryMain from './Category/CategoryMain';
import SubCategory from './SubCategory/SubCategory';
import LeftberButton from '../Buttons/leftberButton';
import RightButton from './Buttons/RightButton';

export default function CategoryRightbar2() {
    return(
        <div className=" w-full h-full flex">
        <div className="w-width80% h-height96% mt-2 mr-1">
           <div className="w-full h-4/5">
              <div className="w-full h-height35% bg-secondary mb-2 rounded-md flex justify-center items-center">
                  <div className="w-full flex 2xl:px-4 2xl:py-4 xl:px-4 xl:py-4 lg:px-3 lg:py-3 md:px-2 md:my-2 sm:px-1 sm:py-1">
                     <div className="w-width50% h-full  text-right mr-2">
                        <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont">Total:</h1>
                        <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont">Service Charge:</h1>
                        <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont">Discount:</h1>
                        <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont">Pain Amount:</h1>
                        <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont">Changes:</h1>
                     </div>
                     <div className="w-width50% h-full">
                        <input type="text" value="1200.00" className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont" />
                        <input type="text" value="40.71" className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont" />
                        <input type="text" value="41.71" className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont" />
                        <input type="text" value="1500.00" className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont" />
                        <input type="text" value="143.00" className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-tiny sm:text-smallFont" />
                     </div>
                  </div>
              </div>
              <div className="w-full h-height64% bg-secondary rounded-md ">
                  <div className="w-full h-full 2xl:px-4 2xl:py-4 xl:px-4 xl:py-4 lg:px-3 lg:py-3 md:px-2 md:my-2 sm:px-1 sm:py-1">
                     <div className="bg-white ">

                     </div>
                  </div>
              </div>
           </div>

           <div className="w-full h-1/5">

           </div>
        </div>

        <div className="w-width20% h-full bg-black px-0.5">
           <RightButton name="Cash"/>
        </div>
      </div>
    )
}