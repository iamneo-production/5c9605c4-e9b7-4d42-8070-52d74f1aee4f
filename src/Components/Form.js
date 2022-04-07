import React from 'react'
import Card from '@mui/material/Card';
import { TextField,Button } from '@material-ui/core'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
function Form() {
  const [value, setValue] = React.useState(null);
  const [value1, setValue1] = React.useState(null);
  return (
    <div  style={{ marginTop: '10rem', marginLeft: '15rem', marginRight: '15rem' }}  >
       <Card borderRadius={50} id="MyBookingBody"variant="outlined" style={{backgroundColor: "#D3D3D3"}} >
         <h4>Booking Details</h4>
       <TextField id="busname" label="Bus name" variant="standard"  InputLabelProps={{
            shrink: true,
          }} />
       &nbsp; &nbsp; &nbsp; &nbsp;
       <TextField id="address" label="Address" variant="standard"   InputLabelProps={{
            shrink: true,
          }} />
       <br/>
    <br/>
<LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        id="editBookingDate"
        label="From"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      
        renderInput={(params) => <TextField {...params} />}
       
      />
    </LocalizationProvider>
    &nbsp; &nbsp; &nbsp; &nbsp;
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        id="editBookingDate"
        label="To"
        value={value1}
        onChange={(newValue) => {
          setValue1(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        
      />
    </LocalizationProvider>
    <br/> <br/>
      <TextField
          id="editNoOfPerson"
          label="Number of person"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
       &nbsp; &nbsp; &nbsp; &nbsp;
       <TextField id="price" label="Total Price" variant="standard"  InputLabelProps={{
            shrink: true,
          }} />

<br/> <br/>
      <Button id="cancelBookingButton" variant="contained" style={{margin: '0 auto', display: "flex",backgroundColor: "#C0C0C0"}}>Cancel Booking</Button>
      </Card> 
    </div>
    
   
  )
}

export default Form