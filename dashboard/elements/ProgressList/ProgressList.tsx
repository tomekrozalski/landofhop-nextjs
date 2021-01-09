import { useRouter } from 'next/router';

import { EditorialIcon, LabelIcon, ProducerIcon } from './icons';
import styles from './ProgressList.module.css';

const ProgressList: React.FC = () => {
  const { pathname, query, push } = useRouter();
  const part = query.part ?? 'label';

  const move = (part: string) => {
    push({ pathname, query: { ...query, part } }, undefined, {
      shallow: true,
    });
  };

  return (
    <ul className={styles.progressList}>
      <li>
        <button
          className={part === 'label' ? styles.active : ''}
          onClick={() => move('label')}
        >
          <LabelIcon />
        </button>
      </li>
      <li>
        <button
          className={part === 'producer' ? styles.active : ''}
          onClick={() => move('producer')}
        >
          <ProducerIcon />
        </button>
      </li>
      <li>
        <button
          className={part === 'editorial' ? styles.active : ''}
          onClick={() => move('editorial')}
        >
          <EditorialIcon />
        </button>
      </li>
    </ul>
  );
};

export default ProgressList;
