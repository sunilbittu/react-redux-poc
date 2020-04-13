import React, { Component } from 'react';
import Map from '../components/map/Map';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { FormControl, InputGroup, Container, Col, Row, Alert, Button, ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

/**
   * Render the view Page
   */
function LocationResults(props) {
	const { state } = props || {};
	return (
		<Container className="locationIdentify">
			<Row className="headerPrimary mb-0">
				<Col xs={2}> </Col>
				<Col xs={8} className="text-center">
					Where is Your Luggage
				</Col>
				<Col xs={2}>
				</Col>
			</Row>
			<Row>
				<Col xs={12} className="p-0">
					<Map
						google={props.google}
						center={{
							lat: 12.8998354,
							lng: 77.6067205
						}}
						height="100vh"
						zoom={18}
					/>
				</Col>
			</Row>

			{state.countryCode !== 'AE' ? (
				<Alert variant="warning" className="shadow-sm">
					<strong className="d-block"> Sorry,</strong> Our services are not available in your Area.
				</Alert>
			) : (
				'd-none'
			)}

			<div className="liAddress">
				<span className="d-block small text-primary">Location</span>
				<span className="text-truncate d-block mt-1">{state.address}</span>
				<span className="small"> {state.city} </span>
			</div>

			<Button
				href="/flightInfo"
				className="btn btn-primary btn-lg liBtn"
				type="submit"
				block
				disabled={state.isLoading}
			>
				Submit{' '}
			</Button>
			<Container className="liLocations">
				<Row className="headerPrimary mb-0">
					<Col xs={2}>
						<Link className="d-block small" to={'/locationidentify'}>
						</Link>
					</Col>
					<Col xs={8} className="text-center">
						'Locations'
					</Col>
					<Col xs={2} />
				</Row>
				<Row className="headerPrimary">
					<Col xs={12}>
						<InputGroup className="mb-3">
							<InputGroup.Prepend>
								<InputGroup.Text id="basic-addon1">
								</InputGroup.Text>
							</InputGroup.Prepend>
							<FormControl
								placeholder="Search Address"
								aria-label="Search Address"
								aria-describedby="basic-addon1"
							/>
						</InputGroup>
					</Col>
				</Row>

				<Row>
					<Col xs={12}>
						<h5>'NearByLocations'</h5>
						<ListGroup variant="flush" className="nblList">
							<ListGroup.Item action>Venturedive Office</ListGroup.Item>
							<ListGroup.Item action>Home</ListGroup.Item>
							<ListGroup.Item action>Ferrari World</ListGroup.Item>
							<ListGroup.Item action>Lulu Supermart</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

/**
 * Sign Up to Shyft Club
 * by using Google,FaceBook,Normal
 * @author Sunil
 * @version 1.0
 * @since 2020-04-10
 */
class LocationIdentify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countryCode: '',
			address: '',
			area: '',
			city: '',
			isLoading: false
		};
	}
	componentDidMount() {
		this.setState({ countryCode: this.props.country });
		this.setState({ state: this.props.state });
		this.setState({ city: this.props.city });
		this.setState({ area: this.props.area });
		this.setState({ address: this.props.address });
	}
	handleSelection = (stateName, stateValue) => {
		this.setState({
			[stateName]: stateValue
		});
		console.log('asdf::', this.state);
	};
	isLoading = true;

	render() {
		return (
			<LocationResults
				state={this.state}
				addressData={this.addressData}
				areaData={this.areaData}
				cityData={this.cityData}
			/>
		);
	}
}

function mapStateToProps(dataFromStore) {
	return {
			country: dataFromStore.countryReducer.storeCountry.data,
			state: dataFromStore.stateReducer.storedState.data,
			city: dataFromStore.cityReducer.storedCity.data,
			area: dataFromStore.areaReducer.storedArea.data,
			address: dataFromStore.addressReducer.storedAddress.data,
			geoCodes: dataFromStore.geoCodesReducer.storedGeoCodes.data
		}
	};
export default connect(mapStateToProps)(withTranslation()(LocationIdentify));
