import React from 'react';
import {Form, Dropdown, Input} from "semantic-ui-react";

export function MenuForm(props) {
    const {onClose, onReload, menu} = props;
  return (
    // DROPDOWN OPTIONS {ACA PONEMOS LO QUE QUEREMOS QUE SELECCIONE EL USUARIO, PODRIA PASAR NOMBRE DE TECNICOS POR EJEMPLO}
    <Form>
        <Form.Group widths="equal">
            <Form.Input name="title" placeholder="Titulo" />
            <Form.Input name="number" placeholder="order" />
        </Form.Group>
        
        <Input name="path" placeholder="URL" fluid label={!menu ?  <Dropdown options={options} /> : null } 
        />

        <Form.Group></Form.Group>

        <Form.Button type="submit" primary fluid>
            {menu ? "Actualizar Menú" : "Crear Menú"}
        </Form.Button>
   </Form>
  );
}

const options = [
    {
        key: "https://", text: "https://", value:"https://"
    },
    {
        key: "http://", text: "http://", value:"http://"
    },
    {
        key: "/", text: "/", value:"/"
    }
];
