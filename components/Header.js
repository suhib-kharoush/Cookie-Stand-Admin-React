import Link from 'next/link'


export default function Header(props){
    return (
      <header className="p-5 text-3xl text-left bg-green-500 font h-15 mb-8 ... flex flex-row justify-between">
        <h1 className="ml-4 ... font-bold" >{props.header}</h1>
        <Link href={props.path}>
                <a className="pb-1 pl-1 pr-1 mr-4 text-xl text-gray-800 bg-gray-100 rounded-lg" >{props.page}</a>
            </Link>
      </header>
    )
}