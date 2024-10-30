import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const neighborhoods = {
  "Alexandra Park": [-17.7972, 31.0409],
  "Arcadia": [-17.8833, 31.0294],
  "Arlington": [-17.9244, 31.0885],
  "Avondale": [-17.7892, 31.0377],
  "Belgravia": [-17.7902, 31.0478],
  "Belvedere": [-17.8178, 31.0200],
  "Borrowdale": [-17.7454, 31.0842],
  "Budiriro": [-17.9225, 30.9544],
  "Causeway": [-17.8200, 31.0461],
  "Chisipite": [-17.7925, 31.0981],
  "Chitungwiza": [-18.0127, 31.0755],
  "Dzivarasekwa": [-17.8350, 30.9375],
  "Eastlea": [-17.8157, 31.0660],
  "Emerald Hill": [-17.7726, 31.0135],
  "Glen Norah": [-17.9021, 30.9939],
  "Glen View": [-17.9071, 30.9806],
  "Greendale": [-17.7971, 31.0997],
  "Gunhill": [-17.7971, 31.0654],
  "Hatfield": [-17.9170, 31.0829],
  "Highfield": [-17.8839, 31.0220],
  "Highlands": [-17.8035, 31.0937],
  "Hillside": [-17.7995, 31.0290],
  "Kambuzuma": [-17.8713, 30.9631],
  "Kuwadzana": [-17.8614, 30.9723],
  "Lewisam": [-17.8200, 31.1053],
  "Mabelreign": [-17.7819, 30.9794],
  "Mabvuku": [-17.8136, 31.1411],
  "Marlborough": [-17.7751, 30.9980],
  "Mbare": [-17.8653, 31.0250],
  "Mfakosi": [-17.8767, 30.9589],
  "Milton Park": [-17.8120, 31.0280],
  "Mount Pleasant": [-17.7404, 31.0479],
  "Newlands": [-17.8058, 31.0669],
  "Rotten Row": [-17.8375, 31.0291],
  "Ruwa": [-17.8792, 31.2753],
  "Strathaven": [-17.7798, 30.9976],
  "The Avenues": [-17.8288, 31.0483],
  "Warren Park": [-17.8489, 30.9762],
  "Waterfalls": [-17.9086, 31.0219],
  "Westgate": [-17.7743, 30.9521],
  "Westlea": [-17.8615, 30.9708],
  "Willowvale": [-17.8773, 31.0058],
  "Workington": [-17.8644, 31.0054]
};

const MapComponent = ({ selectedNeighborhood }) => {
  const map = useMap();
  const position = neighborhoods[selectedNeighborhood] || [-17.824858, 31.053028];

  useEffect(() => {
    if (selectedNeighborhood) {
      map.setView(position, 15); // Zoom level 15 for a closer view
    }
  }, [selectedNeighborhood, map, position]);

  return null;
};

const MapWrapper = ({ selectedNeighborhood }) => {
  return (
    <MapContainer center={[-17.824858, 31.053028]} zoom={12} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapComponent selectedNeighborhood={selectedNeighborhood} />
    </MapContainer>
  );
};

export default MapWrapper;