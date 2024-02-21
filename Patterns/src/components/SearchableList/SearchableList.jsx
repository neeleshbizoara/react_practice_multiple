import { useRef } from "react";
import { useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const lastChange = useRef();

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handelChange(event) {
    if(lastChange.current) {
        clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
        lastChange.current = null;
        setSearchTerm(event.target.value);
    }, 500)
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handelChange} />
      <ul>
        {searchResult.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
