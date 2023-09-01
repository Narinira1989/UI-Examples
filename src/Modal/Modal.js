import './modal.css';

const Modal = ( {setOpenModal, children} ) => {

const closeModal = e => {
    if(e.target.classList.contains("overlay")) {
        setOpenModal(false)
    }
}

    return (
        <div className="modal">
            <div className="overlay" onClick={closeModal}>
                {children}
            </div>
        </div>
    )
}
export default Modal;