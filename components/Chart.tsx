"use client";

import React from "react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { calculatePercentage, convertFileSize } from "@/lib/utils";

const chartConfig = {
  size: {
    label: "Size",
  },
  used: {
    label: "Used",
    color: "white",
  },
} satisfies ChartConfig;

export const Chart = ({ used = 0 }: { used: number }) => {
  // Ensure used is a valid number
  const safeUsed = typeof used === 'number' && !isNaN(used) && used >= 0 ? used : 0;
  const percentage = calculatePercentage(safeUsed);
  const safePercentage = typeof percentage === 'number' && !isNaN(percentage) ? percentage : 0;
  
  const chartData = [{ storage: "used", size: safeUsed, fill: "white" }];

  // Fallback component for error cases
  const ChartFallback = () => (
    <Card className="chart">
      <CardContent className="flex-1 p-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/20 flex items-center justify-center mb-3 sm:mb-4">
            <span className="text-xl sm:text-2xl font-bold text-white">0%</span>
          </div>
          <p className="text-white/70 text-sm sm:text-base">Space used</p>
        </div>
      </CardContent>
      <CardHeader className="chart-details">
        <CardTitle className="chart-title">Available Storage</CardTitle>
        <CardDescription className="chart-description">
          0 GB / 2GB
        </CardDescription>
      </CardHeader>
    </Card>
  );

  // Error handling for chart rendering
  try {
    return (
      <Card className="chart">
        <CardContent className="flex-1 p-0">
          <ChartContainer config={chartConfig} className="chart-container">
            <RadialBarChart
              data={chartData}
              startAngle={90}
              endAngle={Math.min(safePercentage + 90, 450)} // Cap at 450 to prevent overflow
              innerRadius={60}
              outerRadius={80}
              className="sm:innerRadius-80 sm:outerRadius-110"
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="polar-grid"
                polarRadius={[66, 54]}
              />
              <RadialBar dataKey="size" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="chart-total-percentage"
                          >
                            {safePercentage > 0 
                              ? safePercentage.toString().replace(/^0+/, "") || "0"
                              : "0"}
                            %
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-white/70"
                          >
                            Space used
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <CardHeader className="chart-details">
          <CardTitle className="chart-title">Available Storage</CardTitle>
          <CardDescription className="chart-description">
            {safeUsed > 0 ? convertFileSize(safeUsed) : "0 GB"} / 2GB
          </CardDescription>
        </CardHeader>
      </Card>
    );
  } catch (error) {
    console.error("Chart rendering error:", error);
    return <ChartFallback />;
  }
};
