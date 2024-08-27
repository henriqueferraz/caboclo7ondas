import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function FormCadUser_03() {
    return (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Selecione o responsável" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Responsável</SelectLabel>
                    <SelectItem value="jorge">Jorge da silva</SelectItem>
                    <SelectItem value="israel">Israel de Jesus Gorges</SelectItem>
                    <SelectItem value="tania">Tânia</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
