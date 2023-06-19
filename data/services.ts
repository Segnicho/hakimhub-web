import { Service } from "@/types/services";
import { chat, doctor, hospital, medicalTeam } from "@/public";
export const services: Service[] = [
  {
    description:
      "Select from our diverse list of specialists based on your specific needs.",
    image: medicalTeam,
    service: "Specialists",
  },
  {
    description: "Find Hospitals and Health Care Centers around you.",
    image: hospital,
    service: "Hospitals ",
  },
  {
    description:
      "Hakimhub your guide to getting hospital and doctor recommendations.",
    image: chat,
    service: "Chat",
  },
];


export const filter_service = ["Oncologists", "Lab", "Emergency", "Allergist"];