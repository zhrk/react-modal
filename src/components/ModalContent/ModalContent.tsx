/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useEffect } from 'react';
import styles from './styles.module.scss';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, closeModal } = props;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  return (
    <div className={styles.container} onClick={(event) => event.stopPropagation()}>
      {children}
    </div>
  );
};

export default Modal;
