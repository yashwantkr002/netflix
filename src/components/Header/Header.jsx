import React,{useState} from 'react'
import {useNavigate,Link } from 'react-router-dom'
import {Container} from "../index"
import logo from "../../assets/Logo.png"
import serchimg from "../../assets/search.png"
import bell from "../../assets/bell.png"
import user from "../../assets/user-icon.png"

function Header() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);
  const [search,setSearch]=useState(false)
  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Movies",
      slug: "/movies",
    },
    {
      name: "Series",
      slug: "/series",
    },
    {
      name: "Letest",
      slug: "/letest",
    },
    {
      name: "My List",
      slug: "/mylist"
    }
  ]
  return (
    <header className=" w-full  shadow-lg bg-gray-900">
  <Container>
    <nav className="flex flex-wrap items-center justify-between h-12 px-4 md:px-6 lg:px-8">
      {/* Logo Section */}
      <a href="/" className="flex items-center mx-3">
        <img src={logo} className="h-10 w-auto" alt="NetFlix" />
      </a>

      {/* Navigation Bar Menu */}
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute text-center top-12 left-0 w-full h-screen md:bg-transparent bg-gray-700 md:static md:flex md:items-center md:w-2/4 md:h-auto md:justify-between z-20 `}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className="text-white px-3 py-2 hover:bg-gray-600 md:inline-block rounded-[33px] md:rounded-lg transition-colors duration-300 ease-in-out"
          >
            <button onClick={() => navigate(item.slug)}>{item.name}</button>
          </li>
        ))}
      </ul>

      {/* Search Section */}
      <div className={`${search?"md:block":"md:hidden"} hidden absolute sd:hidden items-center space-x-3`}>
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 text-sm border border-gray-400 rounded-md outline-none"
        />
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-3">
        <button className='w-6 h-6'
        onClick={()=>setSearch(!search)}
        >
          <img src={serchimg} alt="" />
        </button>
        <button className='w-6 h-6'
        >
          <img src={bell} alt="" />
        </button>
        <button className='w-6 h-6'
        >
          <img src={user} alt="" />
        </button>


        {/* Hamburger Menu for Mobile */}
      <div className="block md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      </div>

      
    </nav>
  </Container>
    </header>

  )
}

export default Header