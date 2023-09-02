import styles from "./AdminButton.module.scss";
import { Icon } from "semantic-ui-react";
import Link from "next/link";

export function AdminButton() {
  return (
    <Link href="/admin" className={styles.adminButton}>
      <Icon name="configure" />
      Admin
    </Link>
  );
}
