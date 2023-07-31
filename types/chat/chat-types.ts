export default interface ServiceType {
    id: number
    title: string
    detail: string
  }

export interface ChatResponse {
    isSuccess: boolean;
    value: {
      reply: string;
      institutions: Institution[];
    };
  }
  
export interface Institution {
    institutionName: string;
    branchName: string;
    website: string;
    phoneNumber: string;
    summary: string;
    establishedOn: string;
    rate: number;
    status: string;
    allEducationalInstitutions: null;
    allSpecialities: null;
    logoUrl: string;
    bannerUrl: string;
    institutionAvailability: InstitutionAvailability;
    address: Address;
    services: string[];
    photos: string[];
    doctors: Doctor[];
    id: string;
  }
  
  interface InstitutionAvailability {
    startDay: string;
    endDay: string;
    opening: string;
    closing: string;
    twentyFourHours: boolean;
    id: string;
  }
  
  interface Address {
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
  interface Education {
    EducationInstitution:string;
    StartYear:Date;
    Degree:string;
    FieldOfStudy:string;
    EducationInstitutionLogoUrl:string;
    GraduationYear:Date;
  }
 export interface Doctor {
    fullName: string;
    about: string;
    gender: string;
    email: string | null;
    photoUrl: string;
    yearsOfExperience: number;
    mainInstitutionId: string;
    mainInstitutionName: string;
    specialities: string[];
    id: string;
    educations:Education[]
  }
 
  
  export interface MessageBody {
    message:string,
    Address:string,
    isNewChat:boolean
  }
  export interface IpState {
    ipAddress: string ;
  }