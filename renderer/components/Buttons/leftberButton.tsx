export default function LeftberButton (props) {
    return (
            <button className="w-full bg-primary rounded h-leftberButtonHeight flex justify-center items-center mt-1">
                    <h1 className="text-white uppercase not-italic sm:font-light md:font-medium tracking-wide font-sans text-leftButtonFontSize sm:text-tiny md:text-base text-center leading-7">
                        {props.name}
                    </h1>
            </button>

    )
}