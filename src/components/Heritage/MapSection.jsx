// src/components/Heritage/MapSection.jsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icon with error handling
try {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
} catch (error) {
  console.warn("Leaflet icon setup failed:", error);
}

// Custom marker icons for different site types with error handling
const createCustomIcon = (color = "#E98A19") => {
  try {
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
  } catch (error) {
    console.warn("Custom icon creation failed:", error);
    return null;
  }
};

// Enhanced popup component with rich information and error handling
const EnhancedPopup = ({ site }) => {
  return (
    <div className="min-w-[280px] p-3">
      <div className="flex items-start gap-3">
        <img
          src={site.primary_images?.[0] || "/heritage/placeholder.jpg"}
          alt={site.site_name}
          className="w-20 h-20 object-cover rounded-lg flex-shrink-0 shadow-md"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80x80/f0f0f0/333?text=No+Image';
          }}
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-[#3B2F2F] mb-1 leading-tight">
            {site.site_name || "Unknown Site"}
          </h3>
          <p className="text-sm text-gray-600 italic mb-2 line-clamp-2">
            {site.tagline || "No description available"}
          </p>

          {/* Site badges */}
          <div className="flex flex-wrap gap-1 mb-2">
            <span className="inline-block bg-[#E98A19] text-white px-2 py-1 rounded-full text-xs font-medium">
              {site.era || "Unknown Era"}
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
              {site.type || "Unknown Type"}
            </span>
          </div>

          {/* Description preview */}
          <p className="text-sm text-gray-700 line-clamp-3 mb-3">
            {site.description?.substring(0, 120) || "No description available"}...
          </p>

          {/* Quick info */}
          {site.plan_your_visit && (
            <div className="text-xs text-gray-600 mb-2">
              <div className="flex items-center gap-1">
                <span>📍</span>
                <span>{site.plan_your_visit.how_to_reach?.substring(0, 50) || "Location info not available"}...</span>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              className="flex-1 text-xs bg-[#E98A19] text-white px-3 py-2 rounded-lg hover:bg-[#D67A17] transition-colors font-medium"
              onClick={() => {
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

// Component to fit map to given bounds with error handling
function FitBounds({ bounds }) {
  const map = useMap();

  useEffect(() => {
    if (bounds?.length && bounds[0] && bounds[1]) {
      try {
        map.fitBounds(bounds, { padding: [50, 50] });
      } catch (error) {
        console.warn("FitBounds failed:", error);
      }
    }
  }, [bounds, map]);

  return null;
}

const MapSection = ({ sites = [] }) => {
  const [mapError, setMapError] = useState(false);

  // Map markers with enhanced data and error handling
  const markers = React.useMemo(() => {
    return sites.map((site) => {
      try {
        // Parse coordinates from format like "34.1666° N" to float
        const latMatch = site.gps_location?.latitude?.match(/(\d+\.?\d*)/);
        const lngMatch = site.gps_location?.longitude?.match(/(\d+\.?\d*)/);
        const lat = latMatch ? parseFloat(latMatch[1]) : 0;
        const lng = lngMatch ? parseFloat(lngMatch[1]) : 0;

        // Validate coordinates
        if (isNaN(lat) || isNaN(lng) || lat === 0 || lng === 0) {
          console.warn(`Invalid coordinates for ${site.site_name}:`, site.gps_location);
          return null;
        }

        return { ...site, lat, lng };
      } catch (error) {
        console.warn(`Error processing site ${site.site_name}:`, error);
        return null;
      }
    }).filter(Boolean);
  }, [sites]);

  // Compute bounds with error handling
  const bounds = React.useMemo(() => {
    if (markers.length === 0) return null;

    try {
      const validMarkers = markers.filter(m => m.lat && m.lng && !isNaN(m.lat) && !isNaN(m.lng));

      if (validMarkers.length === 0) return null;

      return [
        [
          Math.min(...validMarkers.map((m) => m.lat)),
          Math.min(...validMarkers.map((m) => m.lng)),
        ],
        [
          Math.max(...validMarkers.map((m) => m.lat)),
          Math.max(...validMarkers.map((m) => m.lng)),
        ],
      ];
    } catch (error) {
      console.warn("Error computing bounds:", error);
      return null;
    }
  }, [markers]);

  // Default center (India)
  const defaultCenter = [20.5937, 78.9629];
  const defaultZoom = 5;

  // Handle map errors
  const handleMapError = (error) => {
    console.error("Map error:", error);
    setMapError(true);
  };

  if (mapError) {
    return (
      <div className="flex justify-center my-8">
        <div className="w-full max-w-6xl h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Map Loading Error</h3>
            <p className="text-gray-600">Unable to load the interactive map. Please try refreshing the page.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-6xl h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
        <MapContainer
          className="w-full h-full"
          center={bounds ? undefined : defaultCenter}
          zoom={bounds ? undefined : defaultZoom}
          bounds={bounds}
          scrollWheelZoom={true}
          onError={handleMapError}
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

export default MapSection;
