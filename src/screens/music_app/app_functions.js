// import React, { Component } from "react";

// export function getCurrentLocation(comp : Component) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log("wokeeey");
//       console.log(position);
//       comp.setState({
//         region: { 
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         },
//         error: null,
//       });
//     },
//     (error) => comp.setState({ error: error.message }),
//     { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
//   );
// }