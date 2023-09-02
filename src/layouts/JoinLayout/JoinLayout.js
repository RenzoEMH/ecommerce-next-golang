import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import { map } from "lodash";
import { Layout } from "@/components/layout";
import { data } from "./JoinLayout.data";
import { Container, Icon } from "semantic-ui-react";
import styles from "./JoinLayout.module.scss";

export function JoinLayout(props) {
  const { children } = props;
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, []);

  if (user) return null;

  return (
    <Container className={styles.container}>
      <Layout.Logo />

      <div>
        <div className={styles.left}>
          {map(data, (item, index) => (
            <div key={index}>
              <Icon name={item.icon} />
              <div>
                <h3>{item.title}</h3>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.right}>{children}</div>
      </div>
    </Container>
  );
}
