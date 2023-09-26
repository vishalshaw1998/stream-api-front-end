import React from "react";
/**
 * This component will give Year and Month DropDown
 * When a user selects the it will give first day of the month as result
 */

const YearAndMonthSelectDropDown = ({
  setYear,
  setMonth,
  year,
  month,
}: {
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  year: number;
  month: number;
}) => {
  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(e.target.value));
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(parseInt(e.target.value));
  };

  return (
    <div>
      <select value={year} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select value={month} onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearAndMonthSelectDropDown;
