import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductsTab } from "@/components/products/tab";


export default function Page() {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<Header />
			<div className="mx-3">
				<ProductsTab />
			</div>
			<Footer />
		</div>
	)
}
