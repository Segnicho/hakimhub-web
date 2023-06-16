export interface Data {
Address: Address;
InstitutionAvailability: InstitutionAvailability;
Doctors: Doctor[];
Photos:Photo[];
}

export type Doctor = {
  Photo: Photo;
  About: string;
  Specialities: Speciality[];
  CareerStartTime: string;
  Gender: number;
  Experiences: any[]; 
  FullName: string;
  Educations: any[]; 
  DoctorAvailabilities: DoctorAvailability[];
};

export interface Address {
Region: string;
Woreda: string;
Zone: string;
Summary: string;
Latitude: number;
Longtiude: number;
Country: string;
City: string;
SubCity: string;
}

export type Speciality ={
    Name: string;
    Description: string;
  };
  
export type Photo = {
    Id: string;
    Url: string;
  };
  
export type DoctorAvailability = {
    // Define the properties for doctor availability if available
  };
  
  

export interface InstitutionAvailability {
TwentyFourHours: boolean;
StartDay: number;
EndDay: number;
Opening: string;
Closing: string;
}

