// React
import { useState, useEffect } from "react";

export function useEmployees(search) {
  const [db, setDb] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/db/db.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados carregados:", data.employees);
        setDb(data.employees);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const toggleRow = (index) => {
    setExpandedRows((prev) => {
      const newExpandedRows = [...prev];
      newExpandedRows[index] = !newExpandedRows[index];
      return newExpandedRows;
    });
  };  

  const filteredEmployees = search
    ? db.filter((item) => {
        const searchLower = search.toLowerCase();
        const phoneSearch = search.replace(/\D/g, "");
        const nameLower = item.name.toLowerCase();
        const jobLower = item.job.toLowerCase();
        const phoneNumeric = item.phone.replace(/\D/g, "");

        return (
          nameLower.startsWith(searchLower) ||
          jobLower.startsWith(searchLower) ||
          (phoneSearch && phoneNumeric.startsWith(phoneSearch))
        );
      })
    : db;

  return { filteredEmployees, expandedRows, toggleRow };
}
