import styles from "./CategoriasMenu.module.scss";
import { useState, useEffect } from "react";
import { map } from "lodash";
import Link from "next/link";
import { categoryCtrl } from "@/api";

export function CategoriasMenu() {
  const [categorias, setCategorias] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await categoryCtrl.getAll();
        setCategorias(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.container}>
      {map(categorias, (category) => (
        <Link key={category.categID} href={`/categories/${category.categPath}`}>
          {category.categName}
        </Link>
      ))}
    </div>
  );
}
