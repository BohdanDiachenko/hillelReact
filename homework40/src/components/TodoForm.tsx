import { FormControl, Container, TextField, Button } from '@mui/material';

const TodoForm = ({ text, handleImput, handleSubmit }) => {
    return (
        <Container maxWidth="sm">
            <form >
                <FormControl fullWidth={true}>
                    <TextField
                        label="I will do this"
                        required={true}
                        value={text}
                        onChange={(e) => handleImput(e.target.value)} />
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        type="submit"
                        style={{ marginTop: 5, backgroundColor: '#6AAF5C' }}>
                        Add Todo
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
};
export default TodoForm;