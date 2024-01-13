import React, { useState } from "react";
import { Icon, IconNames } from "../icon";

type SearchBarProps = {
  onSubmit: () => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [search, setSearch] = useState<string>();

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <input
        type="text"
        value={search}
        onChange={handleChangeSearch}
        placeholder="Search"
      />
      <button>
        <Icon name={IconNames.search} />
      </button>
    </form>
  );
};
