
import { ContainerGrid } from "./ContainerGrid";
import { Search } from "./Search";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export function TableContent() {
    return(
        <ContainerGrid>
            <div className="flex flex-col mb-20" >
                <Search/>
                <TableHeader/>
                <TableRow/>
            </div>
        </ContainerGrid>
    )
}