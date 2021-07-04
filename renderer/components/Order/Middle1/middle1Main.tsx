
import Table from "./Table"
import TotalButton from '../../Buttons/middle1TotalButon';
export default function Middle1Main () {
    return (
        <div className="w-full h-full"> 
            <div className="w-full bg-middle1Bg overflow-y-auto h-4/5">
                <div className="h-4/5 pt-3 bg-primary w-full rounded-b-middle1BottomRounded shadow-lg">
                    <div className="h-4/5 mx-2 ">
                        <div className="h-full">
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg flex justify-between pb-1">
                                <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 mb-1">Ticket #<span className="bg-red rounded-md text-white lg:text-smallFont md:text-smallFont sm:text-extraSmall2">621</span> </div>
                                <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 mb-1">Order #<span className="bg-red rounded-md text-white lg:text-smallFont md:text-smallFont sm:text-extraSmall2">621</span></div>
                                <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 mb-1">Table: <span className="bg-red rounded-md text-white lg:text-smallFont md:text-smallFont sm:text-extraSmall2">621</span></div>
                            </div>
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5 flex justify-between">
                                <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2">Status: <span className="bg-black rounded-md uppercase text-red 2xl:font-semibold xl:font-semibold lg:font-medium md:font-normal sm:font-light">uppaid</span></div>
                                <div className="2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2 pr-2">New: <span className="text-primary">Running Order</span></div>
                            </div>
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5 mb-1 2xl:text-lg xl:text-lg lg:text-smallFont md:text-smallFont sm:text-extraSmall2">Dept: Dine In</div>
                            <div className="w-full h-middle1LongTableCollunmHeight bg-middle1Bg rounded-b-3xl rounded">
                                <Table/>
                            </div>

                            <div className=" mt-1 pl-2 sm:px-4 text-white flex justify-between sm:text-extraSmall2 md:text-smallFont lg:text-smallFont xl:text-tiny">
                                <div>Number Of Guests: 01</div>
                                <div className="mr-5 text-right">
                                    <div>Distink Menu Items: 03</div>
                                    <div>Number Of Ordered Items: 04</div>
                                </div>
                            </div>
                        </div>

                            <div className="2xl:mt-14 xl:mt-12 lg:mt-11 md:mt-10 sm:mt-7 w-full flex justify-center h-middle1MainAmountHeight">
                            <TotalButton amount="2177.00" />
                            </div>
                        
                    </div>

                   
                </div>

                    <div className="xl:mt-16 lg:mt-10 md:mt-8 sm:mt-6 flex justify-between font-normal sm:text-extraSmall2 md:text-smallFont lg:text-smallFont xl:text-tiny mx-3 ">
                        <div>Tecket Opening: 04:30 PM (10 min.)</div>
                        <div>Lat Order: 03:30 PM (60 min.)</div>
                    </div>
            </div>

            <div className="h-height20% w-full flex justify-between xl:mt-2 lg:mt-3 md:mt-2 sm:mt-1">
                <button className="uppercase rounded-lg bg-middle1Bg h-middle1BottomButtonHeight w-width45% flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal text-buttomButtonDarkLight">
                    Setteld
                </button>
                <button className="uppercase rounded-lg bg-red h-middle1BottomButtonHeight w-width45% flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal text-white">
                    Submited
                </button>
            </div>
       
        </div>
    )
}