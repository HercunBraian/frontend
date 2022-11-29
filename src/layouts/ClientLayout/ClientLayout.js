import React from 'react'
import {Container} from "semantic-ui-react";
import "./ClientLayout.scss";
import {TopBar} from "../../components/Web";

export function ClientLayout(props) {
  const {children} = props;
  return (
    <div className='client-layout'>
        <div className='client-layout__header'>
          <TopBar />
        </div>
        {children}

        <div className='client-layout__footer'>
        <Container>
            <span>INFO</span>
            <span>MENU</span>
            <span>NEWSLETTER</span>
          </Container>
          <Container>
            <span>@ ALL RIGHTS RESERVED</span>
            <span>BRAIAN DANIERL HERCUN | FULLSTACK MERN </span>
          </Container>
        </div>
    </div>
  )
}
