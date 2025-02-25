// React
import { useState } from "react";

// Components
import { ContainerGrid } from "../Container/ContainerGrid";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { Search } from "../Search";

export function TableContent() {
  const [search, setSearch] = useState("");

  return (
    <ContainerGrid>
      <div className="flex flex-col mb-20">
        <Search search={search} setSearch={setSearch} />
        <TableHeader />
        <TableRow search={search} />
      </div>
    </ContainerGrid>
  );
}

