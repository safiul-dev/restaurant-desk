export default function LeftberButton (props) {
    return (
            <div className="w-full bg-primary rounded h-leftberButtonHeight flex justify-center items-center mt-1">
                    <h1 className="text-white uppercase not-italic font-black sm:font-light md:font-bold tracking-wide font-sans text-leftButtonFontSize sm:text-base md:text-xl text-center leading-7">
                        {props.name}
                    </h1>
            </div>

    )
}