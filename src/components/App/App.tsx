import Modal from '../Modal';
import EventEmitter from '../../services/EventEmitter';

const App: React.FC = () => {
  const handleClick2 = () => {
    EventEmitter.emit('openModal', <div>modal2</div>);
  };

  const handleClick = () => {
    EventEmitter.emit(
      'openModal',
      <div>
        <button type="button" onClick={handleClick2}>
          modal2
        </button>
      </div>
    );
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        modal
      </button>
      <Modal />
    </div>
  );
};

export default App;
