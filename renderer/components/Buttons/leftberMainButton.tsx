
export default function LeftberMainButton () {
    return (
            <div className="flex justify-center items-center bg-primary w-leftMainWidth rounded">
                 <div className="mr-2">
                    <div className=" w-4 bg-white h-0.5"></div>
                    <div className=" w-4 bg-white h-0.5 mt-0.5"></div>
                    <div className=" w-4 bg-white h-0.5 mt-0.5"></div>
                 </div>

                 <div>
                        <h1 className="text-white uppercase not-italic md:font-fold font-black md:tracking-normal tracking-wide font-sans md:text-xl text-mainButtonFontSize">order</h1>
                  </div>
            </div>
    )
}