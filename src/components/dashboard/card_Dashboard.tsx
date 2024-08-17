import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
}
    from '@/components/ui/card'
import {
    ThumbsDownIcon,
    ThumbsUpIcon,
    UserCheck,
    Users
}
    from 'lucide-react'

type Props = {
    nome_titulo: string
    nome_conteudo: string
    nome_paragrafo: string
    cor_card: string
}

export default function CardDashboard({ nome_conteudo, nome_paragrafo, nome_titulo, cor_card }: Props) {
    return (
        <div>
            <Card x-chunk="dashboard-01-chunk-0" className={cor_card}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-white">
                        {nome_titulo}
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-white">{nome_conteudo}</div>
                    <p className="text-xs text-muted-foreground">
                        {nome_paragrafo}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}