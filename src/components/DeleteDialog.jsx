import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useEffect } from 'react';

const DeleteDialog = ({ deleteDiaOpen, setDeleteDiaOpen, id, fetchDataList,setId }) => {
    

    const handleClick = async (id) =>{
        if(!id) return;
        console.log(id);

        await axios.delete(`http://localhost:4000/api/transaction/delete/${id}`)
        .then((response)=> console.log(response.data.message))
        fetchDataList()
        setDeleteDiaOpen(!deleteDiaOpen)
        setId(null)
    }

    return (
        <Dialog
        aria-labelledby="customized-dialog-title"
        open={deleteDiaOpen}
    >
        <DialogContent>
            <Typography className="text-red-500">
                Are you sure?
            </Typography>
        </DialogContent>

        <DialogActions>
            <Button 
                variant='text' 
                onClick={()=>{
                    setDeleteDiaOpen(!deleteDiaOpen)
                    setId(null)
                }} 
                type='button' 
                className='!capitalize w-[120px]'
            >
                Cancel
            </Button>
            <Button 
                variant='contained' 
                className='!capitalize !bg-red-500'
                onClick={() => handleClick(id)}
            >
                Delete
            </Button>
        </DialogActions>
    </Dialog>
    )
}

export default DeleteDialog