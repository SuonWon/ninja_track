import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ListCashInOutRecord = () => {
  
  return (
    <>
      <TableContainer component={Paper} sx={{ minWidth: 1010 }} >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              style={{ 'backgroundColor': '#f5f5f5', padding: 0 }}
            >
              <TableCell className="text-muted py-2">Date & Time</TableCell>
              <TableCell align="right" className="text-start text-muted py-2">
                Remark
              </TableCell>
              <TableCell align="right" className="text-start text-muted py-2">
                Category
              </TableCell>
              <TableCell align="right" className="text-start text-muted py-2">
                Mode
              </TableCell>
              <TableCell align="right" className="text-end text-muted py-2">
                Amount
              </TableCell>
              <TableCell align="right" className="text-end text-muted py-2">Balance</TableCell>
              <TableCell align="right" className="py-2"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ "height": '30px', padding: 0 }}
            >
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">20 May, 2023 <br /><span style={{ 'fontSize': '12px' }} className="text-muted">4:00 PM</span></TableCell>
              <TableCell align="right" sx={{ minWidth: 230 }} className="text-start py-1">Potato Chips</TableCell>
              <TableCell align="right" sx={{ minWidth: 160 }} className="text-start py-1">Snacks</TableCell>
              <TableCell align="right" sx={{ minWidth: 100 }} className="text-start py-2">Cash</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">20</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-end py-1">50,000</TableCell>
              <TableCell align="right" sx={{ minWidth: 130 }} className="text-start py-1">
                <Tooltip title="Edit">
                  <IconButton>
                    <EditIcon className="text-primary mx-1" style={{ cursor: 'pointer' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton>
                    <DeleteIcon className="text-danger mx-1" style={{ cursor: 'pointer' }} />
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

export default ListCashInOutRecord