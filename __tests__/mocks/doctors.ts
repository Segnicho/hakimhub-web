import { Doctor } from "@/types/chat/chat-types";
const doctor: Doctor = 
{
  fullName: 'John Doe',
  specialities: ["Cardiology"],
  mainInstitutionName: 'ABC Hospital',
  yearsOfExperience: 10,
  photoUrl: 'https://example.com/doctor.jpg',
  gender:'male',
  email:"johon@uni.com",
  mainInstitutionId:"222",
  id:'23',
  about: 'Dr. John Doe is a skilled doctor...',
}
export const mockDoctors : Doctor[] = [
  doctor 
];
export const mockDoctorData = {
  value: doctor,
};

