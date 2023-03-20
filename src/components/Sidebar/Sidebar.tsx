import React from "react";
import "./Sidebar.scss";
import { Folder, Plus } from "react-feather";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="sidebar">
      <p>ALL BOARD ( 2 )</p>
      <ul className="sidebar-items">
        <li className="active">
          <Folder />
          Place board
        </li>
        <li>
          <Folder />
          Place board
        </li>
        <li className="plus">
          <Plus />
          Place board
        </li>
      </ul>
    </div>
  );
}
