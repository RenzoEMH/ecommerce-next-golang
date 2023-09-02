import { Form, Button } from "semantic-ui-react";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { useFormik } from "formik";
import { authCtrl } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./LoginForm.form";

export function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await authCtrl.login(formValue.email, formValue.password);
        await login();
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          placeholder="Correo electronico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Form.Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Form.Button type="submit" fluid loading={formik.isSubmitting}>
          Iniciar Sesion
        </Form.Button>
      </Form>

      <p className={styles.register}>¿Eres nuevo Cliente?</p>
      <Button as={Link} href="/join/register" fuild basic>
        Crear cuenta
      </Button>
    </>
  );
}
