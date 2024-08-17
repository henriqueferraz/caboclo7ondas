export type Users = {
    id: string
    name: string
    email: string
    emailVerified?: string
    image?: string
    status: "Pendente" | "Ativo" | "Afastado" | "Excluído"
    fone?: string
    strite?: string
}
