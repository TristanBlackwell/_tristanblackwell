export default function PostSlug() {
  return (
    <div className="ml-44 mr-2 lg:ml-32 md:ml-24 sm:ml-8">
      <h1 className="font:archivo text-2xl text-soft-white font-bold tracking-wider">
        The blog title goes here
      </h1>
      <div className="mt-24 grid grid-cols-4">
        <div className="col-span-3 pr-12">content</div>
        <div className="md:hidden lg:block">
          <h4 className="uppercase font-archivo font-bold text-soft-white tracking-wider">
            Table of Contents
          </h4>
        </div>
      </div>
    </div>
  );
}
