import React from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import NavBar from './NavBar';

import source from "../data/featureData_1.json";
import feat from "../data/featureData_2.json";


defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Features() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', marginBottom:"100px" }}>
            {/* <NavBar /> */}
            <div className="dataCard categoryCard" style={{ height: '1000%', width: '400px', overflow: 'auto'  }}>
                <Doughnut
                    data={{
                        labels: source.sort((a, b) => a.feature_type.localeCompare(b.feature_type)).map((data) => data.feature_type),
                        datasets: [
                            {
                                label: "Count",
                                data: source.map((data) => data.count),
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
                                text: "Features by Category",
                            },
                            tooltip: {
                                callbacks: {
                                    afterLabel: function () {
                                        return ["\n"];
                                    },
                                    afterBody: function (item) {
                                        const featureType = item[0].label;
                                        const features = source.find((data) => data.feature_type === featureType).features;
                                        return ['Features:'].concat(features);
                                    },
                                },
                            },
                        },
                    }}
                />
            </div>
            <div style={{ width: '90%', overflow: 'auto', marginTop: '100px' }}>
                {feat.map((item, index) => (
                    <div key={index}>
                        <h3 style={{ fontSize: '20px', marginTop: '25px', color: '#483D8B' }}>{item.feature}</h3>
                        <p style={{ fontSize: '15px' }}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
