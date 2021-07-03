export default function LeftberButton (props) {
    return (
            <button className="w-full bg-primary rounded h-leftberButtonHeight flex justify-center items-center mt-1">
                    <h1 className="text-white uppercase not-italic sm:font-light md:font-medium lg:font-semibold xl:font-bold tracking-wide font-sans text-leftButtonFontSize sm:text-tiny md:text-base lg:text-lg xl:text-xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center">
                        {props.name}
                    </h1>
            </button>

    )
}