import {links} from '@/app/lib/placeholder-data-links'
import { Rubik_Maze } from 'next/font/google' 
import Link from 'next/link'
const Maze = Rubik_Maze({
  weight: ['400'],
  subsets: ['latin'],
})
export default function Home() {
  return (
    <>
    <h1 className={`text-7xl flex m-4 justify-center ${Maze.className}`}>ARKAL</h1>
    <main className='w-11/12  flex justify-center items-center mx-auto h-screen'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
      </div>

      <div className=" items-center  grid lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {
          links.map((link) => (
            <Link
            key={link.id}
            href={link.route}
            className="h-min  group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {link.title}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {link.description}
            </p>
          </Link>
          ))
        } 
    
      </div>
    </main>
    </>
  )
}
