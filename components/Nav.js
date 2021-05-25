import request from "../utils/requests";
import {useRouter} from 'next/router'
function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        
        {/*[key,value] =[key, { title, url }] */}
        {Object.entries(request).map(([key, { title, url }],index) => (
          <h2 key={key} onClick={()=>router.push(`/?genre=${key}`)} className="last:pr-24 cursor-pointer transform 
            hover:text-white active:text-red-500 text-green-900
            duration-100 hover:scale-125">{title}</h2>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] to-transparent h-10 w-1/12'>

      </div>
    </nav>
  );
}

export default Nav;
