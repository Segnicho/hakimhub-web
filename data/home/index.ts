import { chat, doctor, hospital, medicalTeam } from "@/public";
import { VisionMission } from "@/types/home/mission";
import { Service } from "@/types/home/services";
export const services: Service[] = [
  {
    description:
      "Hakimhub your guide to getting hospital and doctor recommendations.",
    image: chat,
    service: "Chat",
  },
  {
    description: "Find Hospitals and Health Care Centers around you.",
    image: hospital,
    service: "Hospitals ",
  },
  {
    description:
      "Select from our diverse list of specialists based on your specific needs.",
    image: medicalTeam,
    service: "Specialists",
  },
];

export const hakimhub: VisionMission = {
  mission:
    "Our mission is to empower individuals by providing them with a user-friendly platform that helps them understand their health concerns. We aim to leverage advanced technology and medical expertise to assist users in identifying potential diseases based on their symptoms. By offering valuable insights and personalized recommendations, we strive to enable users to make informed decisions about their well-being and guide them towards appropriate specialists.",
  vision:
    "Our vision is to be a trusted source of health information and guidance for individuals worldwide. We aim to continuously enhance our platform's capabilities, incorporating cutting-edge technology and medical advancements, to ensure accurate and reliable assistance in understanding health concerns. By fostering a user-centric approach and prioritizing user satisfaction, we aspire to become the go-to resource for individuals seeking answers to their symptoms and personalized recommendations.",
};
