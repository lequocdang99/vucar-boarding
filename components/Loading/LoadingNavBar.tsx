export default function LoadingNavBar() {
  return (
    <div className='grid sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-7 md:grid-rows-1 items-center justify-center bg-gray-200 py-3 px-10 gap-5 h-fit md:h-16'>
      <div className='col-span-1 md:col-span-2 bg-gray-300 h-8 md:h-full rounded animate-pulse'></div>
      <div className='sm:py-2 md:px-2 bg-gray-300 h-8 md:h-full rounded animate-pulse'></div>
      <div className='sm:py-2 md:px-2 bg-gray-300 h-8 md:h-full rounded animate-pulse'></div>
      <div className='sm:py-2 md:px-2 bg-gray-300 h-8 md:h-full rounded animate-pulse'></div>
      <div className='sm:py-2 md:px-2 bg-gray-300 h-8 md:h-full rounded animate-pulse'></div>
      <div className='sm:py-2 md:px-2 bg-gray-300 h-8 md:h-full rounded animate-pulse'></div>
    </div>
  );
}
