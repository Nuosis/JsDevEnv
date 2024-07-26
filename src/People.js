import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import Button  from "./Button"

const sendToFilemaker = (payload, path) => {
  const scriptName = "js * callback"
  const scriptParameter = JSON.stringify({payload,path});
  // console.log(scriptParameter);
  FileMaker.PerformScript(scriptName, scriptParameter);
}

const PeopleTable = ({ data }) => {
  console.log({data})
  return (
    <TableContainer component={Paper} elevation={3}>
      <Typography variant="h6" style={{ padding: 16 }}>Customer Details</Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell align="center">DOB</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.fieldData.__ID}>
              <TableCell component="th" scope="row">
                {row.fieldData.Name}
              </TableCell>
              <TableCell >{row.fieldData.Address}</TableCell>
              <TableCell >{row.fieldData.Phone}</TableCell>
              <TableCell >{row.fieldData.DOB}</TableCell>
              <TableCell >{row.fieldData.StartDate}</TableCell>
              <TableCell >
                {row.portalData.email && row.portalData.email.length > 0 ? (
                  row.portalData.email.map((email, index) => (
                    <div key={index} onClick={() => sendToFilemaker(row.fieldData.__ID,"editEmail")}
                      style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                      {email["email::Email"]}
                    </div>
                  ))
                ) : (
                  <Button label="Add Email" color="primary" onClick={() => sendToFilemaker(row.fieldData.__ID,"editEmail")}/>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PeopleTable;
