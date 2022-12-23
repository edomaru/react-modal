import { useState } from "react";
import Modal from "./components/modal/Modal"

function App() {
  const [openModal, setOpenModal] = useState(false)
  
  return (
    <>
      <h1>React Modal Tutorial</h1>
      <button onClick={() => setOpenModal(!openModal)}>Show modal</button>

      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Modal Header</Modal.Header>
        <Modal.Body>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum ea facere commodi neque nihil ratione eaque maiores quam odit laboriosam totam placeat veniam at, optio cupiditate autem labore! Reiciendis.</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.DismissButton>Close</Modal.DismissButton>
          <button>Save Changes</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
