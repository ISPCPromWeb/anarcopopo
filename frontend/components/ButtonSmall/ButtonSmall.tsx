import styles from "./ButtonSmall.module.css";

interface ButtonSmallProps {
  name: string;
  type: "submit" | "reset" | "button";
}
export const ButtonSmall = (props: ButtonSmallProps) => {
  const { name, type } = props;
  return (
    <div
      className={`${styles.contButton} d-flex d-md-block justify-content-center container-fluid`}
    >
      <button type={`${type}`} className={`${styles.btn1} btn `}>
        {name}
      </button>
    </div>
  );
};
