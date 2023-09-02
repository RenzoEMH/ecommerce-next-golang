import { useState, useEffect } from "react";
import { addressCtrl } from "@/api";
import { Loading, NoResult } from "@/components/Shared";
import { size, map } from "lodash";
import { Address } from "./Address";
import styles from "./ListAddresses.module.scss";

export function ListAddresses(props) {
  const { reload, onReload } = props;
  const [addresses, setAddresses] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll();
        setAddresses(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload]);

  if (!addresses) {
    return <Loading text="Cargando direcciones" top={100} />;
  }

  return (
    <div className={styles.addresses}>
      {size(addresses) === 0 && <NoResult text="Crea tu primera direccion" />}
      {map(addresses, (address) => (
        <Address key={address.addId} address={address} onReload={onReload} />
      ))}
    </div>
  );
}
