export default function TotalButton (props) {
    return (
        <div className="w-3/5 rounded-full h-12 font-semibold text-xl bg-white flex items-center justify-center shadow-lg">
            Total Bill: <span className="text-red px-2"> {props.amount} </span> TK 
        </div>
    )
}