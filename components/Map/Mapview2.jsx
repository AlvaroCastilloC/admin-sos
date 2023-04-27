import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "99vh",
};

const centerDefault = {
  lat: 19.43252,
  lng: -99.132733,
};

const options = {
  mapTypeControl: false,
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
  ],
};

export default function MapView({ locations }) {
  const [locationList, setLocationList] = useState([]);
  const [center, setCenter] = useState(centerDefault);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    setLocationList((prevList) => [...prevList, ...locations]);
  }, [locations]);

  console.log(locations);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          zoom={zoom}
        >
          {locationList.map((location, idx) => (
            <Marker
              key={idx + location.lat}
              position={location}
              onClick={() => {
                setCenter(location);
              }}
              icon={{
                url: "https://i.postimg.cc/G35yGZfH/medixicon.png",
                scaledSize: new window.google.maps.Size(42, 42),
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
