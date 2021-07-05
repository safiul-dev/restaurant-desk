
export default function RightButton (props) {
    return (
        <button  className="w-full bg-primary rounded h-height14% flex justify-center items-center mt-1">
                <h1 className="text-white uppercase not-italic sm:font-light md:font-light lg:font-semibold xl:font-bold tracking-wide font-sans sm:text-smallFont md:text-tiny lg:text-lg xl:text-xl 2xl:text-2xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center">
                    {props.name}
                </h1>
        </button>
    );
}