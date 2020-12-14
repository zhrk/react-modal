interface TestProps {
  closeModal?: () => void;
}

const Test: React.FC<TestProps> = (props) => {
  const { closeModal } = props;

  return (
    <div>
      hello
      <button type="button" onClick={closeModal}>
        close
      </button>
    </div>
  );
};

export default Test;
