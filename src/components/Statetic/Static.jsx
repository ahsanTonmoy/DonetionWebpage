import { Chart } from "chart.js/auto";
import { useEffect } from "react";
import { useRef } from "react";
import './static.css'
import { getStordData } from "../utility/localStore";

const Static = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const storedId = getStordData();
    const stored = parseInt(storedId)

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const mychartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(mychartRef, {
      type: 'pie',
      data: {
        labels: ['Your Donation', 'Total Donation'],
        datasets: [
          {
            data: [stored, 12],
            
            backgroundColor: [
              '#00C49F',
              '#FF444A'
            ],
          }
        ]
      }
    })

    return ()=> {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    }

  }, [])

  return (
    <div className="my-24 flex justify-center">
     <div className="py-20"> <canvas ref={chartRef}  /></div>
    </div>
  );
};

export default Static;