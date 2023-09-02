import styles from "./GridCategories.module.scss";
import { data } from "./GridCategories.data";
import { Image } from "semantic-ui-react";
import Link from "next/link";
import { map } from "lodash";

export function GridCategories() {
  return (
    <div className={styles.container}>
      {map(data, (category) => (
        <Link key={category.id} href={category.link}>
          <div className={styles.category}>
            <Image src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
