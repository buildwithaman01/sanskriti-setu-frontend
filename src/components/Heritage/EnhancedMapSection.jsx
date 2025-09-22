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

// Custom marker icons for different site types
const createCustomIcon = (color = "#E98A19") => {
  return L.divIcon({
    html: `
      <div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 12px;
      ">
        <span>🏛️</span>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
};

// Enhanced popup component with rich information
const EnhancedPopup = ({ site }) => {
  return (
    <div className="min-w-[280px] p-3">
      <div className="flex items-start gap-3">
        <img
          src={site.primary_images?.[0]}
          alt={site.site_name}
          className="w-20 h-20 object-cover rounded-lg flex-shrink-0 shadow-md"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-[#3B2F2F] mb-1 leading-tight">
            {site.site_name}
          </h3>
          <p className="text-sm text-gray-600 italic mb-2 line-clamp-2">
            {site.tagline}
          </p>

          {/* Site badges */}
          <div className="flex flex-wrap gap-1 mb-2">
            <span className="inline-block bg-[#E98A19] text-white px-2 py-1 rounded-full text-xs font-medium">
              {site.era}
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {site.type}
            </span>
          </div>

          {/* Description preview */}
          <p className="text-sm text-gray-700 line-clamp-3 mb-3">
            {site.description?.substring(0, 120)}...
          </p>

          {/* Quick info */}
          {site.plan_your_visit && (
            <div className="text-xs text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>{site.plan_your_visit.how_to_reach?.substring(0, 50)}...</span>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              className="flex-1 text-xs bg-[#E98A19] text-white px-3 py-2 rounded-lg hover:bg-[#D67A17] transition-colors font-medium"
              onClick={() => {
                // This would trigger the site modal in the parent component
                console.log('View details for:', site.site_name);
              }}
            >
              View Details
            </button>
            <button
              className="text-xs bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              onClick={() => {
                if (site.explore_more_link) {
                  window.open(site.explore_more_link, '_blank');
                }
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component to fit map to given bounds
function FitBounds({ bounds }) {
  const map = useMap();
  if (bounds?.length) {
    map.fitBounds(bounds, { padding: [50, 50] });
  }
  return null;
}

const EnhancedMapSection = ({ sites = [] }) => {
  // Map markers with enhanced data
  const markers = sites.map((site) => {
    // Parse coordinates from format like "34.1666° N" to float
    const latMatch = site.gps_location.latitude.match(/(\d+\.?\d*)/);
    const lngMatch = site.gps_location.longitude.match(/(\d+\.?\d*)/);
    const lat = latMatch ? parseFloat(latMatch[1]) : 0;
    const lng = lngMatch ? parseFloat(lngMatch[1]) : 0;
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

  // Default center (India)
  const defaultCenter = [20.5937, 78.9629];
  const defaultZoom = 5;

  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-6xl h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
        <MapContainer
          className="w-full h-full"
          center={bounds ? undefined : defaultCenter}
          zoom={bounds ? undefined : defaultZoom}
          bounds={bounds}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {markers.map((site, idx) => (
            <Marker
              key={idx}
              position={[site.lat, site.lng]}
              icon={createCustomIcon()}
            >
              <Popup className="custom-popup">
                <EnhancedPopup site={site} />
              </Popup>
            </Marker>
          ))}

          <FitBounds bounds={bounds} />
        </MapContainer>
      </div>
    </div>
  );
};

export default EnhancedMapSection;
