/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import ModalContent from '../ModalContent';
import EventEmitter from '../../services/EventEmitter';

const Modal: React.FC = () => {
  const [modals, setModals] = useState<JSX.Element[]>([]);

  const closeModal = useCallback(
    (modalIndex: number) => {
      setModals(modals.filter((_, index) => index !== modalIndex));
    },
    [modals]
  );

  useEffect(() => {
    const openModal = (content: JSX.Element) => {
      setModals([...modals, content]);
    };

    EventEmitter.on('openModal', openModal);

    return () => {
      EventEmitter.removeListener('openModal', openModal);
    };
  }, [modals]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') closeModal(modals.length - 1);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modals, closeModal]);

  return (
    <>
      {modals.map((modal, modalIndex) =>
        ReactDOM.createPortal(
          <div className={styles.container} onClick={() => closeModal(modalIndex)}>
            <ModalContent>{modal}</ModalContent>
          </div>,
          document.body
        )
      )}
    </>
  );
};

export default Modal;
