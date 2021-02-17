import { useRouter } from 'next/router';
import clsx from 'clsx';

import { Page } from 'dashboard/BeverageData/utils/moveTo';
import { EditorialIcon, LabelIcon, ProducerIcon } from './icons';
import styles from './ProgressList.module.css';

const ProgressList: React.FC = () => {
  const router = useRouter();
  const part = router.query.part ?? Page.label;

  return (
    <ul className={styles.progressList}>
      <li className={clsx({ [styles.active]: part === Page.label })}>
        <LabelIcon />
      </li>
      <li className={clsx({ [styles.active]: part === Page.producer })}>
        <ProducerIcon />
      </li>
      <li className={clsx({ [styles.active]: part === Page.editorial })}>
        <EditorialIcon />
      </li>
    </ul>
  );
};

export default ProgressList;
