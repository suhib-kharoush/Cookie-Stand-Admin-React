import Link from 'next/link'
export default function Header(props){
    return(
        <header className="flex items-center justify-between p-4 bg-green-500">
        <h1 className='text-3xl'>
          Cookie Stand Admin
        </h1>
        <Link href="/overview">
             <a className='p-2 bg-green-100 rounded-md'>Overview</a>
        </Link>
        

      </header>
    );
  }