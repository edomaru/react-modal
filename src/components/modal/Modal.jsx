import "./Modal.css"

const Modal = ({ children, isOpen, onClose }) => {
    return (isOpen && (
        <div className="react-modal-overlay" onClick={onClose}>
            <div className="react-modal-wrapper" onClick={e => e.stopPropagation()}>
                <div className="react-modal-content">
                    {children}
                    <button type="button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    ))
}

export default Modal