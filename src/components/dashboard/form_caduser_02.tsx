import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function FormCadUser_02() {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selecione tipo de assitência" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Assitência</SelectLabel>
                    <SelectItem value="cura">Cura</SelectItem>
                    <SelectItem value="bio">Bioenergia</SelectItem>
                    <SelectItem value="consulta">Consultas</SelectItem>
                    <SelectItem value="naoparticipa">Não Participa</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
