import React, {useState} from 'react';
import "./Blog.scss";
import {Tab, Button} from "semantic-ui-react";
import {ListPost, PostForm} from "../../../components/Admin/Post";
import {BasicModal} from "../../../components/Admin/Shared";

export function Blog() {
const [showModal, setShowModal] = useState(false);
const [reload, setReload] = useState(false);

const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
const onReload = () => setReload((prevState) => !prevState);

  const panes =[
    {
      render: () => (
        <Tab.Pane attached={false}>
         <ListPost reload={reload} />
        </Tab.Pane>
      ),
    }
  ]

  return (
    <>
        <div className='blog-page'>
          <div className='blog-page__add'>
            <Button primary onClick={onOpenCloseModal}>Nuevo post</Button>
          </div>

          <Tab menu={{secondary:true}} panes={panes} />
        </div>

        <BasicModal 
        show={showModal} 
        close={onOpenCloseModal} 
        title="Crear nuevo post" 
        size="large">
          <PostForm onClose={onOpenCloseModal} onReload={onReload} />
        </BasicModal>
    </>
  )
}
