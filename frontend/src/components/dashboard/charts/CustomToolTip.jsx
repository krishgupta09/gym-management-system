import React from "react";

const CustomToolTip = (props) => {
  const { active, payload } = props;

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  console.log(payload);
  

  return <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 backgroundColor: data.color">
    <div ></div>
    <h3 className="font-semibold text-gray-800">{payload[0].name} Plan</h3>
    <p className="text-sm text-gray-600 mt-2">Members:{""} <span className="font-bold text-gray-900">{payload[0].value}</span></p>
  </div>;
};

export default CustomToolTip;
