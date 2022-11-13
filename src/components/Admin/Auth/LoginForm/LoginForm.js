import React from 'react'
import {Form} from "semantic-ui-react"
import {useFormik} from "formik";
import { Auth } from "../../../../api/auth";
import {initialValues, validationSchema} from "./LoginForm.form"
import {useAuth} from"../../../../hooks";


const authController = new Auth();

export function LoginForm() {
  const {login} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema : validationSchema(),
    validationOnChange: false,
    onSubmit: async (formValue) => {
      try{
        const response = await authController.login(formValue);
        authController.setAccessToken(response.access);
        authController.setRefreshToken(response.refresh);
        login(response.access);
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Input 
          name="email" 
          placeholder="Correo Electronico" 
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
          />
          <Form.Input 
          name="password" 
          placeholder="Contraseña" 
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
          />
          <Form.Button type='submit' primary fluid loading={formik.isSubmitting}> Entrar </Form.Button>
        </Form>
    </div>
  )
}
