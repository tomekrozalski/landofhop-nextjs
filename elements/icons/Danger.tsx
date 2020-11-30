const Danger: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <path
      fill="var(--color-danger)"
      d="M0 10 10 0 25 15 40 0 50 10 35 25 50 40 40 50 25 35 10 50 0 40 15 25Z"
    />
  </svg>
);

export default Danger;
