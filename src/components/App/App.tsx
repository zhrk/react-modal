import Modal from '../Modal';
import styles from './styles.module.scss';

const App: React.FC = () => {
  const content2 = <div>modal2</div>;

  const content = (
    <div>
      modal
      <Modal content={content2}>
        {({ openModal }) => (
          <button type="button" onClick={openModal}>
            second modal
          </button>
        )}
      </Modal>
    </div>
  );

  return (
    <div className={styles.container}>
      <Modal content={content}>
        {({ openModal }) => (
          <button type="button" onClick={openModal}>
            modal
          </button>
        )}
      </Modal>
    </div>
  );
};

export default App;
