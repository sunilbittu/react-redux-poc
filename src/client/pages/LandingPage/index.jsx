import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { t } = this.props;
    return (
      <Container className="landingPage" fluid="sm">
        <Row>
          <Col>
            <Carousel controls={false} indicators={false} fade={true} slide={false} interval={null}>
              <Carousel.Item>
                <h3>{t('Slide1Title')}</h3>
                <p>{t('Slide1Desc')}</p>
                <Figure>
                  <Figure.Image
                    alt="Skype"
                    src="images/splash-1.png"
                  />
                </Figure>
                <div className="lpFooter">
                  <h3>{t('Welcome')}</h3>
                  <p>{t('SwipeText')}</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h3>Secure Transportation Storage</h3>
                <p>We seal, transport and store your bags so you can reclaim your day.</p>
                <Figure>
                  <Figure.Image
                    alt="Skype"
                    src="images/splash-2.png"
                  />
                </Figure>
                <div className="lpFooter">
                  <Button href="/login" variant="primary" size="lg" block>
                  {t('SignIn')}
                </Button>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <h3>Delivery to Airport</h3>
                <p>Track your bags an receive them on time to fly with peace of mind.</p>
                <Figure>
                  <Figure.Image
                    alt="Skype"
                    src="images/splash-3.png"
                  />
                </Figure>
                <div className="lpFooter">
                  <Button href="/login" variant="primary" size="lg" block>
                  {t('SignIn')}
                </Button>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withTranslation()(LandingPage);
