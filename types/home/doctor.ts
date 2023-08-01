interface DoctorResponse {
    isSuccess: boolean;
    value: Doctor | null;
    error: string | null;
  }
  
 interface Doctor {
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
  }
  
  interface Education {
    EducationInstitution:string;
    StartYear:Date;
    Degree:string;
    FieldOfStudy:string;
    EducationInstitutionLogoUrl:string;
    GraduationYear:Date;
  }
  
  interface Experience {
    year: string;
    place: string;
  }
  