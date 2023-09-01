import './modal.css';

const Content = ({setOpenModal}) => {

    return(
        <div className="modal_content">
            <p>Modal Content</p>
            <button className='btn-style' onClick={() => setOpenModal(false)}>Close button</button>
        </div>
    )
}
export default Content;