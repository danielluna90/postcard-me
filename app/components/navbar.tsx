export default function Navbar() {
  return (
    <nav className="pb-4 mb-4 border-b border-slate-400 flex justify-between items-center">
      <a href="/" className="text-xl font-semibold">Postcard Me</a>
      <div>
        <ul className="flex flex-row gap-4">
          <li><a href="/create" className="text-md">Create a Postcard</a></li>
          <li><a href="/open" className="text-md">Open a Postcard</a></li>  
        </ul>        
      </div>
    </nav>
  )
}