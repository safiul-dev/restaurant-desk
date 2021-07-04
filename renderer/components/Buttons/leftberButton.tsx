import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#__next');

export default function LeftberButton (props) {

    const [modalOpen,setModalOpen] = useState(false)
    const isClicked = ()=>{
        setModalOpen(props.clicked)
        console.log(props.name,modalOpen)
    };

    return (
            <button type="button" className="w-full bg-primary rounded h-leftberButtonHeight flex justify-center items-center mt-1" onClick={isClicked}>
                    <h1 className="text-white uppercase not-italic sm:font-light md:font-light lg:font-semibold xl:font-bold tracking-wide font-sans sm:text-smallFont md:text-tiny lg:text-lg xl:text-xl 2xl:text-2xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center">
                        {props.name}
                    </h1>
                    <Modal
                    isModel={modalOpen}
                    style={{ overlay: 'gray', content: {}} }
                    contentLabel="This is Modal"
                    >
                    </Modal>
            </button>

    )
}