// React
import PropTypes from "prop-types";

// Functions
import { formatDate } from "../../utils/formatDate";
import { formatPhone } from "../../utils/formatPhone";

function TableRowItem({ item, index, expandedRows, toggleRow }) {
  return (
    <div
      onClick={() => toggleRow(index)}
      className="w-full flex items-center justify-between cursor-pointer md:cursor-default"
    >
      <div className="w-full grid grid-cols-3 items-center justify-start md:justify-between gap-5 md:grid-cols-5">
        <div className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden">
          <img src={item.image ? item.image : "https://betalentluixz.netlify.app/assets/images/image_avatar_test.png"} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <p className="col-span-2 md:col-span-1" >{item.name}</p>
        <p className="hidden md:flex">{item.job}</p>
        <p className="hidden md:flex">{formatDate(item.admission_date)}</p>
        <p className="hidden md:flex">{formatPhone(item.phone)}</p>
      </div>
      <div
        className={`flex md:hidden transition-transform duration-300 ease-in-out ${
          expandedRows[index] ? "-rotate-180" : "rotate-0"
        }`}
      >
        <img src={"https://betalentluixz.netlify.app/assets/icons/arrow_blue.svg"} alt="Arrow Blue" />
      </div>
    </div>
  );
}

TableRowItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  expandedRows: PropTypes.array.isRequired,
  toggleRow: PropTypes.func.isRequired,
};

export default TableRowItem;
