import { Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { baseUrl } from '../constant';

const DeleteDialog = ({ deleteDiaOpen, setDeleteDiaOpen, id, fetchDataList,setId }) => {
    
    const [toastOpen, setToastOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [msgType, setMsgType] = useState('success');

    function showAlert(message, type) {
        setMessage(message);
        setMsgType(type);
    
        setToastOpen(true);
        setTimeout(() => {
        setToastOpen(false);
        },3000)
    }

    const handleClick = async (id) =>{
        if(!id) return;
        console.log(id);

        await axios.delete(`${baseUrl}/transaction/delete/${id}`)
        .then((response)=> console.log(response.data.message))
        fetchDataList()
        setDeleteDiaOpen(!deleteDiaOpen)
        setId(null)
    }

    return (
        <div>
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
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                open={toastOpen}
            >
                <Alert severity={msgType} className='w-[300px]'>{message}</Alert>
            </Snackbar>
        </div>
    )
}

export default DeleteDialog