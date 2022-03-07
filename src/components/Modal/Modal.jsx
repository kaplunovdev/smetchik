import React from "react";
import Typography from "@mui/material/Typography";
import {Box, Button} from "@mui/material";


const Modal = ({onClose, clearDataPlitka}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        zIndex: 2
    };


    return (
        <div>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <p style={{marginBottom: 20}}>Вы уверены?</p>
                    <p>
                        <Button onClick={clearDataPlitka}>Удалить</Button>
                        <Button onClick={onClose}>Отмена</Button>
                    </p>

                </Typography>

            </Box>
        </div>


    )
}
export default Modal;