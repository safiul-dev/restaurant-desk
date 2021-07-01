import TotalButton from "../Buttons/middle1TotalButon"
import Table from "./Table"
export default function Middle1Main () {
    return (
        <div className="w-full h-full"> 
            <div className="w-full bg-middle1Bg overflow-y-auto h-4/5">
                <div className="h-4/5 pt-3 bg-primary w-full rounded-b-middle1BottomRounded shadow-lg">
                    <div className="h-4/5 mx-2 ">
                        <div className="h-full">
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg flex justify-between pb-1">
                                <div>Ticket <span className=" text-lg font-extralight">#</span><span className="bg-red rounded-md text-white">621</span> </div>
                                <div>Order <span className=" text-lg font-extralight">#</span><span className="bg-red rounded-md text-white">621</span></div>
                                <div>Table: <span className="bg-red rounded-md text-white">621</span></div>
                            </div>
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5 flex justify-between">
                                <div>Status: <span className="bg-black rounded-md uppercase text-red font-semibold">uppaid</span></div>
                                <div className="pr-2">New: <span className="text-primary">Running Order</span></div>
                            </div>
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5 mb-1">Dept: Dine In</div>
                            <div className="w-full h-middle1LongTableCollunmHeight bg-middle1Bg rounded-b-3xl rounded">
                                <Table/>
                            </div>

                            <div className="mt-1 pl-2 text-white flex justify-between text-tiny">
                                <div>Number Of Guests: 01</div>
                                <div className="mr-5 text-right">
                                    <div>Distink Menu Items: 03</div>
                                    <div>Number Of Ordered Items: 04</div>
                                </div>
                            </div>
                        </div>

                            <div className="mt-14 w-full flex justify-center">
                            <TotalButton amount="2177.00" />
                            </div>
                        
                    </div>

                   
                </div>

                    <div className="mt-16 flex justify-between font-normal text-tiny mx-3 ">
                        <div>Tecket Opening: 04:30 PM (10 min.)</div>
                        <div>Lat Order: 03:30 PM (60 min.)</div>
                    </div>
            </div>

            <div className="h-height20% w-full flex justify-between mt-4">
                <button className="uppercase rounded-lg bg-middle1Bg h-28 w-width45% flex justify-center items-center text-2xl font-black text-buttomButtonDarkLight">
                    Setteld
                </button>
                <button className="uppercase rounded-lg bg-red h-28 w-width45% flex justify-center items-center text-2xl font-black text-white">
                    Submited
                </button>
            </div>
       
        </div>
    )
}