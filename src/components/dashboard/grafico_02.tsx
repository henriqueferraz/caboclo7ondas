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
    { month: "Janeiro", atendimentos: 60 },
    { month: "Fevereiro", atendimentos: 50 },
    { month: "Março", atendimentos: 84 },
    { month: "Abril", atendimentos: 73 },
    { month: "Maio", atendimentos: 78 },
    { month: "Junho", atendimentos: 89 },
    { month: "julho", atendimentos: 70 },
    { month: "Agosto", atendimentos: 66 },
    { month: "Setembro", atendimentos: 0 },
    { month: "Outubro", atendimentos: 0 },
    { month: "Novembro", atendimentos: 0 },
    { month: "Dezembro", atendimentos: 0 },
]

const chartConfig = {
    atendimentos: {
        label: "Atendimentos ->",
        color: "#42f55d",
    },
} satisfies ChartConfig

export default function GraficoComponent02() {

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
                <Bar dataKey="atendimentos" fill="var(--color-atendimentos)" radius={8} />
            </BarChart>
        </ChartContainer>
    )
}