import Modal from 'react-modal';
import { useState } from 'react';

export default function LeftberButton (props) {

    const [model, setModel] = useState(false);

    function setModelAsTrue () {
        setModel(true);
    }
    function setModelFalse () {
        
        setModel(false);
        console.log("clicked", model);
    }



    return (
            <button type="button" className="w-full bg-primary rounded h-leftberButtonHeight flex justify-center items-center mt-1" onClick={setModelAsTrue}>
                    <h1 className="text-white uppercase not-italic sm:font-light md:font-light lg:font-semibold xl:font-bold tracking-wide font-sans sm:text-smallFont md:text-tiny lg:text-lg xl:text-xl 2xl:text-2xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center">
                        {props.name}
                    </h1>
                    <Modal isOpen={model}
                        contentLabel="this a Modal"
                        >
                            <button onClick={setModelFalse}>Close</button>
                    </Modal>
            </button>

    )
}