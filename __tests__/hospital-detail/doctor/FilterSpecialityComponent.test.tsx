import { render, screen, fireEvent } from '@testing-library/react';
import FilterSpecialityComponent from '@/components/doctor/FilterSpecialityComponent';

test('renders FilterSpecialityComponent correctly with no selected value', () => {
    const label = 'Speciality';
    const selected: string[] = [];
    const values = ['Speciality1', 'Speciality2', 'Speciality3'];
    const setSpeciality = jest.fn();
    const setSelectedSpeciality = jest.fn();
  
    render(
      <FilterSpecialityComponent
        label={label}
        selected={selected}
        values={values}
        setSpeciality={setSpeciality}
        setSelectedSpeciality={setSelectedSpeciality}
      />
    );
  
    expect(screen.getByText('Speciality')).toBeInTheDocument();
    expect(screen.getByText('select')).toBeInTheDocument();
  
    fireEvent.click(screen.getByRole('button'));
  
    expect(screen.getByText('Speciality1')).toBeInTheDocument();
    expect(screen.getByText('Speciality2')).toBeInTheDocument();
    expect(screen.getByText('Speciality3')).toBeInTheDocument();
  
});
