import React from 'react';
import Modal from "react-modal";
import Example from "../../components/Main/Hero/phone";

const AndroidModal = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal} className='modal__btn'>Катталу</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            >

                <i className="fas fa-times closeIcon" onClick={closeModal}/>
                <form>
                    <div className="AndroidModalContact">
                        <div className='modalInput'>
                            <p>Full Name</p>
                            <input type="text" placeholder='Name'/>
                        </div>
                        <div className='modalInput'>
                            <p>Work Email</p>
                            <input type="email" placeholder='Email'/>
                        </div>
                        <div className='modalInput'>
                            <p>Mobile Phone</p>
                            <Example/>
                        </div>
                        <button className='modalBtn'>Отправит</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AndroidModal;