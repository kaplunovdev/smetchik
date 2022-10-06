import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";

const Modal = ({
  onClose,
  clearDataPlitka,
  clearDataMaterials,
  onCloseMaterial,
  openModalMaterials,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    zIndex: 3,
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        minWidth: "100%",
        height: "100%",
        zIndex: 3,
      }}
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: 20 }}>Вы уверены?</p>
          <p>
            <Button
              onClick={
                openModalMaterials ? clearDataMaterials : clearDataPlitka
              }
            >
              Удалить
            </Button>
            <Button onClick={openModalMaterials ? onCloseMaterial : onClose}>
              Отмена
            </Button>
          </p>
        </Typography>
      </Box>
    </div>
  );
};
export default Modal;
