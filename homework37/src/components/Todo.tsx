import { Card, CardContent,Typography, Container, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
type TodoProps = {
    title: string 
    checkTodo: any
    id: number 
    isCompleted: boolean 
    deleteTodo: any
}

const Todo = ({title, id, isCompleted, checkTodo, deleteTodo}: TodoProps) => {
    const markComplete = () => checkTodo(id);
    const delTodo = () => deleteTodo(id)
    const todoStyle = isCompleted
        ? {textDecoration: "line-through"}
        : {textDecoration: "none"};
    const bgStyle = isCompleted
        ? '#b2afaf'
        : 'lightgray'
    return (
        <div>
            <Container>
                <Card variant="outlined" style={{marginTop: 35, background:`${bgStyle}`}} >
                    <CardContent>
                        <Typography variant="h5" component="h2" style={todoStyle}>
                            <IconButton onClick={markComplete}>
                                <CheckIcon style={{color: "green"}}/>
                            </IconButton>
                            {title}
                            <IconButton onClick={delTodo} style={{float: "right"}}>
                                <DeleteForeverIcon style={{color: "red"}}/>
                            </IconButton>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>)
};
export default Todo;