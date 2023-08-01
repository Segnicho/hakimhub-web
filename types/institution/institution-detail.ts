export interface HospitalDetailResponse {
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
  status: string;
  logoUrl: string;
  bannerUrl: string;
  allEducationalInstitutions:AllEducationalInstitutions[];
  allSpecialities:string[];
  institutionAvailability: InstitutionAvailability[];
  address: Address;
  services: string[];
  photos: string[];
  doctors: Doctor[];
  id: string;
  }
  export type AllEducationalInstitutions={
  institutionName:string;
  logoUrl:string;
  }
  export type Doctor = {
    photoUrl: string;
    about: string;
    specialities: string[];
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
  
  export type FilterDoctors = {
  hospitalId: string;
  speciality: string[];
  education: string;
  experience: string;
  }
  
  export type FilteredDoctorsResponse = {
    isSuccess: boolean;
    value: FilteredDoctors[];
    error: string;
  }
  export type FilteredDoctors = {
  fullName: string;
  about: string;
  gender: string;
  email: string | null;
  photoUrl: string;
  yearsOfExperience: number;
  mainInstitutionId: string;
  mainInstitutionName: string;
  specialities: string[];
  educations: Education[];
  experiences: Experience[];
  id: string;
  };
  
  export type Education = {
  educationInstitution: string;
  startYear: string;
  graduationYear: string;
  degree: string;
  fieldOfStudy: string;
  educationInstitutionLogoUrl: string | null;
  id: string;
  };
  
  export type Experience = {
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  institutionId: string;
  institutionName: string;
  id: string;
  };
  
