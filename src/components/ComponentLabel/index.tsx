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
        <button className={`nav-link btn btn-light flex-fill ${isActive ? "active" : ""}`} id={`${raw}-tab`} data-bs-toggle="tab"
          data-bs-target={`#${raw}Options`} type="button" role="tab" aria-controls={`${raw}Options`}
          aria-selected="true">{name}</button>
      </li>
    </>
  );
}
export default ComponentLabel;