// src/components/Heritage/MapSection.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to fit map to given bounds
function FitBounds({ bounds }) {
  const map = useMap();
  if (bounds?.length) {
    map.fitBounds(bounds, { padding: [50, 50] });
  }
  return null;
}

const MapSection = ({ sites = [] }) => {
  // Map markers
  const markers = sites.map((site) => {
    const lat = parseFloat(site.gps_location.latitude);
    const lng = parseFloat(site.gps_location.longitude);
    return { ...site, lat, lng };
  });

  // Compute bounds
  const bounds =
    markers.length > 0
      ? [
          [
            Math.min(...markers.map((m) => m.lat)),
            Math.min(...markers.map((m) => m.lng)),
          ],
          [
            Math.max(...markers.map((m) => m.lat)),
            Math.max(...markers.map((m) => m.lng)),
          ],
        ]
      : null;

  return (
    <div className="flex justify-center my-8">
      <div className="w-[1200px] h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          className="w-full h-full"
          bounds={bounds}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {markers.map((site, idx) => (
            <Marker key={idx} position={[site.lat, site.lng]}>
              <Popup>
                <strong>{site.site_name}</strong> <br /> {site.tagline}
              </Popup>
            </Marker>
          ))}

          <FitBounds bounds={bounds} />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapSection;
