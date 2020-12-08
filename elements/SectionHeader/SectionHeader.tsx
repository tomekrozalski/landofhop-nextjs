import styles from './SectionHeader.module.css';

const SectionHeader: React.FC = ({ children }) => (
  <div className={styles.sectionHeader}>
    <h2>{children}</h2>
  </div>
);

export default SectionHeader;
