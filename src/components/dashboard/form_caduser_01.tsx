import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function FormCadUser_01() {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selecione a situação" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Situação</SelectLabel>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="afastado">Afastado</SelectItem>
                    <SelectItem value="inativo">Inativo</SelectItem>
                    <SelectItem value="Expulso">Expulso</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
