import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

interface Props {
  text: string;
  onChangeText: (name: string) => void;
}

const SearchBar = ({text, onChangeText}: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onChangeText(searchRef.current?.value as string);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="d-flex mb-2">
        <input
          type="text"
          className="form-control me-4 border-secondary-subtle"
          placeholder="Nome da montagem"
          ref={searchRef}
          aria-label="Search"
          defaultValue={text}
        />
        <button className="btn btn-outline-primary" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
}
export default SearchBar;