import { StaticImageData } from "next/image";

export interface Service {
  image: string | StaticImageData;
  description: string;
  service: string;
}
