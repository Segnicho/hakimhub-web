export default interface HospitalDetailResponse {
    isSuccess: boolean;
    value: Hospital;
    error: string;
  }

export interface Hospital {
  institutionName: string;
  branchName: string;
  website: string;
  phoneNumber: string;
  summary: string;
  establishedOn: string;
  rate: number;
  status: boolean;
  logoUrl: string;
  bannerUrl: string;
  allEducationalInstitutions:[];
  allSpecialities:string[];
  institutionAvailability: InstitutionAvailability[];
  address: Address[];
  services: string[];
  photos: string[];
  doctors: Doctor[];
  id: string;
}
export type AllEducationalInstitutions={
  id:string;
  institutionName:string;
  logoUrl:string;
}
export type Doctor = {
    photoUrl: string;
    about: string;
    specialities: Speciality[];
    gender: String;
    yearsOfExperience: number; 
    fullName: string;
    email:string;
    id:string;
    mainInstitutionId:string;
    mainInstitutionName:string;

};

export type Address = {
    country: string;
    region: string;
    zone: string;
    woreda: string;
    city: string;
    subCity: string;
    longitude: number;
    latitude: number;
    summary: string;
    id: string;
}

export type Speciality = {
    Name: string;
    Description: string;
};
  
export type Photo = {
    Id: string;
    Url: string;
};
  
export type InstitutionAvailability = {
    startDay: string;
    endDay: string;
    opening: string;
    closing: string;
    twentyFourHours: boolean;
    id: string;
}

