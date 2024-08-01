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
import moment from 'moment';
import { DATE_FORMAT_LONG } from '../../../utils/format';
import uid from 'uniqid';

const columns = [
  { id: 'id', label: 'ID Hàng', minWidth: 170 },
  { id: 'code', label: 'Mã Hàng Hóa', minWidth: 100 },
  { id: 'name', label: 'Tên Hàng Hóa', minWidth: 100 },
  { id: 'quantity', label: 'Số lượng yêu cầu', minWidth: 100 },
  { id: 'quantityProvided', label: 'Số lượng cung ứng', minWidth: 100 },
  { id: 'quantityMissed', label: 'Số lượng còn lại', minWidth: 100 },
  { id: 'unit', label: 'Đơn Vị Tính', minWidth: 100 },
  { id: 'note', label: 'Ghi chú', minWidth: 100 },
  { id: 'price', label: 'Đơn giá USD/VNĐ', minWidth: 100 },
  { id: 'totalAmount', label: 'Thành tiền USD/VND', minWidth: 100 },
  { id: 'lotno', label: 'Số LOT', minWidth: 100 },
  { id: 'dateManufacture', label: 'Ngày Sản Xuất', minWidth: 100 },
  { id: 'date', label: 'Hạn Sử dụng', minWidth: 100 },
  { id: 'priceCap', label: 'Giá vốn', minWidth: 100 },
  { id: 'status', label: 'Trạng thái', minWidth: 100 },
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
