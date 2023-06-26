import { chat, doctor, hospital, medicalTeam } from "@/public";
import { Service } from "@/types/services";
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
