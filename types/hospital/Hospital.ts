export default interface Institution {
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
    institutionAvailability: InstitutionAvailability;
    address: Address;
    services: string[];
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
  
  interface InstitutionAvailability {
    startDay: string;
    endDay: string;
    opening: string;
    closing: string;
    twentyFourHours: boolean;
    id: string;
  }
  