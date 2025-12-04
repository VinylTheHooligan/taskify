import { useReducer } from "react";
import { DndContext } from '@dnd-kit/core';

interface Task {
    id: number;
    title: string;
    description: string;
}

interface Column {
    id : number;
    title : string;
    tasks : Task[];
}

type BoardState = {
    columns: Column[];
}

type BoardActions = 
    | { type: "ADD_TASK"; payload: { task: Task; columnIndex: number } }
    | { type: "REMOVE_TASK"; payload: { taskId : number; columnIndex : number } }
    | { type: "ADD_COLUMN"; payload: { columnTitle : string } }
    | { type: "REMOVE_COLUMN"; payload: { columnIndex : number } };

function BoardReducer(state: BoardState, action: BoardActions): BoardState {
    switch (action.type) 
    {
        case "ADD_TASK": 
            const addedState = [...state.columns];
            addedState[action.payload.columnIndex].tasks.push({                    
                id: Date.now(),
                title: action.payload.task.title,
                description: action.payload.task.description,
            });
            return { columns: addedState };

        case "REMOVE_TASK":
            const removedState = [...state.columns];
            removedState[action.payload.columnIndex].tasks =
                removedState[action.payload.columnIndex].tasks.filter(
                    task => task.id !== action.payload.taskId
                );
            return { columns: removedState };

        case "ADD_COLUMN":
            const newColumn = [...state.columns];
            newColumn.push({
                id: Date.now(),
                title: action.payload.columnTitle,
                tasks: [],
            });
            return { columns: newColumn };

        case "REMOVE_COLUMN":
            const fewerColumns = [...state.columns];
            fewerColumns.splice(action.payload.columnIndex, 1);
            return { columns: fewerColumns };
    }
}

export default function Board() {    

    const initialState: BoardState = {
        columns: [
            { id: 1, title: "To-Do", tasks: [] },
            { id: 2, title: "In Progress", tasks: [] },
            { id: 3, title: "Done", tasks: [] },
        ],
    };

    const [state, dispatch] = useReducer(BoardReducer, initialState);

    return (
        <DndContext>
            
        </DndContext>
    )
}
