import { Institution } from "@/types/chat/chat-types";
export const hospital: Institution ={
  institutionName: "Yekatit Hospital",
  branchName: "",
  website: "https://example.com/hospital2",
  phoneNumber: "9876543210",
  summary: "Summary of Hospital 2",
  establishedOn: "2021-02-01",
  rate: 3.8,
  status: "Open",
  allEducationalInstitutions: null,
  allSpecialities: null,
  logoUrl: "https://example.com/hospital2-logo.png",
  bannerUrl: "https://example.com/hospital2-banner.png",
  institutionAvailability: {
    startDay: "Tuesday",
    endDay: "Saturday",
    opening: "09:00",
    closing: "19:00",
    twentyFourHours: false,
    id: "availability_id_2",
  },
  address: {
    country: "Ethiopia",
    region: "Region 2",
    zone: "Zone 2",
    woreda: "Woreda 2",
    city: "City 2",
    subCity: "Sub City 2",
    longitude: 10.1234,
    latitude: 39.5678,
    summary: "Address summary for Hospital 2",
    id: "address_id_2",
  },
  services: ["Service 4", "Service 5", "Service 6"],
  photos: ["https://samplehospital.com/photo1.jpg", "https://samplehospital.com/photo2.jpg"], // Copied from the first object
  doctors: [
    {
      fullName: "John Doe",
      about: "Experienced doctor",
      gender: "Male",
      email: "john.doe@example.com",
      photoUrl: "https://samplehospital.com/doctors/john-doe.jpg",
      yearsOfExperience: 10,
      mainInstitutionId: "main-institution-id",
      mainInstitutionName: "Sample Hospital",
      specialities: ["Cardiology", "Neurology"],
      id: "doctor-id-1",
      educations:[]
    },
    {
      fullName: "Jane Smith",
      about: "Specialized in Pediatrics",
      gender: "Female",
      email: "jane.smith@example.com",
      photoUrl: "https://samplehospital.com/doctors/jane-smith.jpg",
      yearsOfExperience: 8,
      mainInstitutionId: "main-institution-id",
      mainInstitutionName: "Sample Hospital",
      specialities: ["Pediatrics"],
      id: "doctor-id-2",
      educations:[]
    },
  ],
  id: "hospital-id",
}

export const hospitalsResponse = {
  value: [
    {
      institutionName: "Paulos Hospital",
      branchName: "",
      website: "https://example.com/hospital1",
      phoneNumber: "1234567890",
      summary: "Summary of Hospital 1",
      establishedOn: "2021-01-01",
      rate: 4.5,
      status: "Open",
      logoUrl: "https://example.com/hospital1-logo.png",
      bannerUrl: "https://example.com/hospital1-banner.png",
      institutionAvailability: {
        startDay: "Monday",
        endDay: "Friday",
        opening: "08:00",
        closing: "18:00",
        twentyFourHours: false,
        id: "availability_id_1",
      },
      address: {
        country: "Ethiopia",
        region: "Region 1",
        zone: "Zone 1",
        woreda: "Woreda 1",
        city: "City 1",
        subCity: "Sub City 1",
        longitude: 9.1234,
        latitude: 38.5678,
        summary: "Address summary for Hospital 1",
        id: "address_id_1",
      },
      services: ["Service1", "Service 2", "Service 3"],
      id: "hospital_id_1",
    },
    hospital
  ],
};

 