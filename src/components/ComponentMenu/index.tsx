import { Link } from "react-router-dom";
import { componentInfos } from "../../constants";

const componentMenu = () => {
  const items: JSX.Element[] = []
  componentInfos.forEach((item) => {
    items.push(
      <Link to={`/montagem/${item.raw}`} className="dropdown-item">
        {item.name}
      </Link>
    )
  });

  return (
    <>
    <div className="dropdown-menu">
      {items}
    </div>
    </>
  );
}
export default componentMenu;