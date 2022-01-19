import { ChevronRightIcon } from "@heroicons/react/outline";

export default function Index() {
  const posts = [1, 2, 3];
  return (
    <div className="px-44 lg:px-24 md:px-16 sm:px-8">
      <div className="flex justify-between items-baseline xs:flex-col">
        <h1 className="font:archivo text-2xl text-soft-white font-bold tracking-wider">
          Latest Posts
        </h1>
        <p className="text-lg text-soft-white tracking-wide xs:mt-3">
          <span className="text-gold font-bold">22</span> Articles
        </p>
      </div>
      <section className="grid grid-cols-2 gap-24 mt-12 sm:grid-cols-1">
        {posts.map((post) => {
          return (
            <div
              key={post}
              className="bg-slight-blue rounded-md pt-4 px-4 pb-1"
            >
              <p className="font-light">January 25th 2022</p>
              <h2 className="text-xl text-soft-white tracking-wide font-archivo mb-2">
                The blog title goes along here
              </h2>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <div className="flex text-soft-white hover:text-gold transition-colors">
                <span className="italic">see more</span>
                <ChevronRightIcon className="h-6 w-6 hover:translate-x-1 hover:transition-transform hover:ease-in-out" />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
