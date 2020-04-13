import React from "react";
import { DirectionsRenderer, GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

class Map extends React.Component {
  state = {
    progress: []
  };

  path = [
    { lat: 25.2238073, lng: 55.365884 },
    { lat: 25.269620,lng: 55.296875}, 
  ];

  velocity = 100;
  initialDate = new Date();

  getDistance = () => {
    // seconds between when the component loaded and now
    const differentInTime = (new Date() - this.initialDate) / 1000; 
    return differentInTime * this.velocity; // d = v*t 
  };

  /* componentDidMount = () => {
    this.interval = window.setInterval(this.moveObject, 1000);
  };
 */
  UNSAFE_componentWillUnmount = () => {
    window.clearInterval(this.interval);
  };

  /* moveObject = () => {
    const distance = this.getDistance();
    if (!distance) {
      return;
    }

    let progress = this.path.filter(
      coordinates => coordinates.distance < distance
    );

    const nextLine = this.path.find(
      coordinates => coordinates.distance > distance
    );
    if (!nextLine) {
      this.setState({ progress });
      return; // it's the end!
    }
    const lastLine = progress[progress.length - 1];

    const lastLineLatLng = new window.google.maps.LatLng(
      lastLine.lat,
      lastLine.lng
    );

    const nextLineLatLng = new window.google.maps.LatLng(
      nextLine.lat,
      nextLine.lng
    );

    // distance of this line
    const totalDistance = nextLine.distance - lastLine.distance;
    const percentage = (distance - lastLine.distance) / totalDistance;

    const position = window.google.maps.geometry.spherical.interpolate(
      lastLineLatLng,
      nextLineLatLng,
      percentage
    );

    progress = progress.concat(position);
    this.setState({ progress });
  };
 */
  componentDidMount = () => {
    this.interval = window.setInterval(this.moveObject, 1000);
    this.path = this.path.map((coordinates, i, array) => {
      if (i === 0) {
        return { ...coordinates, distance: 0 }; // it begins here!
      }
      const { lat: lat1, lng: lng1 } = coordinates;
      const latLong1 = new window.google.maps.LatLng(lat1, lng1);

      const { lat: lat2, lng: lng2 } = array[0];
      const latLong2 = new window.google.maps.LatLng(lat2, lng2);

      // in meters:
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
        latLong1,
        latLong2
      );
      const distanceInKm = distance/1000;
      return { ...coordinates, distanceInKm };
    });
    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route({
      origin: new window.google.maps.LatLng(this.path[0].lat, this.path[0].lng),
      destination: new window.google.maps.LatLng(this.path[1].lat, this.path[1].lng),
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
    console.log(this.path);
  };

  render = () => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 25.2238073, lng: 55.2831208 }}
      >
        {this.state.progress && (
          <>
            {/* <Polyline
              path={this.state.progress}
              options={{ strokeColor: "#FF0000 " }}
            />
            <Marker
              position={this.state.progress[this.state.progress.length - 1]}
            /> */}
            <DirectionsRenderer directions={this.state.directions} />
          </>
        )}
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=KEYGOES&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100vh` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);
