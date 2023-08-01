import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterComponent from '@/components/doctor/FilterComponent';

describe('FilterComponent', () => {
  test('renders FilterComponent correctly with no selected value', () => {
    const label = 'Education';
    const selected = '';
    const values = ['Education1', 'Education2', 'Education3'];
    const onSelectedChange = jest.fn();

    render(
      <FilterComponent
        label={label}
        selected={selected}
        values={values}
        onSelectedChange={onSelectedChange}
      />
    );

    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('select')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'select' }));

    const dropdownElements = screen.getAllByText(/select/);

    expect(dropdownElements.length).toBe(1);
    fireEvent.click(screen.getByText('Education2'));
    expect(onSelectedChange).toHaveBeenCalledWith('Education2');
  });

});
