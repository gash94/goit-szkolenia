import { nanoid } from "nanoid";

export const toggleCompleted = (taskId) => {
    return {
        type: "tasks/toggleCompleted",
        payload: taskId,
    };
};

export const deleteTask = (taskId) => {
    return {
        type: "tasks/deleteTask",
        payload: taskId,
    };
};

export const addTask = (text) => {
    return {
        type: "tasks/addTask",
        payload: {
            id: nanoid(),
            completed: false,
            text: text,
        },
    };
};

export const setStatusFilter = (value) => {
    return {
        type: "filters/setStatusFilter",
        payload: value,
    };
};
