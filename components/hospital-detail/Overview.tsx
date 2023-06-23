import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import ServicesCard from "@/components/commons/ServicesCard";

const Overview = () => {
  const mapRef = useRef(null);
const numServices = 4;
const services = Array(numServices)
  .fill(null)
  .map((_, index) => <ServicesCard key={index} />);
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
        <p className="py-5">
          Black Lion (Tikur Anbessa) Specialized Hospital, School of Medicine,
          College of Health Sciences, Addis Ababa University is the largest
          referral hospital in Ethiopia. It was established in 1964, and is now
          the main teaching center for both clinical and preclinical training of
          most disciplines. It is also an institution where specialized clinical
          services that are not available in other public or private
          institutions
        </p>
        <p>
          provide patient care in the hospital. In addition, almost all regional
          and federal hospitals in Addis Ababa are affiliated to the School of
          Medicine as clinical services and training sites.
        </p>
      </div>
      <div className="bg-white rounded-lg w-[95%] shadow-md z-10">
        <div id="map" className="h-96"></div>
      </div>
      <div className="bg-white rounded-lg w-[95%] shadow-md z-10 flex">
          {services.map((service, index) => (
            <div className="w-[200px]" key={index}>{service}</div>
          ))}
      </div>
    </div>
  );
};

export default Overview;
