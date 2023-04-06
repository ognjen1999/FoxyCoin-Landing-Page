import { useCallback, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import StyledTableCell from '../components/StyledTableCell';
import StyledTableRow from '../components/StyledTableRow';
import axios from '../utils/axiosInstance';

const IntervalFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchQuote();
    const myInterval = setInterval(fetchQuote, 5000);

    return () => {
      // should clear the interval when the component unmounts
      clearInterval(myInterval);
    };
  }, []);

  const fetchQuote = useCallback(async () => {
    try {
      const { data } = await axios.get('/alerts');
      setData(data);
    } catch (error) {
      console.log('Error in fetchQuote', error);
    }
  }, [setData]);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, backgroundColor: '#212529' }}
        aria-label='simple table'
      >
        <TableBody>
          {data.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <StyledTableCell align='left'>
                <LocalFireDepartmentIcon />{' '}
              </StyledTableCell>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='left'>{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IntervalFetch;
