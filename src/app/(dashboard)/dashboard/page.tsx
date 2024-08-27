import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderNav,
    DashboardPageHeaderTitle,
    DashboardPageMain,
} from '@/components/dashboard/page'
import CardDashboard from '@/components/dashboard/card_Dashboard'
import GraficoComponent01 from '@/components/dashboard/grafico_01'
import GraficoComponent02 from '@/components/dashboard/grafico_02'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Page() {

    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle className='flex justify-between'>
                    Principal
                </DashboardPageHeaderTitle>
                <DashboardPageHeaderNav>
                    <DashboardPageHeaderNav>
                        <Button variant="outline" size="sm">
                            <PlusIcon className="w-4 h-4 mr-3" />
                            <Link href="/dashboard/caduser">Médium</Link>
                        </Button>
                    </DashboardPageHeaderNav>
                </DashboardPageHeaderNav>
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
                <div className="flex w-full h-40">
                    <GraficoComponent01 />
                </div>
                <div className="flex w-full h-40 mt-10">
                    <GraficoComponent02 />
                </div>
            </DashboardPageMain >
        </DashboardPage >
    )
}

