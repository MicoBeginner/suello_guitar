import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import styles from "./GuitarTable.module.css";

function GuitarTable({
  guitars,
  selectedGuitar,
  onSelectGuitar,
}) {
  const columns = [
    {
      accessorKey: "guitarModel",
      header: "Guitar Model",
    },
    {
      accessorKey: "bodyType",
      header: "Body Type",
    },
    {
      accessorKey: "brandName",
      header: "Brand",
    },
    {
      accessorKey: "stockQuantity",
      header: "Stock",
    },
    {
      accessorKey: "manufacturerName",
      header: "Manufacturer",
    },
    {
      accessorKey: "userRole",
      header: "Role",
    },
  ];

  const table = useReactTable({
    data: guitars,
    columns: columns,

    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 3,
      },
    },

    getCoreRowModel:
      getCoreRowModel(),

    getPaginationRowModel:
      getPaginationRowModel(),
  });

  if (guitars.length === 0) {
    return (
      <section
        className={styles.empty}
      >
        <h2>Guitar Inventory</h2>

        <p>
          No guitar records to display.
        </p>
      </section>
    );
  }

  return (
    <section
      className={styles.card}
    >
      <div
        className={styles.header}
      >
        <div>
          <span>REGISTRY TABLE</span>

          <h2>Guitar Inventory</h2>
        </div>

        <div
          className={styles.count}
        >
          {guitars.length} Guitar(s)
        </div>
      </div>

      <div
        className={
          styles.tableWrapper
        }
      >
        <table
          className={styles.table}
        >
          <thead>
            {table
              .getHeaderGroups()
              .map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map(
                    (header) => (
                      <th
                        key={header.id}
                      >
                        {flexRender(
                          header
                            .column
                            .columnDef
                            .header,
                          header.getContext()
                        )}
                      </th>
                    )
                  )}
                </tr>
              ))}
          </thead>

          <tbody>
            {table
              .getRowModel()
              .rows.map((row) => {
                let rowClass = "";

                if (
                  selectedGuitar !==
                    null &&
                  selectedGuitar.id ===
                    row.original.id
                ) {
                  rowClass =
                    styles.selectedRow;
                }

                return (
                  <tr
                    key={row.id}
                    className={
                      rowClass
                    }
                    onClick={() =>
                      onSelectGuitar(
                        row.original
                      )
                    }
                  >
                    {row
                      .getVisibleCells()
                      .map((cell) => (
                        <td
                          key={cell.id}
                        >
                          {flexRender(
                            cell
                              .column
                              .columnDef
                              .cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <div className={styles.help}>
        Click a guitar row to view
        its complete profile.
      </div>

      <div
        className={
          styles.pagination
        }
      >
        <button
          type="button"
          onClick={() =>
            table.previousPage()
          }
          disabled={
            !table.getCanPreviousPage()
          }
        >
          Previous
        </button>

        <span>
          Page{" "}
          {table.getState()
            .pagination.pageIndex + 1}
          {" "}of{" "}
          {table.getPageCount()}
        </span>

        <button
          type="button"
          onClick={() =>
            table.nextPage()
          }
          disabled={
            !table.getCanNextPage()
          }
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default GuitarTable;