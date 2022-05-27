/* eslint-disable react/display-name */
import React, { useEffect, useMemo, useState } from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { getDatas } from "../../../querys/getDatas";
// import Swal from "sweetalert2";
import LoaderAnimation from "../LoaderAnimation";

const CustomerTable = ({ isCreateModalOpen }) => {
  const [allUser, setAllUser] = useState([]) as any;
  const [pageNumber, setPageNumber] = useState(1);
  const [queryPageSize, setQueryPageSize] = useState(10);
  // start of table column related code
  const COLUMNS = [
    {
      Header: "name",
      Cell: (row: any) => {
        return <div className=" ">{row?.cell?.row?.original?.name}</div>;
      },
    },
    {
      Header: "email",
      Cell: (row: any) => {
        return <div className=" ">{row?.cell?.row?.original?.email}</div>;
      },
    },
    {
      Header: "phone",
      Cell: (row: any) => {
        return <div className=" ">{row?.cell?.row?.original?.phone}</div>;
      },
    },
    {
      Header: "address",
      Cell: (row: any) => {
        return <div className=" ">{row?.cell?.row?.original?.address}</div>;
      },
    },

    {
      Header: "Status",
      Cell: (row: any) => {
        return (
          <div className=" ">
            {row?.cell?.row?.original?.status ? (
              <span className=" px-2 py-0 bg-emerald-200 text-emerald-700 rounded-full">
                active
              </span>
            ) : (
              <span className=" px-2 py-0 bg-red-200 text-red-700 rounded-full">
                deactive
              </span>
            )}
          </div>
        );
      },
    },
    {
      Header: "Action",
      Cell: (row: any) => {
        return (
          <div className=" ">
            <button
              onClick={() => editUser(row?.cell?.row?.original)}
              className="px-3 py-2 bg-sky-400 hover:bg-sky-500 transition duration-300 rounded text-white mr-2"
            >
              EDIT
            </button>
          </div>
        );
      },
    },
  ];

  const {
    isLoading,
    data: dataLists,
    refetch: dataRefetch,
  } = getDatas({
    // page:       pageNumber,
    // pageSize:   queryPageSize,
    url: "/customers",
  });
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => allUser, [allUser]);

  const {
    getTableProps,
    getTableBodyProps,
    footerGroups,
    headerGroups,
    page,
    rows,
    state: { pageIndex, pageSize },
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    canPreviousPage,
    canNextPage,
    prepareRow,
    pageOptions,
    setPageSize,
  }: any = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: pageNumber - 1,
        pageSize: queryPageSize,
      },
      manualPagination: true,
      pageCount: 1,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    if (dataLists) {
      setAllUser(dataLists);
    }
  }, [dataLists]);

  useEffect(() => {
    dataRefetch();
    if (dataLists) {
      setAllUser(dataLists);
    }
    gotoPage(0);
  }, [pageSize, gotoPage]);

  useEffect(() => {
    dataRefetch();
    if (dataLists) {
      setAllUser(dataLists);
    }
  }, [pageIndex, isCreateModalOpen]);

  let [isEditUserModalOpen, setisEditUserModalOpen] = useState(false);
  function closeEditUserModal() {
    setisEditUserModalOpen(false);
  }
  function openEditUserModal() {
    setisEditUserModalOpen(true);
  }

  // SEND USER DATA TO EDIT USER MODAL

  let [userToEdit, setUserToEdit] = useState({});

  function editUser(user: any) {
    setUserToEdit(user);
    openEditUserModal();
  }

  function handlePageClick(e: any) {
    setPageNumber(e.selected + 1);
    gotoPage(e.selected);
  }
  function hendlePageSize(size: number) {
    setQueryPageSize(size);
    setPageSize(size);
  }

  function hendleNextPage() {
    nextPage();
    setPageNumber(pageIndex + 2);
  }

  function handlePrevPage() {
    previousPage();
    setPageNumber(pageIndex);
  }
  if (isLoading) {
    return <LoaderAnimation />;
  }
  return (
    <div>
      {/* <EditUserModal
        isOpen={isEditUserModalOpen} 
        closeModal={closeEditUserModal} 
        userToEdit={userToEdit} 
        allUser={allUser} 
        setAllUser={setAllUser} 
      /> */}
      <table
        className="bg-secondary w-width99% mx-auto my-1 overflow-y-auto"
        {...getTableProps()}
      >
        <thead className="bg-gray text-white uppercase">
          {headerGroups.map((headerGroup: any, idx: any) => (
            <tr
              className="border-white border"
              key={idx}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column: any, idx: any) => (
                <th
                  key={idx}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  scope="col"
                  className="border-white border text-center"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row: any, idx: any) => {
            prepareRow(row);

            return (
              <tr
                key={idx}
                {...row.getRowProps()}
                className="odd:bg-white even:bg-gray-50"
              >
                {row.cells.map((cell: any, idx: any) => (
                  <td
                    key={idx}
                    scope="col"
                    className="border-white border text-center"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex">
        <div className="flex-1">
          <span className="mr-4 text-black-tint-200">
            Page{" "}
            <strong className="text-steelblue-tint-100">
              {pageIndex + 1} of {pageCount}
            </strong>
          </span>

          <span>
            Page Size:{" "}
            <select
              value={pageSize}
              onChange={(e) => hendlePageSize(Number(e.target.value))}
            >
              {[10, 20, 30, 40, 50, 100].map((pageSize: any, i: number) => (
                <option key={i} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CustomerTable);

// deploy
