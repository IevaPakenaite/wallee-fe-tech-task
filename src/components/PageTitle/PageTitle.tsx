import styles from "./PageTitle.module.scss";

interface Props {
  label: string;
}

function PageTitle({ label }: Props) {
  return <h5 className={styles["page-title"]}>{label}</h5>;
}

export default PageTitle;
