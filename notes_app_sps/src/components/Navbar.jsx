import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-slate-800 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to={'/'} >
                <span className="self-center text-2xl whitespace-nowrap">NotesApp</span>
            </NavLink>

            <div className="w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col md:p-0 mt-4  md:flex-row md:space-x-8 space-y-3 md:space-y-0 md:mt-0 ">
                <li>
                    <NavLink to={'/'} className="block pl-3 pr-4">Note</NavLink>
                </li>
                <li>
                    <NavLink to={'/notes'} className="block pl-3 pr-4">Create Note</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'} className="block  pl-3 pr-4">Create User</NavLink>
                </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
export default Navbar