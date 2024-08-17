"use client"
import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from '@/components/dashboard/page'

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import CardDashboard from '@/components/dashboard/card_Dashboard'

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export default async function Page() {

    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle>Criar Usuário</DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <CardDashboard
                        cor_card='bg-teal-400'
                        nome_titulo='Médiuns Cadastrados'
                        nome_conteudo='123'
                        nome_paragrafo='Cadastrados no sistema'
                    />
                    <CardDashboard
                        cor_card='bg-yellow-400'
                        nome_titulo='Médiuns Ativos'
                        nome_conteudo='98'
                        nome_paragrafo='Médiuns ativos no sistema'
                    />
                    <CardDashboard
                        cor_card='bg-green-400'
                        nome_titulo='Mensalidades em dia'
                        nome_conteudo='87'
                        nome_paragrafo='Médiuns em dia'
                    />
                    <CardDashboard
                        cor_card='bg-red-400'
                        nome_titulo='Mensalidades em atrazo'
                        nome_conteudo='11'
                        nome_paragrafo='Médiuns em atrazo'
                    />
                </div>
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-flow-row">
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
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                        </BarChart>
                    </ChartContainer>
                </div>
            </DashboardPageMain>
        </DashboardPage>
    )
}

