import React from 'react'
import "./addModal.css"

function AddModal(props) {
  const { isOpen, setSection } = props;

  const handleOpenAddRoute = () => {
    setSection("AddRoute");
  }

  const handleOpenAddProfit = () => {
    setSection("ProfitEvidence");
  }


  return (
    <div className='add-modal-container' style={{ display: isOpen ? "block" : "none"}}>
        <div className='add-modal-content'>
            <p onClick={handleOpenAddRoute}>Add route</p>
            <p onClick={handleOpenAddProfit}>Add profit evidence</p>
            <p>Add putni nalog</p>
        </div>
    </div>
  )
}

export default AddModal