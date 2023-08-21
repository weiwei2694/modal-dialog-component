import Link from "next/link"

const ProductsPage = () => {
  return (
    <>
        <h1 className="text-5xl">Home</h1>   

        <Link href="/" className="text-3xl underline mt-10">Go To Home</Link>

        <section className="mt-16 text-2xl flex flex-col gap-4 p-4 items-center text-center max-w-[800px]">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo aliquid incidunt assumenda dolor, minus saepe neque quaerat consequatur labore molestias excepturi eos quas nam a ratione nulla in magnam. Deleniti iusto blanditiis quibusdam incidunt quis fuga aliquam eveniet unde?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum sit nam commodi quod id voluptate harum sunt. Ab voluptatem sit vel error maxime laboriosam suscipit molestias dicta praesentium vero repudiandae molestiae, omnis placeat velit. Nesciunt non odio tempora quas!
            </p>
        </section>
    </>
  )
}

export default ProductsPage