import React from 'react';
import { useTable } from 'react-table';
import './CreateTable.css';


const CreateTable = ({ colunas, dados }) => {
  //console.log(dados)
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: colunas, data: dados });
  
  
  return (
    <table {...getTableProps()} className="tabela">
      <thead className="cabecalho-tabela">
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <th {...column.getHeaderProps()} key={index}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => (
                <td {...cell.getCellProps()} key={index} className={cell.column.id === 'STATUS' ? getStatusClassName(cell.value) : ''}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Função para obter a classe de estilo com base no valor do campo STATUS
const getStatusClassName = (status) => {
  switch (status) {
    case '16 - CONTRATO PAGO':
      return 'status-contrato-pago';
    case '5 - AUTORIZADO':
      return 'status-autorizado';
    case '28 - CANCELADO':
      return 'status-cancelado'
    default:
      return '';
  }
};

export default CreateTable;
