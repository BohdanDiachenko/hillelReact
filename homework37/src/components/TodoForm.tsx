import React, { useState } from 'react';
import { FormControl, Container, TextField, Button } from '@mui/material';

const TodoForm = ({ addTodo }:any) => {
    const [text, setText] = useState("");
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField 
                        label="I will do this" 
                        required={true}
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                    <Button variant="contained"  type="submit" style={{marginTop:5, backgroundColor: '#6AAF5C' }}>Add Todo</Button>
                </FormControl>
            </form>
        </Container>
    )
};
export default TodoForm;