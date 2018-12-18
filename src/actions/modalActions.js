// export const OPEN_MODAL = 'OPEN_MODAL',
//   openModal = () => ({ type: OPEN_MODAL });

// export const CLOSE_MODAL = 'CLOSE_MODAL',
//   closeModal = () => ({ type: CLOSE_MODAL });

export const TOGGLE_MODAL = 'TOGGLE_MODAL',
  toggleModal = (isOpen) => ({ 
    type: TOGGLE_MODAL,
    isOpen
  });