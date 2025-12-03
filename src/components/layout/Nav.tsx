import { NavLink } from "react-router";

import SVG from "../images/SVG.tsx";
import logo from "../../assets/logo/taskify_logo.ts";
import chevron from "../../assets/logo/chevron_down.ts";

const navLinks = [
  { label: "Home", to: "/"},
  { label: "Features", to: "/features"},
  { label: "About", to: "/about"},
]

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between light:bg-white py-4 px-10">
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-1 mr-3 items-center">
            <SVG width={24} height={24} path={logo.path} viewBox={logo.viewBox} color="#1cc549ff" />
            <NavLink className="font-montserrat font-bold text-2xl light:text-zinc-900" to="/">Taskify</NavLink>
          </div>
          <div className="flex flex-row gap-12 grow items-center">
            { navLinks.map((link) => (
              <div className="flex flex-row items-center gap-0.5">
                <NavLink key={link.to} to={link.to}>{link.label}</NavLink>
                <SVG width={18} height={18} path={chevron.path} viewBox={chevron.viewBox} color="#1cc549ff"/>
              </div>
            )) }
          </div>
        </div>
        <div className="bg-green-400">
            <NavLink to="/login">Login</NavLink>
        </div>
    </nav>
  )
}