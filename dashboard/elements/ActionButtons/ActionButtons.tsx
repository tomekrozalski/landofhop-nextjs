import styles from './ActionButtons.module.css';

type Props = {
  append: () => void;
  remove: () => void;
  withRemove: boolean;
};

const ActionButtons: React.FC<Props> = ({ append, remove, withRemove }) => (
  <>
    {withRemove && (
      <button className={styles.remove} onClick={remove}>
        -
      </button>
    )}
    <button className={styles.add} onClick={append}>
      +
    </button>
  </>
);

export default ActionButtons;
