import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <h1 className="text-5xl">Home Page</h1>

            <section className="flex flex-col gap-10 mt-20 items-center">
                <Link href="/products?showDialog=y" className="text-3xl underline">Go to Products with modal</Link>

                <Link href="/products" className="text-3xl underline">Go to Products without Modal</Link>
            </section>
        </>
    );
}
