import React, { useEffect, useLayoutEffect, useState } from "react";
import GoogleMapReact, { Marker } from "google-map-react";

const mapCenter = {
  lat: 19.43252,
  lng: -99.132733,
};

export default function MapView({ locations }) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={mapCenter}
        defaultZoom={12}
        yesIWantToUseGoogleMapApiInternals
      ></GoogleMapReact>
    </div>
  );
}

/*const MarkersList = (props) => {
  const { locations, ...markerProps } = props;
  return (
    <span>
      {locations.map((location, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: location.lat, lng: location.lng }}
          />
        );
      })}
    </span>
  );
};*/
