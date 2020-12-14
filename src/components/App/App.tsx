import Modal from '../Modal';
import { openModal } from '../../helpers/modal';
import styles from './styles.module.scss';
import Test from '../Test';

const App: React.FC = () => {
  const handleClick = () => openModal(<Test />);

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick}>
        open
      </button>
      <Modal />
    </div>
  );
};

export default App;
