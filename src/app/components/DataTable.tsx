import { Table, Thead, Tbody, Tr, Th, Td, Button, Input } from "@chakra-ui/react";
import { useState } from "react";

interface DataTableProps {
  headers: string[];
  rows: any[]; 
  caption?: string;
  sortable?: boolean;
  pagination?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({
  headers,
  rows,
  caption,
  sortable,
  pagination,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortedColumn, setSortedColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 5; // Number of rows to display per page

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset current page when search query changes
  };

  const filteredRows = rows.filter((row) => {
    const values = Object.values(row).join(" ").toLowerCase();
    return values.includes(searchQuery.toLowerCase());
  });

  const sortRows = (column: string) => {
    if (column === sortedColumn) {
      // Toggle sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
    setCurrentPage(1); // Reset current page when sorting changes
  };

  const getSortedRows = () => {
    if (sortedColumn) {
      return filteredRows.sort((a, b) => {
        const valueA = a[sortedColumn];
        const valueB = b[sortedColumn];
        if (valueA < valueB) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (valueA > valueB) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredRows;
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const paginatedRows = pagination
    ? getSortedRows().slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      )
    : getSortedRows();

  return (
    <section className="w-4/5 mx-auto">
      <Table variant="striped" colorScheme="gray">
        {caption && <caption>{caption}</caption>}
        <Thead>
          <Tr>
            <Th colSpan={headers.length}>
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </Th>
          </Tr>
          <Tr>
            {headers.map((header) => (
              <Th
                key={header}
                onClick={sortable ? () => sortRows(header) : undefined}
                cursor={sortable ? "pointer" : "default"}
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {paginatedRows.map((row, index) => (
            <Tr key={index}>
              {headers.map((header) => (
                <Td key={header}>{row[header]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
        {pagination && (
          <tfoot>
            <Tr>
              <Td colSpan={headers.length}>
                <Button
                  disabled={currentPage === 1}
                  onClick={handlePreviousPage}
                >
                  Previous
                </Button>
                <Button
                  className="mx-4"
                  disabled={
                    currentPage ===
                    Math.ceil(filteredRows.length / rowsPerPage)
                  }
                  onClick={handleNextPage}
                >
                  Next
                </Button>
              </Td>
            </Tr>
          </tfoot>
        )}
      </Table>
    </section>
  );
};

export default DataTable;
