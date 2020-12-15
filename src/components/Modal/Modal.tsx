/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState, useEffect, useCallback, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import EventEmitter from '../../services/EventEmitter';

const Modal: React.FC = () => {
  const [modals, setModals] = useState<JSX.Element[]>([]);

  const closeModalByIndex = useCallback(
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
      if (event.code === 'Escape') closeModalByIndex(modals.length - 1);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modals, closeModalByIndex]);

  useEffect(() => {
    if (modals.length > 0) {
      const scrollbarWidth = `${window.innerWidth - document.body.offsetWidth}px`;

      document.body.style.paddingRight = scrollbarWidth;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
  }, [modals]);

  return (
    <>
      {modals.map((modal, modalIndex) => {
        const closeModal = () => closeModalByIndex(modalIndex);

        return ReactDOM.createPortal(
          <div className={styles.container} onClick={closeModal}>
            <button type="button" className={styles.button} onClick={closeModal}>
              X
            </button>
            <div className={styles.wrapper}>
              <div className={styles.inner}>
                <div className={styles.content} onClick={(event) => event.stopPropagation()}>
                  {cloneElement(modal, { closeModal })}
                </div>
              </div>
            </div>
          </div>,
          document.body
        );
      })}
    </>
  );
};

export default Modal;
