import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import uid from 'uniqid';
import { DATE_FORMAT_LONG } from '../../../utils/format';
import moment from 'moment';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'code', label: 'Mã đơn đặt nhập hàng', minWidth: 170 },
  { id: 'id', label: 'ID phiếu nhập', minWidth: 100 },
  {
    id: 'date',
    label: 'Ngày mua hàng',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'bidnum',
    label: 'Số thầu',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'vol',
    label: 'Số lượng hàng hóa cần nhập',
    minWidth: 80,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'priceTotal',
    label: 'Tổng số tiền trong đơn hàng (VNĐ/USD)',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'priceCap',
    label: `Giá vốn
(Chỉ hiển thị cho role Admin, Kế toán)`,
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'status',
    label: `Trạng thái đơn đặt nhập hàng gói thầu`,
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
function createData(i) {
  const [code, id, date, bidnum, vol, priceTotal, priceCap, status] = [
    uid(), i, moment().format(DATE_FORMAT_LONG), uid(),
    Math.ceil((Math.random() * 32324) % 1000), Math.ceil((Math.random() * 32324) % 1000),
    Math.ceil((Math.random() * 32324) % 1000), Math.ceil((Math.random() * 32324) % 2) ? 'Chờ nhập' : 'Nhập đủ'
  ];
  return { code, id, date, bidnum, vol, priceTotal, priceCap, status };
}
const rows = [];
for (let index = 0; index < 50; index++) {
  rows.push(createData(index + 1));

}
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  container: {
    maxHeight: 440,
  },
}));


export default function DummyTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    if (column.id === 'code') {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link to={`/app/hang-hoa/${value}`}>{value}</Link>
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );

}
