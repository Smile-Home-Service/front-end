"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import serviceArea from "@/utils/data/service-area.json";

const Map = dynamic(() => import("@/components/map/service.area.map"), {
  ssr: false,
});

export default function ServiceAreaPage() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const states = Object.keys(serviceArea.states);
  const cities = state ? Object.keys(serviceArea.states[state].cities) : [];

  const selectedCity =
    state && city ? serviceArea.states[state].cities[city] : null;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Service Areas</h1>

      {/* Filters */}
      <div className="flex gap-4">
        <select disabled value="Nepal" className="border p-2">
          <option>Nepal</option>
        </select>

        <select
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setCity("");
          }}
          className="border p-2"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!state}
          className="border p-2"
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Map */}
      {selectedCity && (
        <Map
          lat={selectedCity.lat}
          lng={selectedCity.lng}
          label={`${city}, ${state}`}
        />
      )}
    </div>
  );
}
