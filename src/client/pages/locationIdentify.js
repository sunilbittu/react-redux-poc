import React, {Component} from 'react';
import Map from '../components/map/Map';
import { Link, Redirect } from "react-router-dom";
import { withTranslation } from 'react-i18next'; 
import {FormControl, InputGroup, Container, Image, Col, Row, Alert, Button,ListGroup} from 'react-bootstrap'; 
import SearchIcon from '../../assets/svg/SearchIcon.svg';
import BackArrow from '../../assets/svg/BackArrow.svg';
import NavIcon from '../../assets/svg/NavIcon.svg';
import { connect } from 'react-redux';

class LocationIdentity extends Component {
    state = { countryCode: "", address: "", area: "", city: "" }

    countryCode = (childData) => {
        this.setState({ countryCode: childData })
    }
    addressData = (address) => {
        this.setState({ address: address })
    }
    areaData = (area) => {
        this.setState({ area: area })
    }
    cityData = (city) => {
        this.setState({ city: city })
    }



    render() {
        console.log(`2ndpage props`, this.props)
        const { t } = this.props;
        const isLoading = this.state.countryCode !== 'AE' ? true : false;
        const renderAlert = () => {
            if (isLoading) {
                return <Alert variant="warning" appear={true} className="shadow-sm">
                    
                       <strong className="d-block"> Sorry,</strong> Our services are not available in your Area.
                </Alert>
            } else {
                return <div></div>
            }
        }
        return (<Container className="locationIdentify">
            <Row className="headerPrimary mb-0">
                <Col xs={2}> </Col>
                <Col xs={8} className="text-center">{t('WheresYourSkype')}</Col>
                <Col xs={2}><Link className="d-block" to={"#"}>
        <Image src={NavIcon}  />
    </Link></Col>
            </Row>
            <Row>
                <Col  xs={12} className="p-0" >
            <Map google={
                this.props.google
            }
                center={
                    {
                        lat: 12.8998354,
                        lng: 77.6067205
                    }
                }
                height='100vh'
                zoom={
                    18
                }
                postCountryCode={this.countryCode}
                postAddressData={this.addressData}
                postAreaData={this.areaData}
                postCityData={this.cityData}
            />
            </Col>
            </Row>
            {renderAlert()}

            <div className="liAddress">
                <span className="d-block small text-primary">Location</span>
            <span className="text-truncate d-block mt-1">{this.state.address}</span>
            <span className="small"> {this.state.city}  </span> 
  </div>
             
            <Button href="/flightInfo" className="btn btn-primary btn-lg liBtn"
                type="submit"
                block disabled={isLoading}>
                Submit  </Button>
                <Container className="liLocations">

<Row className="headerPrimary mb-0">
    <Col xs={2}><Link className="d-block small" to={"/locationidentify"}>
        <Image src={BackArrow}  />
    </Link></Col>
    <Col xs={8} className="text-center">{t('Locations')}</Col>
    <Col xs={2}></Col>
</Row>
<Row className="headerPrimary">
    <Col xs={12}><InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1"><Image src={SearchIcon} /></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            placeholder="Search Address"
            aria-label="Search Address"
            aria-describedby="basic-addon1"
        />
    </InputGroup></Col>
</Row>

<Row>
    <Col xs={12}>
        <h5>{t('NearByLocations')}</h5>
        <ListGroup variant="flush" className="nblList">
        <ListGroup.Item action >Venturedive Office</ListGroup.Item>
        <ListGroup.Item action >Home</ListGroup.Item>
        <ListGroup.Item action >Ferrari World</ListGroup.Item>
        <ListGroup.Item action >Lulu Supermart</ListGroup.Item>
        </ListGroup>
        
         </Col>
</Row>

</Container>


        </Container>
        );
    }
}
function mapStateToProps(state) {
    console.log(`2nd page`,state);
    return {login: state.login}
  }
  /* const mapStateToProps = (state) => ({
    login: state.login
  }) */
  export default connect(mapStateToProps)(withTranslation()(LocationIdentity));
