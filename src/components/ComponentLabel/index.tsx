import { Link, NavLink } from "react-router-dom";
import "./styles.css"

interface Props {
  name: string;
  raw: string;
  isActive: boolean;
}

const ComponentLabel = ({ name, raw, isActive }: Props) => {
  return (
    <>
      <li className="nav-item d-flex" role="presentation">
        <NavLink to={`/montagem/${raw}`} className="flex-fill">
          <button className={`nav-link btn btn-light flex-fill w-100 ${isActive ? "active" : ""}`} id={`${raw}-tab`} data-bs-toggle="tab"
            data-bs-target={`#${raw}Options`} type="button" role="tab" aria-controls={`${raw}Options`}
            aria-selected="true">{name}</button>
        </NavLink>
      </li>
    </>
  );
}
export default ComponentLabel;