import { Sheet } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import Link from "next/link"

export const CartSidebar = () => {

    return (
        <div>
            <Sheet>
                <Link href='/dashboard'>
                    <Button className="relative">
                        <RocketIcon className="mr-2" />
                        <p>Admin</p>
                    </Button>
                </Link>
            </Sheet>
        </div>
    )
}