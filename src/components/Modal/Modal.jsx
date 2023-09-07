import Modal from 'react-modal';

export const ModalComponent = ({ isOpen, onRequestClose, gallery }) => {
    const { largeImageURL, tags } = gallery;
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
            top: '50%', 
            left: '50%', 
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)', 
            padding: '0', 
            border: 'none', 
        },
    };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <img src={largeImageURL} alt={tags} />
      <button onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
};
