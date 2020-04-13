import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from 'react-google-maps';
import Geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';
import MapPin from '../../../assets/svg/MapPin.svg';
import { countryMapAction } from '../../../actions/Map/countryMapAction';
import { stateMapAction } from '../../../actions/Map/stateMapAction';
import { cityMapAction } from '../../../actions/Map/cityMapActions';
import { areasMapAction } from '../../../actions/Map/areaMapActions';
import { addressMapAction } from '../../../actions/Map/addressMapActions';
import { geoCodesAction } from '../../../actions/Map/geoCodeActions';
import { connect } from 'react-redux';

Geocode.setApiKey('KEYGOES');
Geocode.enableDebug();

class Map extends Component {
	constructor(props) {
		super(props);
		this.url = 'https://localhost:3000/map';
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			country: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng,
				address1: ''
			}
		};
	}
	/**
	 * Get the current address from the default map position and set those values in the state
	 */
	componentDidMount() {
		if (navigator && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((pos) => {
				const coords = pos.coords;
				console.log(coords)
				Geocode.fromLatLng(coords.latitude, coords.longitude).then(
					(response) => {
						const address = response.results[0].formatted_address,
							addressArray = response.results[0].address_components,
							city = this.getCity(addressArray),
							area = this.getArea(addressArray),
							state = this.getState(addressArray),
							country = this.getCountry(addressArray),
							address1 = this.getAddress(address),
							position = this.getGeoCodes(coords.latitude, coords.longitude);
						this.setState({
							address: address ? address : '',
							area: area ? area : '',
							city: city ? city : '',
							state: state ? state : '',
							country: country ? country : '',
							address1: address1 ? address1 : '',
							position: position ? position : ''
						});
					},
					(error) => {
						console.error(error);
					}
				);
			});
		}
	}
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state ||
			this.state.country !== nextState.country ||
			this.state.address1 !== nextState.address1
		) {
			return true;
		} else if (this.props.center.lat === nextProps.center.lat) {
			return false;
		}
	}
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	async getCity(addressArray) {
		let city = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
				city = addressArray[i].long_name;
				await this.props.dispatch(cityMapAction(city));
				return city;
			}
		}
	};
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
async	getArea(addressArray) {
		let area = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0]) {
				for (let j = 0; j < addressArray[i].types.length; j++) {
					if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
						area = addressArray[i].long_name;
					await	this.props.dispatch(areasMapAction(area));
						return area;
					}
				}
			}
		}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	async getState(addressArray) {
		let state = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
					state = addressArray[i].long_name;
				await	this.props.dispatch(stateMapAction(state));
					return state;
				}
			}
		}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
async	getCountry(addressArray) {
		let country = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'country' === addressArray[i].types[0]) {
					country = addressArray[i].short_name;
				await this.props.dispatch(countryMapAction(country));
					return country;
				}
			}
		}
	};
async	getAddress(address) {
		let address1 = '';
		address1 = address;
	await	this.props.dispatch(addressMapAction(address1));
		return address1;
	};
async	getGeoCodes (lat,long){
		await this.props.dispatch(geoCodesAction(lat,long));
	}
	/**
	 * And function for city,state and address input
	 * @param event
	 */
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = (event) => {};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then(
			(response) => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray),
					country = this.getCountry(addressArray),
					address1 = this.getAddress(address),
					position = this.getGeoCodes(newLat, newLng);
				this.setState({
					address: address ? address : '',
					area: area ? area : '',
					city: city ? city : '',
					state: state ? state : '',
					country: country ? country : '',
					address1: address1 ? address1 : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
					position: position? position :''
				});
			},
			(error) => {
				console.error(error);
			}
		);
	};

	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	onPlaceSelected = (place) => {
		console.log('plc', place);
		const address = place.formatted_address,
			addressArray = place.address_components,
			city = this.getCity(addressArray),
			area = this.getArea(addressArray),
			state = this.getState(addressArray),
			country = this.getCountry(addressArray),
			address1 = this.getAddress(address),
			latValue = place.geometry.location.lat(),
			lngValue = place.geometry.location.lng();
		// Set these values in the state.
		this.setState({
			address: address ? address : '',
			area: area ? area : '',
			city: city ? city : '',
			state: state ? state : '',
			country: country ? country : '',
			address1: address1 ? address1 : '',
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			}
		});
	};
	render() {
		const AsyncMap = withScriptjs(
			withGoogleMap((props) => (
				<GoogleMap
					google={this.props.google}
					defaultZoom={this.props.zoom}
					defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
				>
					{/*Marker*/}
					<Marker
						google={this.props.google}
						name={'user location'}
						draggable={true}
						onDragEnd={this.onMarkerDragEnd}
						icon={{ url: MapPin, scaledSize: { width: 38, height: 56 } }}
						position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
					/>
					<Marker />
					{/* For Auto complete Search Box */}
					<Autocomplete
						style={{
							width: '100%',
							height: '40px',
							paddingLeft: '16px',
							marginTop: '2px',
							marginBottom: '500px'
						}}
						onPlaceSelected={this.onPlaceSelected}
						types={[ 'establishment' ]}
					/>
				</GoogleMap>
			))
		);

		let map;
		if (this.props.center.lat !== undefined) {
			map = (
				<div>
					<AsyncMap
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=KEYGOES&libraries=places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: this.props.height }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
					<br />
					<div />
				</div>
			);
		} else {
			map = <div style={{ height: this.props.height }} />;
		}
		return map;
	}
}
export default connect()(Map);
