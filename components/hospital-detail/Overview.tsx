import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import ServicesSlide from "../commons/ServicesSlide";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToString } from "react-dom/server";

interface OverviewProps {
  about: string | undefined;
  services: string[] | undefined;
  latitude: number | undefined;
  longitude: number | undefined;
}

const Overview: React.FC<OverviewProps> = ({
  about,
  services,
  latitude: propLatitude,
  longitude: propLongitude,
}) => {
  let [latitude, setLatitude] = useState(propLatitude);
  let [longitude, setLongitude] = useState(propLongitude);

  useEffect(() => {
    setLatitude(propLatitude);
    setLongitude(propLongitude);
  }, [propLatitude, propLongitude]);

  const genericSummary =
    "At Our Institution, we are committed to delivering exceptional healthcare services. Our experienced doctors and state-of-the-art facilities ensure that you receive the highest quality care With a focus on personalized treatment, our skilled doctors bring a wealth of knowledge and expertise to each patient's journey. We prioritize your well-being and strive to provide innovative solutions tailored to your needs. Trust is at the core of our institution. We have built a reputation for delivering successful outcomes and earning the confidence of our patients. From routine care to specialized treatments, we are here to serve you with compassion and dedication.";

  if (about === undefined) {
    about = genericSummary;
  }
  if (latitude == undefined) {
    latitude = 9.02497;
  }
  if (longitude == undefined) {
    longitude = 38.74689;
  }

  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current === null) {
      const L = require("leaflet");
      require("leaflet/dist/leaflet.css");

      const map = L.map("map").setView([latitude, longitude], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);
      map.zoomControl.setPosition("bottomright");
      mapRef.current = map;

      const icon = L.divIcon({
        className: "custom-icon",
        html: renderToString(<FaMapMarkerAlt size={28} color="#FF0000" />),
      });

      const marker = L.marker([latitude, longitude], { icon }).addTo(map);
      markerRef.current = marker;
    } else if (markerRef.current && latitude && longitude) {
      markerRef.current.setLatLng([latitude, longitude]);
      if (mapRef.current) {
        mapRef.current.setView([latitude, longitude]);
      }
    }
  }, [latitude, longitude]);

  return (
    <div className="p-5 -z-10">
      <div className="bg-white rounded-md p-5 w-[95%] shadow-md">
        <h1 className="font-medium text-[30px]">About Us</h1>
        <p className="py-5 text-gray-600">{about}</p>
      </div>
      <div className="bg-white rounded-lg w-[95%] shadow-md -z-10">
        <div id="map" className="h-96"></div>
      </div>
      <div className="mr-10">
        <h1 className="pt-2 text-xl font-bold">Our Services</h1>
        {services && (
          <div data-testid="overview-services">
            <ServicesSlide slideShow={4} services={services} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
