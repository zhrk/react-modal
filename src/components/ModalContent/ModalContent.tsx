/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import styles from './styles.module.scss';

const Modal: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.container} onClick={(event) => event.stopPropagation()}>
      {children}
    </div>
  );
};

export default Modal;
