// React
import { useRef } from 'react';
import PropTypes from 'prop-types';

// Images
import searchIcon from "../../public/assets/icons/search.svg"
import iconTrash from "../../public/assets/icons/icon_trash.svg";

export function Search({ search, setSearch }) {
  const inputRef = useRef(null);

  const handleClear = (e) => {
    e.stopPropagation();
    setSearch('');
    inputRef.current.focus();
  };

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="w-full flex flex-col items-start justify-between mb-8 gap-6 md:flex-row md:items-center md:gap-0">
      <h1 className="text-black_neutral text-xl font-medium">Funcionários</h1>
      <div className="w-full md:max-w-[280px] h-12 group">
        <div className="relative h-12 cursor-text" onClick={handleFocus}>
          <input
            id="searchInput"
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="peer w-full h-12 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-gray_10 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow pl-4 z-20"
          />
          <label htmlFor="searchInput"
            className={`absolute cursor-text px-1 left-2.5 text-gray_20 text-sm transition-all transform origin-left
              ${search ? "-top-2 text-xs scale-90 text-slate-400" : "top-[.9063rem]"}
              peer-focus:-top-2 peer-focus:text-xs peer-focus:scale-90 peer-focus:text-slate-400`}
          >
            Pesquisar
          </label>
          {search ? (
            <img
              src={iconTrash}
              alt="Icon Trash"
              onClick={handleClear}
              className="absolute top-3 right-3 cursor-pointer"
            />
          ) : (
            <div onClick={handleFocus} >
              <img
                src={searchIcon}
                alt="Icon Search"
                className="absolute top-3 right-3 cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func.isRequired,
};
