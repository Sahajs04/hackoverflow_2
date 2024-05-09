import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TrackVisibility from 'react-on-screen';

const Banner = () => {
  return (
    <Container>
      <Row>
        <Col>
          <TrackVisibility>
            <div className="banner">
              
              <h1>Welcome to our Hackathon Project!</h1>
              <p>This system allows you to track vitals about your plants.</p>
              {/* Add a button if necessary */}
              {/* <button>
                <svg>...</svg>
              </button> */}
            </div>
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;