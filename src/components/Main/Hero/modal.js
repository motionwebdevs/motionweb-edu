import React from 'react';
import Modal from 'react-modal';
import Example from "../Hero/phone";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const ModalContent = () => {

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
            <button onClick={openModal} className='modal__btn'>Малымат алуу</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <i className="fas fa-times closeIcon" onClick={closeModal}/>
                <form>
                    <div className="modal__contact">
                        <div className='modal__input'>
                            <p>Full Name</p>
                            <input type="text" placeholder='Name'/>
                        </div>
                        <div className='modal__input'>
                            <p>Work Email</p>
                            <input type="email" placeholder='Email'/>
                        </div>
                        <div className='modal__input'>
                            <p>Mobile Phone</p>
                            <Example/>
                        </div>
                        <button>Байланыш</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default ModalContent;