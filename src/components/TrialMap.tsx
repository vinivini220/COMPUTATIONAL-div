import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card } from '@/components/ui/card';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// ✅ Fix Leaflet Default Icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// ✅ Trial Site Data
const trialSites = [
  { id: 1, name: 'Liverpool Clinical Trials Centre', lat: 53.407, lng: -2.978 },
  { id: 2, name: 'London Site', lat: 51.509, lng: -0.118 },
];

const TrialMap = () => {
  const mapRef = useRef(null);

  // ✅ Resize / invalidate map when section visible or window resized
  useEffect(() => {
    const resizeMap = () => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    };

    window.addEventListener('resize', resizeMap);

    const mapSection = document.getElementById('map');
    if (mapSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) resizeMap();
        },
        { threshold: 0.1 }
      );
      observer.observe(mapSection);
      return () => observer.disconnect();
    }

    return () => window.removeEventListener('resize', resizeMap);
  }, []);

  return (
    <section
      id="map"
      className="medical-section bg-gradient-to-b from-secondary/10 to-background py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* ✅ Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Map
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            GP practices participating in the COMPUTATIONAL study across England
          </p>
        </div>

        {/* ✅ Map Card */}
        <Card className="overflow-hidden rounded-xl border-4 border-red-600 shadow-2xl h-[70vh] md:h-[50vh]">
          <MapContainer
            center={[53.407, -2.978]}
            zoom={6}
            scrollWheelZoom={true}
            style={{ width: '100%', height: '100%' }}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {trialSites.map((site) => (
              <Marker key={site.id} position={[site.lat, site.lng]}>
                <Popup>{site.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card>
      </div>
    </section>
  );
};

export default TrialMap;
