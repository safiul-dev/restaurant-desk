import React, { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

export default function ModelComponent () {

    const [model, setModel] = useState(false);

    function setModelAsTrue () {
        setModel(true);
    }
    function setModelFalse () {
        setModel(false);
    }
    return (
        <div>
            <button onClick={setModelAsTrue}>OpenModal</button>
            <Link href="/home"> Home</Link>
            <Modal isOpen={model}
             contentLabel="this a Modal"
            >
                    <button onClick={setModelFalse}>close</button>
            </Modal>
        </div>
    )
}