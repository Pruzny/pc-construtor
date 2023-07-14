import "./styles.css"

interface Props {
  name: string;
  raw: string;
  isActive: boolean;
  onSelectLabel: (type: string) => Promise<void>;
}

const ComponentLabel = ({ name, raw, isActive, onSelectLabel }: Props) => {
  const handleClick = async () => {
    await onSelectLabel(raw);
  };

  return (
    <>
      <li className="nav-item d-flex" role="presentation">
        <button className={`nav-link btn btn-light flex-fill ${isActive ? "active" : ""}`} id={`${raw}-tab`} data-bs-toggle="tab"
          data-bs-target={`#${raw}Options`} type="button" role="tab" aria-controls={`${raw}Options`}
          aria-selected="true" onClick={handleClick}>{name}</button>
      </li>
    </>
  );
}
export default ComponentLabel;