export default function TotalButton (props) {
    return (
        <div className="w-3/5 rounded-full h-full sm:font-light md:font-medium 2xl:font-bold xl:font-semibold xl:text-xl 2xl:text-2xl md:text-base sm:text-tiny bg-white flex items-center justify-center shadow-lg">
            Total Bill: <span className="text-red px-2"> {props.amount} </span> TK 
        </div>
    )
}