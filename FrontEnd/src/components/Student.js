import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Student() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    fetch('http://localhost:8080/student/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student),
    }).then(() => {
      console.log('New Student added');
      fetchStudents(); // Refresh the list after adding
    });
  };

  const fetchStudents = () => {
    fetch('http://localhost:8080/student/getAll')
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  };

  useEffect(() => {
    fetchStudents(); // Fetch students on initial render
  }, []);

  const handleDeleteById = (id) => {
    fetch(`http://localhost:8080/student/delete/${id}`, {
      method: 'DELETE',
    }).then(() => {
      console.log(`Student with ID ${id} deleted`);
      fetchStudents(); // Refresh the list after deleting
    });
  };

  const handleDeleteAll = () => {
    fetch('http://localhost:8080/student/deleteAll', {
      method: 'DELETE',
    }).then(() => {
      console.log('All students deleted');
      setStudents([]); // Clear the local state after deleting all
    });
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: 'green' }}>
          <u>Add Student</u>
        </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Student Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Paper>

      <h1>Students</h1>

      <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
            key={student.id}
          >
            Id: {student.id}
            <br />
            Name: {student.name}
            <br />
            Address: {student.address}
            <br />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDeleteById(student.id)}
            >
              Delete
            </Button>
          </Paper>
        ))}

        {students.length > 0 && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteAll}
            style={{ marginTop: '20px' }}
          >
            Delete All
          </Button>
        )}
      </Paper>
    </Container>
  );
}
