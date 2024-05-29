import { Item } from "@/types/Item";
import { FC } from "react";

const Nav: FC<{items: Item[]}> = ({items}) => (
  <div className="navbar bg-black border-white">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl text-center text-green-600">The Movie</a>
    </div>
    <div className="flex-1 align-middle justify-center">
      {items?.map((item) => (
        <a key={item.path} className="btn btn-ghost text-xl text-green-600" href={item.path}>{item.title}</a>
      ))}
    </div>
  </div>
);


export default Nav;