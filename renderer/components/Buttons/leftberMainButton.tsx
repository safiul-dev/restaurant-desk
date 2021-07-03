
export default function LeftberMainButton () {
    return (
            <div className="flex justify-center items-center bg-primary w-leftMainWidth rounded">
                 <div className="mr-2">
                    <div className=" w-4 bg-white h-0.5"></div>
                    <div className=" w-4 bg-white h-0.5 mt-0.5"></div>
                    <div className=" w-4 bg-white h-0.5 mt-0.5"></div>
                 </div>

                 <div>
                        <h1 className="text-white uppercase not-italic sm:font-light md:font-medium lg:font-semibold xl:font-bold tracking-wide font-sans text-leftButtonFontSize sm:text-tiny md:text-base lg:text-lg xl:text-xl text-center">order</h1>
                  </div>
            </div>
    )
}