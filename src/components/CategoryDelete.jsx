import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { baseUrl } from '../constant';

const DeleteDialog = ({ deleteDiaOpen, setDeleteDiaOpen, id, fetchDataList,setId }) => {
    

    const handleClick = async (id) =>{
        if(!id) return;

        await axios.delete(`${baseUrl}/category/${id}`)
        .then((response)=> console.log(response.data.message));

        useEffect(()=>{
            fetchDataList();
        },[])
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
                All the transaction that used this category will be permanently deleted.
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