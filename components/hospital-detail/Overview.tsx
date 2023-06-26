import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import ServicesSlide from "../commons/ServicesSlide";
interface OverviewProps {
  about: string | undefined;
  services: string[] | undefined;
}
const Overview: React.FC<OverviewProps> = ({ about, services }) => {
  const genericSummary =
    "At Our Institution, we are committed to delivering exceptional healthcare services. Our experienced doctors and state-of-the-art facilities ensure that you receive the highest quality care With a focus on personalized treatment, our skilled doctors bring a wealth of knowledge and expertise to each patient's journey. We prioritize your well-being and strive to provide innovative solutions tailored to your needs. Trust is at the core of our institution. We have built a reputation for delivering successful outcomes and earning the confidence of our patients. From routine care to specialized treatments, we are here to serve you with compassion and dedication.";

  if (about === undefined) {
    about = genericSummary;
  }
  console.log(services);

  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef.current === null) {
      const L = require("leaflet");
      require("leaflet/dist/leaflet.css");

      const map = L.map("map").setView([9.02497, 38.74689], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);
      map.zoomControl.setPosition("bottomright");
      mapRef.current = map;
    }
  }, []);

  return (
    <div className="p-5 space-y-4">
      <div className="bg-white rounded-md p-5 w-[95%] shadow-md">
        <h1 className="font-medium text-[30px]">About Us</h1>
        <p className="py-5">{about}</p>
      </div>
      <div className="bg-white rounded-lg w-[95%] shadow-md z-10">
        <div id="map" className="h-96"></div>
      </div>
      <h1>Our Services</h1>
      {services && <ServicesSlide slideShow={4} services={services} />}
    </div>
  );
};

export default Overview;
