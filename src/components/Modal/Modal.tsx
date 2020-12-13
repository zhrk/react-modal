/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import ModalContent from '../ModalContent';

interface ModalProps {
  content: JSX.Element;
  children: ({ openModal }: { openModal: () => void }) => JSX.Element;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { content, children } = props;

  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <div className={styles.container} onClick={closeModal}>
            <ModalContent closeModal={closeModal}>{content}</ModalContent>
          </div>,
          document.body
        )}
      {children({ openModal })}
    </>
  );
};

export default Modal;
