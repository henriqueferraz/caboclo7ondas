type Props = {
    class_name: string
}

export const Logo = ({ class_name }: Props) => {
    return (
        <div className={class_name}>Tenda de Umbanda <span className=" font-bold">Caboclo 7 Ondas</span></div>
    )
}