import { Card, CardContent,Typography, Container, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch } from 'react-redux';
import {deleteTodo, toggleTodoComplete} from '../store/todoSlice';

const TodoItem = ({id, isCompleted, text}) => {
    const dispatch = useDispatch();
    const markComplete = () => dispatch(toggleTodoComplete({id}));
    const removeTodo = () => dispatch(deleteTodo({id}));

    const todoStyle = isCompleted
    ? {textDecoration: "line-through"}
    : {textDecoration: "none"};

    const bgStyle = isCompleted
    ? '#b2afaf'
    : 'lightgray';

    return (
        <Container>
            <Card variant="outlined" style={{marginTop: 35, background:`${bgStyle}`}} >
                <CardContent>
                    <Typography variant="h5" component="h2" style={todoStyle}>
                        <IconButton onClick ={markComplete}>
                            <CheckIcon style={{color: "green"}}/>
                        </IconButton>
                        {text}
                        <IconButton onClick={removeTodo } style={{float: "right"}}>
                            <DeleteForeverIcon style={{color: "red"}}/>
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    )
};
export default TodoItem;