export interface TableButtonProps {
    title: string;
    capacity: string;
    bg_color: string;
}
 
const TableButton: React.SFC<TableButtonProps> = (props) => {
    return ( 
            <div className=" 2xl:h-40 xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 flex justify-center items-center bg-primary rounded-md hover:shadow-2xl">
                <div>
                    <h1 className="uppercase text-white text-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal tracking-wide">{props.title}</h1>
                    <h1 className="uppercase text-white text-center 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-tiny 2xl:font-medium xl:font-medium lg:font-medium md:font-medium sm:font-normal tracking-wider">Capacity : <span className="uppercase text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal tracking-wide ">{props.capacity}</span> </h1>
                </div>
                
            </div> );
}
 
export default TableButton;