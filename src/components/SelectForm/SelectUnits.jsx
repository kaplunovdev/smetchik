import {FormControl, InputLabel, } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from '@mui/material/Select';
import React from "react";

const SelectUnits =()=> {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{m: 1, minWidth: 100}}>
            <InputLabel id="demo-simple-select-label">Ед.изм</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label='Ед.изм.'
                onChange={handleChange}
            >
                <MenuItem value={10}>м</MenuItem>
                <MenuItem value={20}>м²</MenuItem>
                <MenuItem value={30}>м³</MenuItem>
                <MenuItem value={30}>шт</MenuItem>
                <MenuItem value={30}>т</MenuItem>
            </Select>
        </FormControl>
    );
}
export default SelectUnits;