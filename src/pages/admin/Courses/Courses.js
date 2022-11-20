import React, {useState} from 'react';
import {Tab, Button} from "semantic-ui-react";
import {BasicModal} from "../../../components/Admin/Shared";
import "./Courses.scss";
import {ListCourses, CourseForm} from "../../../components/Admin/Course";
export  function Courses() {

  const [showModal, setshowModal] = useState(false);

  const [reload, setReload] = useState(false);

  // Funcion para cambiar de true a false o viceversa.
  const onReload = () => setReload ((prevState) => !prevState);

  // Funcion para abrir o cerrar el modal
  const onOpenCloseModal = () => setshowModal ((prevState) => !prevState);
  //

  return (
    <>
        <div className='courses-page'>
          <div className='courses-page__add'>
            <Button primary onClick={onOpenCloseModal}>
              Nuevo Curso
            </Button>
          </div>

          <Tab.Pane attached={false}>
            <ListCourses reload={reload} onReload={onReload} />
          </Tab.Pane>
        </div>

        <BasicModal show={showModal} close={onOpenCloseModal} title={"Crear Curso"}>
          <CourseForm onClose={onOpenCloseModal} onReload={onReload} />
        </BasicModal>
    </>
  )
}
