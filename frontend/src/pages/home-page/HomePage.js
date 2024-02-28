import React from 'react';
import Xarrow from "react-xarrows";
import { Col, Container, Image, Row } from 'react-bootstrap';

import { ReactComponent as HeadSvg } from "./square-head.svg";
import PageButton from '../../components/page-button/PageButton';
import { publicUrl } from '../../index';
import './home-page.css';
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
      <Row className="w-100">
        <Col className="text-center w-100">
          <Row className="justify-content-evenly w-100">
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <span id="tasks-page-button-line-end"></span>
              <PageButton pageName="tasks" id="tasks-page-button">

              </PageButton>
            </Col>
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <span id="areas-page-button-line-end"></span>
              <PageButton pageName="areas" id="areas-page-button">

              </PageButton>
            </Col>
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <span id="resources-page-button-line-end"></span>
              <PageButton pageName="resources" id="resources-page-button">

              </PageButton>
            </Col>
            <Col xs={6} md={3} lg={2} className="text-center mb-3">
              <span id="archives-page-button-line-end"></span>
              <PageButton pageName="archives" id="archives-page-button">

              </PageButton>
            </Col>
          </Row>
        </Col>
      </Row>
      <Xarrow
        start="page-title"
        end="tasks-page-button-line-end"
        path="grid"
        color="#B7B7B7"
        strokeWidth={"1"}
        startAnchor={"bottom"}
        endAnchor={"top"}
        headShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        showTail="true"
        tailShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        animateDrawing
      />
      <Xarrow
        start="page-title"
        end="areas-page-button-line-end"
        path="grid"
        color="#B7B7B7"
        strokeWidth={"1"}
        startAnchor={"bottom"}
        endAnchor={"top"}
        headShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        showTail="true"
        tailShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        animateDrawing
      />
      <Xarrow
        start="page-title"
        end="resources-page-button-line-end"
        path="grid"
        color="#B7B7B7"
        strokeWidth={"1"}
        startAnchor={"bottom"}
        endAnchor={"top"}
        headShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        showTail="true"
        tailShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        animateDrawing
      />
      <Xarrow
        start="page-title"
        end="archives-page-button-line-end"
        path="grid"
        color="#B7B7B7"
        strokeWidth={"1"}
        startAnchor={"bottom"}
        endAnchor={"top"}
        headShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        showTail="true"
        tailShape={{
          svgElem: <HeadSvg />,
          offsetForward: 1       
        }}
        animateDrawing
      />
    </Container>
  );
};
