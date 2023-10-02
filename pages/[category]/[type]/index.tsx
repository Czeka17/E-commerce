import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";
import { Item } from "@/lib/item";
function TypePage() {
	const router = useRouter();
	const [slug, setSlug] = useState<string | string[]>(router.query.type || "");
	const [filteredItems, setFilteredItems] = useState<Item[]>([]);

	const [category, setCategory] = useState<string | string[]>(
		router.query.category || ""
	);

	useEffect(() => {
		if (router.query.type) {
			setSlug(router.query.type);
		}
		if (router.query.category) {
			setCategory(router.query.category);
		}
	}, [router.query.type]);

	useEffect(() => {
		fetch("/api/clothesByType", {
			method: "POST",
			body: JSON.stringify({ type: slug, category: category }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setFilteredItems(data);
			})
			.catch((error) => {
				console.error("Error fetching items:", error);
			});
	}, [slug]);

	return (
		<section className='max-w-[1200px] m-auto'>
			<Navigation />
			<h2 className='text-3xl font-semibold p-4'>Category: {slug}</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
				{filteredItems &&
					filteredItems.map((item) => (
						<Link
							href={`/${category}/${item.type}/${item._id}`}
							key={item._id}
						>
							<div className='bg-white p-6 shadow-md rounded-lg hover:scale-105 duration-200 h-[100%]'>
								<Image
									src={item.imageUrl}
									alt={item.name}
									width={300}
									height={400}
									className='w-full h-auto mb-4 rounded-md'
								/>

								<h2 className='text-xl font-semibold'>{item.name}</h2>
								{item.sale ? <div className="mt-2"><p className='text-gray-500 line-through'>
									${item.price.toFixed(2)}
								</p><p className='text-green-600 font-semibold'>
									${parseFloat((item!.price - (item!.price * (item!.sale / 100))).toFixed(2))}
								</p></div> :<p className='text-green-600 font-semibold mt-2'>
									${item.price.toFixed(2)}
								</p>}
							</div>
						</Link>
					))}
			</div>
		</section>
	);
}

export default TypePage;
