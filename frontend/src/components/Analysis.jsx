import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
// import log1 from "..data/categories.json";
// import log2 from "..data/company_size.json";
// import log3 from "..data/meets_requirements.json";
// import log4 from "..data/nps.json";
// import log5 from "..data/product_role.json";

import NavBar from './NavBar';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const data = {
    "Buyer Intent Data Providers": 62,
    "Online Reputation Management": 21,
    "Technology Review Platforms": 2
};

const comp = {
    "201-500 employees": 2,
    "2-10 employees": 4,
    "51-200 employees": 7,
    "11-50 employees": 5,
    "501-1,000 employees": 1
};

const pieData = {
    "9.0": 13,
    "10.0": 37,
    "7.0": 3,
    "8.0": 10,
    "5.0": 2,
    "6.0": 1
};


function Analysis() {
    const labels = Object.keys(data);
    const counts = Object.values(data);

    const labels2 = Object.keys(comp);
    const counts2 = Object.values(comp);

    const pieLabels = Object.keys(pieData);
    const pieCounts = Object.values(pieData);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '200vh', }}>
            {/* <NavBar /> */}
            <div className="dataCard categoryCard" style={{ height: '400px', width: '400px', overflow: "auto", marginLeft:"20px" }}>
                <Doughnut
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: "Count",
                                data: counts,
                                backgroundColor: [
                                    "rgba(43, 63, 229, 0.8)",
                                    "rgba(250, 192, 19, 0.8)",
                                    "rgba(253, 135, 135, 0.8)",
                                    "rgba(75, 192, 192, 0.8)",
                                    "rgba(153, 102, 255, 0.8)",
                                    "rgba(255, 159, 64, 0.8)",
                                    "rgba(255, 205, 86, 0.8)",
                                    "rgba(54, 162, 235, 0.8)"
                                ],
                                borderColor: [
                                    "rgba(43, 63, 229, 0.8)",
                                    "rgba(250, 192, 19, 0.8)",
                                    "rgba(253, 135, 135, 0.8)",
                                    "rgba(75, 192, 192, 0.8)",
                                    "rgba(153, 102, 255, 0.8)",
                                    "rgba(255, 159, 64, 0.8)",
                                    "rgba(255, 205, 86, 0.8)",
                                    "rgba(54, 162, 235, 0.8)"
                                ],
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            title: {
                                text: "Purposes for which G2 Marketing Solution is Used",
                            },
                        },
                    }}
                />
            </div>

            <div style={{ height: '400px', width: '400px', overflow: "auto", marginTop: "30px", marginLeft:"20px" }}>
                <Bar
                    data={{
                        labels: labels2,
                        datasets: [
                            {
                                label: "No. of Companies",
                                data: counts2,
                                backgroundColor: [
                                    "rgba(43, 63, 229, 0.8)",
                                    "rgba(250, 192, 19, 0.8)",
                                    "rgba(253, 135, 135, 0.8)",
                                    "rgba(75, 192, 192, 0.8)",
                                    "rgba(153, 102, 255, 0.8)"
                                ],
                                borderColor: [
                                    "rgba(43, 63, 229, 0.8)",
                                    "rgba(250, 192, 19, 0.8)",
                                    "rgba(253, 135, 135, 0.8)",
                                    "rgba(75, 192, 192, 0.8)",
                                    "rgba(153, 102, 255, 0.8)"
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}
                    options={{
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                text: "Customer organization Size of G2 Marketing Solution Users",
                            },
                        },
                    }}
                />
            </div>

            <div style={{ height: '400px', width: '400px', overflow: "auto", marginTop: "30px", marginLeft:"20px" }}>
                <Pie
                    data={{
                        labels: pieLabels,
                        datasets: [
                            {
                                label: "Score Frequency",
                                data: pieCounts,
                                backgroundColor: [
                                    "rgba(43, 63, 229, 0.8)",
                                    "rgba(250, 192, 19, 0.8)",
                                    "rgba(253, 135, 135, 0.8)",
                                    "rgba(75, 192, 192, 0.8)",
                                    "rgba(153, 102, 255, 0.8)",
                                    "rgba(255, 159, 64, 0.8)"
                                ],
                                borderColor: [
                                    "rgba(43, 63, 229, 0.8)",
                                    "rgba(250, 192, 19, 0.8)",
                                    "rgba(253, 135, 135, 0.8)",
                                    "rgba(75, 192, 192, 0.8)",
                                    "rgba(153, 102, 255, 0.8)",
                                    "rgba(255, 159, 64, 0.8)"
                                ],
                                borderWidth: 1,
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            title: {
                                text: "NPS Data",
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default Analysis;