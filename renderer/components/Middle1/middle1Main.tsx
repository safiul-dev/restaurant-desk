import Table from "./Table"
export default function Middle1Main () {
    return (
        <div className="w-full h-full">
            <div className="w-full bg-middle1Bg h-4/5">
                <div className="h-4/5 pt-3 bg-primary w-full rounded-b-middle1BottomRounded shadow-lg">
                    <div className="h-4/5 mx-2 ">
                        <div className="h-full">
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg"></div>
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5"></div>
                            <div className="rounded-sm h-middle1SmallTableCollunmHeight bg-middle1Bg mt-0.5 mb-1"></div>
                            <div className="h-middle1LongTableCollunmHeight bg-middle1Bg rounded-b-3xl rounded">
                                <Table/>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

            <div className="h-4/5">

            </div>
        </div>
    )
}