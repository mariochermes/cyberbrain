import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { publicUrl } from '../../index';
import './home-page.css';
import PageButton from '../../components/page-button/PageButton';
import Xarrow from "react-xarrows";
//import { SteppedLineTo } from 'react-lineto';

export default function HomePage() {
  return (
    <Container className="align-items-center d-flex flex-column justify-content-evenly h-100 py-5">
      <Row>
        <Col>
          <Image alt="CyberBrain logo" className="logo" src={`${publicUrl}/cyberbrain-logo-512.png`} width={280}/>
          <h1 className="my-5" id="page-title">CyberBrain<span class="blink">.</span></h1>
        </Col>
      </Row>
      {/* <SteppedLineTo borderColor="#B7B7B7" from="page-title" to="tasks-page-button" orientation="v" fromAnchor="bottom" toAnchor="top" /> */}
      <Xarrow
          start="page-title"
          end="tasks-page-button-line-end"
          path="grid"
          color="#B7B7B7"
          strokeWidth={"2"}
          startAnchor={"bottom"}
          endAnchor={"top"}
          headShape={{
            svgElem:
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="4pt" height="4pt"
              viewBox="0 0 4 4" version="1.1" y="0.18" x="0.335">
                <g id="surface1">
                    <path style="stroke:none;fill-rule:nonzero;fill:rgb(12.941176%,58.823529%,95.294118%);fill-opacity:1;"
                          d="M 2 4 C 1.449219 4 1 3.550781 1 3 C 1 2.449219 1.449219 2 2 2 C 2.550781 2 3 2.449219 3 3 C 3 3.550781 2.550781 4 2 4 Z"/>
                </g>
              </svg>,
            offsetForward: 1       
          }}
          animateDrawing
      />
      <Row className="w-100">
        <Col className="text-center w-100">
          <Row className="justify-content-evenly w-100">
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <span id="tasks-page-button-line-end"></span>
              <PageButton pageName="tasks" id="tasks-page-button">

              </PageButton>
            </Col>
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <PageButton pageName="areas" id="areas-page-button">

              </PageButton>
            </Col>
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <PageButton pageName="resources" id="resources-page-button">

              </PageButton>
            </Col>
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <PageButton pageName="archives" id="archives-page-button">

              </PageButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
