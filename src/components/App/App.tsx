import Modal from '../Modal';
import { openModal } from '../../helpers/modal';
import styles from './styles.module.scss';

const App: React.FC = () => {
  const content2 = <div>modal2</div>;

  const handleClick2 = () => openModal(content2);

  const content = (
    <div>
      <button type="button" onClick={handleClick2}>
        modal
      </button>
      <div className={styles.content}>
        {Array(1000)
          .fill('')
          .map((_, i) => i * i)}
      </div>
    </div>
  );

  const handleClick = () => openModal(content);

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick}>
        modal
      </button>
      <Modal />
    </div>
  );
};

export default App;
