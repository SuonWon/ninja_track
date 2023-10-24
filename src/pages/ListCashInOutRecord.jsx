import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ListCashInOutRecord = () => {

    return (
        <>
            <TableContainer component={Paper} sx={{ minWidth: 960 }} >
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow
                            style={{ 'backgroundColor': '#f5f5f5', padding: 0 }}
                        >
                            <TableCell className="py-2 !text-gray-400">
                                Date & Time
                            </TableCell>
                            <TableCell align="left" className="!text-gray-400 py-2">
                                Remark
                            </TableCell>
                            <TableCell align="left" className="!text-gray-400 py-2">
                                Category
                            </TableCell>
                            <TableCell align="left" className="!text-gray-400 py-2">
                                Mode
                            </TableCell>
                            <TableCell align="left" className="!text-gray-400 py-2">
                                Amount
                            </TableCell>
                            <TableCell align="center" className="!text-gray-400 py-2">
                                Balance
                            </TableCell>
                            <TableCell align="right" className="py-2"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                20 May, 2023 <br />
                                <span style={{ 'fontSize': '12px' }} className="text-muted">
                                    4:00 PM
                                </span>
                            </TableCell>
                            <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">Potato Chips</TableCell>
                            <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">Snacks</TableCell>
                            <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">Cash</TableCell>
                            <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">20</TableCell>
                            <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">50,000</TableCell>
                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                20 May, 2023 <br />
                                <span style={{ 'fontSize': '12px' }} className="text-muted">
                                    4:00 PM
                                </span>
                            </TableCell>
                            <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">Potato Chips</TableCell>
                            <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">Snacks</TableCell>
                            <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">Cash</TableCell>
                            <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">20</TableCell>
                            <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">50,000</TableCell>
                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                20 May, 2023 <br />
                                <span style={{ 'fontSize': '12px' }} className="text-muted">
                                    4:00 PM
                                </span>
                            </TableCell>
                            <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">Potato Chips</TableCell>
                            <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">Snacks</TableCell>
                            <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">Cash</TableCell>
                            <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">20</TableCell>
                            <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">50,000</TableCell>
                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                20 May, 2023 <br />
                                <span style={{ 'fontSize': '12px' }} className="text-muted">
                                    4:00 PM
                                </span>
                            </TableCell>
                            <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">Potato Chips</TableCell>
                            <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">Snacks</TableCell>
                            <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">Cash</TableCell>
                            <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">20</TableCell>
                            <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">50,000</TableCell>
                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                20 May, 2023 <br />
                                <span style={{ 'fontSize': '12px' }} className="text-muted">
                                    4:00 PM
                                </span>
                            </TableCell>
                            <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">Potato Chips</TableCell>
                            <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">Snacks</TableCell>
                            <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">Cash</TableCell>
                            <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">20</TableCell>
                            <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">50,000</TableCell>
                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>

                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                20 May, 2023 <br />
                                <span style={{ 'fontSize': '12px' }} className="text-muted">
                                    4:00 PM
                                </span>
                            </TableCell>
                            <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">Potato Chips</TableCell>
                            <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">Snacks</TableCell>
                            <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">Cash</TableCell>
                            <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">20</TableCell>
                            <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">50,000</TableCell>
                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ListCashInOutRecord;