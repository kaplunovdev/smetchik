import { FormControl, InputLabel, } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from '@mui/material/Select';
import React from "react";

const SelectUnits = ({ updateUnits }) => {
    const [typeUnits, setTypeUnits] = React.useState('');

    const handleChange = (event) => {
        updateUnits(event.target.value);
        setTypeUnits(event.target.value)
    };

    return (
        <FormControl sx={{ m: 0, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-label">Ед.изм</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeUnits}
                label='Ед.изм.'
                onChange={handleChange}
            >
                <MenuItem value='м'>м</MenuItem>
                <MenuItem value='м²'>м²</MenuItem>
                <MenuItem value='м³'>м³</MenuItem>
                <MenuItem value='шт'>шт</MenuItem>
                <MenuItem value='т'>т</MenuItem>
            </Select>
        </FormControl>
    );
}
export default SelectUnits;