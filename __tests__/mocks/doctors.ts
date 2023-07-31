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
  educations: [
    {
      EducationInstitutionLogoUrl: 'https://example.com/university.jpg',
      Degree: 'MD',
      EducationInstitution: 'University of Medicine',
      FieldOfStudy:"neurology",
      StartYear:  new Date(2005, 0, 1),
      GraduationYear:  new Date(2010, 0, 1),
    },
  ],
}
export const mockDoctors : Doctor[] = [
  doctor 
];
export const mockDoctorData = {
  value: doctor,
};

