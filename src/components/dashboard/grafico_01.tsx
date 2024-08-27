"use client"
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis
}
    from "recharts"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
}
    from "@/components/ui/chart"
const chartData = [
    { month: "Janeiro", presenca: 60, falta: 40 },
    { month: "Fevereiro", presenca: 50, falta: 50 },
    { month: "Março", presenca: 84, falta: 16 },
    { month: "Abril", presenca: 73, falta: 27 },
    { month: "Maio", presenca: 78, falta: 22 },
    { month: "Junho", presenca: 89, falta: 11 },
    { month: "julho", presenca: 70, falta: 30 },
    { month: "Agosto", presenca: 66, falta: 34 },
    { month: "Setembro", presenca: 0, falta: 0 },
    { month: "Outubro", presenca: 0, falta: 0 },
    { month: "Novembro", presenca: 0, falta: 0 },
    { month: "Dezembro", presenca: 0, falta: 0 },
]

const chartConfig = {
    presenca: {
        label: "Presença em %",
        color: "#2563eb",
    },
    falta: {
        label: "Falta em %",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export default function GraficoComponent01() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                {/* Linha Cartesiana */}
                <CartesianGrid vertical={false} />
                {/* Legenda na lina X */}
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                {/* Legenda na Nos blocos */}
                <ChartTooltip content={<ChartTooltipContent />} />
                {/* Legenda das cores dos blocos */}
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="presenca" fill="var(--color-presenca)" radius={4} />
                <Bar dataKey="falta" fill="var(--color-falta)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}