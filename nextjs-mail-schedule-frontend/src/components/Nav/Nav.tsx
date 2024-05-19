import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavLogo from "./NavLogo";

export default function Nav (){
  return(
    <nav className="w-full h-20 bg-gray-50 border-b border-gray-300">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <NavLogo />

        <Link to="/excrever-agora">
          <Button children="Escrever Agora" variant="primary" />
        </Link>
      </div>
    </nav>
  );
}