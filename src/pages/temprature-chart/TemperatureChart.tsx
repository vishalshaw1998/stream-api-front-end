/**
 * Display at least one thermometer temperature history in a chart for a 1-year timespan
 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import YearAndMonthSelectDropDown from "./YearAndMonthDropDown.tsx";
import DataNotFound from "../data-not-found/DataNotFound.tsx";

export const TemperatureChart = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any | null>(null);
  const [year, setYear] = useState<number>(2021);
  const [month, setMonth] = useState<number>(1);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<any>("/temperatures", {
        baseURL: "http://localhost:3001",
        params: {
          startAt: new Date(year, month - 1, 1).toISOString(),
        },
      });

      setData(response.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month]);

  if (loading) {
    return <div style={{ margin: "10%" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ margin: "10%" }}>{error}</div>;
  }

  if (!data) {
    return;
  }

  const dataToRender = data.map((item: any) => {
    return {
      name: item._id,
      avgTemp: item.avgTemp,
    };
  });

  return (
    <div style={{ margin: "10%" }}>
      <h1>Temperature Chart</h1>
      <p>
        Display at least one thermometer temperature history in a chart for a
        1-year timespan
      </p>
      <div>
        <>
          <YearAndMonthSelectDropDown
            month={month}
            year={year}
            setMonth={setMonth}
            setYear={setYear}
          />
        </>
        {dataToRender.length === 0 ? (
          <DataNotFound />
        ) : (
          <LineChart
            width={1000}
            height={500}
            data={dataToRender}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="avgTemp"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        )}
      </div>
    </div>
  );
};
