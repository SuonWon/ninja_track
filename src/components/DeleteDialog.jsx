import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const DeleteDialog = ({ deleteDiaOpen, setDeleteDiaOpen, id, fetchDataList,setId }) => {
    

    const handleClick = async (id) =>{
        if(!id) return;

        await axios.delete(`http://localhost:4000/api/transaction/delete/${id}`)
        .then((response)=> console.log(response.data.message))
        fetchDataList();
        setDeleteDiaOpen(!deleteDiaOpen)
    }

    return (
        <Dialog
        aria-labelledby="customized-dialog-title"
        open={deleteDiaOpen}
    >
        <DialogTitle
            sx={{ m: 0, p: 2 }}
        >
            To Delete
        </DialogTitle>
        <IconButton
            aria-label="close"
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
            }}
            onClick={()=>{
                setDeleteDiaOpen(!deleteDiaOpen)
            }}
        >
            <CloseIcon />
        </IconButton>

        <DialogContent dividers>
            
        </DialogContent>

        <DialogActions>
            <Button 
                variant='outlined' 
                onClick={()=>{
                    setOpen(!open)
                }} 
                type='button' 
                className='!capitalize w-[120px]'
            >
                Cancel
            </Button>
            <Button 
                variant='contained' 
                className='!capitalize'
                onClick={() => handleClick(id)}
            >
                Delete
            </Button>
        </DialogActions>
    </Dialog>
    )
}

export default DeleteDialog