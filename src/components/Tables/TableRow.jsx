
// React
import PropTypes from "prop-types";

// Components
import { useEmployees } from "../../hooks/useEmployees";
import { ExpandedRowDiv } from "../ui/ExpandedRowDiv";
import TableRowItem from "../ui/TableRowItem"; 
import { NotFindDiv } from "../ui/NotFindDiv";

// Functions
import { formatPhone } from "../../utils/formatPhone";
import { formatDate } from "../../utils/formatDate";

export function TableRow({ search }) {
  const { filteredEmployees, expandedRows, toggleRow } = useEmployees(search);

  return (
    <div>
      {filteredEmployees.length === 0 ? (
        <NotFindDiv search={search} />
      ) : (
        filteredEmployees.map((item, index) => (
          <div className="flex flex-col items-center justify-between gap-5 py-2 px-8 shadow-shadow_1 bg-white" key={item.id || index}>
            <TableRowItem item={item} index={index} expandedRows={expandedRows} toggleRow={toggleRow} />
            {expandedRows[index] && (
              <ExpandedRowDiv job={item.job} date={formatDate(item.admission_date)} phone={formatPhone(item.phone)}/>
            )}
          </div>
        ))
      )}
    </div>
  );
}

TableRow.propTypes = {
  search: PropTypes.string.isRequired,
};
