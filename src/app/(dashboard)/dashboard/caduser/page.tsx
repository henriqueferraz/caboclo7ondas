import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    DashboardPage,
    DashboardPageHeader,
    DashboardPageHeaderTitle,
    DashboardPageMain
} from "@/components/dashboard/page"
import { FormCadUser_01 } from "@/components/dashboard/form_caduser_01"
import { FormCadUser_02 } from "@/components/dashboard/form_caduser_02"
import { FormCadUser_03 } from "@/components/dashboard/form_caduser_03"

export default function Component() {
    return (
        <DashboardPage>
            <DashboardPageHeader>
                <DashboardPageHeaderTitle className='flex justify-between'>
                    Cadastro de Médiuns
                </DashboardPageHeaderTitle>
            </DashboardPageHeader>
            <DashboardPageMain>
                <Card className="max-w-full">
                    <CardHeader>
                        <CardTitle>Cadastro de Médiuns</CardTitle>
                        <CardDescription>Por favor, informe os campos abaixo.</CardDescription>
                    </CardHeader>
                    <CardContent className="max-w-full">
                        <div className="flex flex-row">
                            <div className="w-1/2">
                                <Label htmlFor="name">Nome</Label>
                                <Input id="name" placeholder="Informe o nome completo" />
                            </div>
                            <div className="w-1/2 ml-5">
                                <Label htmlFor="email">E-mail</Label>
                                <Input id="email" type="email" placeholder="Informe o e-mail" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <div className="w-1/2">
                                <Label htmlFor="cpf">CPF</Label>
                                <Input id="cpf" placeholder="Informe o CPF" />
                            </div>
                            <div className="w-1/2 ml-5">
                                <Label htmlFor="cep">CEP</Label>
                                <Input id="cpt" placeholder="Informe o número do cep" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <div className="w-3/4">
                                <Label htmlFor="endereco">Endereço</Label>
                                <Input
                                    id="endereco"
                                    className=" bg-gray-100"
                                    disabled
                                    placeholder="Rua Santa Felicidade" />
                            </div>
                            <div className="w-1/4 ml-5">
                                <Label htmlFor="numero">Número</Label>
                                <Input id="numero" placeholder="Informe o número do endereço" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <div className="w-2/6">
                                <Label htmlFor="bairro">Bairro</Label>
                                <Input
                                    id="bairro"
                                    className=" bg-gray-100"
                                    disabled
                                    placeholder="Itinga" />
                            </div>
                            <div className="w-2/6 ml-5">
                                <Label htmlFor="municipio">Município</Label>
                                <Input
                                    id="municipio"
                                    className=" bg-gray-100"
                                    disabled
                                    placeholder="Araquari" />
                            </div>
                            <div className="w-2/6 ml-5">
                                <Label htmlFor="estado">Estado</Label>
                                <Input
                                    id="estado"
                                    className=" bg-gray-100"
                                    disabled
                                    placeholder="SC" />
                            </div>
                        </div>
                        <div className="flex flex-row mt-3">
                            <div className="w-2/6">
                                <Label htmlFor="situacao">Situação</Label>
                                <FormCadUser_01 />
                            </div>
                            <div className="w-2/6 ml-5">
                                <Label htmlFor="assistencia">Assistência</Label>
                                <FormCadUser_02 />
                            </div>
                            <div className="w-2/6 ml-5">
                                <Label htmlFor="organização">Responsável</Label>
                                <FormCadUser_03 />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">
                            Incluir Médium
                        </Button>
                    </CardFooter>
                </Card>
            </DashboardPageMain>
        </DashboardPage>
    )
}