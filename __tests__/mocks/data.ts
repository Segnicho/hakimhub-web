import { AllEducationalInstitutions } from '@/types/institution/institution-detail';
import { HospitalCardProps } from '@/components/hospital-detail/HospitalDetailCard';

export const mockDoctor = {
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
    educations: [
      {
        educationInstitution: "Sample University",
        startYear: "2010",
        graduationYear: "2016",
        degree: "Doctor of Medicine",
        fieldOfStudy: "Medicine",
        educationInstitutionLogoUrl: null,
        id: "education-id-1",
      },
    ],
    experiences: [
      {
        position: "Cardiologist",
        description: "Worked as a cardiologist at Example Clinic",
        startDate: "2016-01-01",
        endDate: "2020-12-31",
        institutionId: "institution-id-1",
        institutionName: "Example Clinic",
        id: "experience-id-1",
      },
      {
        position: "Neurologist",
        description: "Currently working as a neurologist at Sample Hospital",
        startDate: "2021-01-01",
        endDate: "2023-07-31",
        institutionId: "institution-id-2",
        institutionName: "Sample Hospital",
        id: "experience-id-2",
      },
    ],
  };

export const mockDoctors = {
    value: [
        {
          id: 'doctor-1',
          fullName: 'John Doe',
          specialities: ['Cardiology', 'Neurology'],
        },
        {
          id: 'doctor-2',
          fullName: 'Jane Smith',
          specialities: ['Dermatology', 'Ophthalmology'],
        },
      ],
}


export const mockAllEducationalInstitutions: AllEducationalInstitutions[] = [
  { institutionName: 'University A', logoUrl: 'sample-url' },
  { institutionName: 'University B', logoUrl: 'sample-url' },
  { institutionName: 'University C', logoUrl: 'sample-url'},
];

export const mockAllSpecialities = ['Cardiology', 'Neurology', 'Dermatology', 'Ophthalmology'];

export const mockContactCardData = {
  website: "https://example.com",
  phoneNumber: "123-456-7890",
};

export const mockGalleryPhotos = [
  "https://example.com/photo1.jpg",
  "https://example.com/photo2.jpg",
  "https://example.com/photo3.jpg",
];

export const mockHospitalDetailCardData: HospitalCardProps = {
  image: "https://example.com/path/to/image.jpg",
  name: "Hospital Name",
  status: "Open",
  logo: "https://example.com/path/to/logo.jpg",
};