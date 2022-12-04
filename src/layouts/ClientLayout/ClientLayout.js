import React from 'react'
import {Container} from "semantic-ui-react";
import "./ClientLayout.scss";
import {TopBar, Footer} from "../../components/Web";

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
            <Footer.Info />
            <Footer.Menu />
            <Footer.Newsletter />
          </Container>
          <Container>
            <span>@ ALL RIGHTS RESERVED</span>
            <span>BRAIAN DANIERL HERCUN | FULLSTACK MERN </span>
          </Container>
        </div>
    </div>
  )
}
