import { StatusFilter } from "./components/StatusFilter/StatusFilter";
import { TaskList } from "./components/TaskList/TaskList";
import { Layout } from "./components/Layout/Layout";
import { TaskForm } from "./components/TaskForm/TaskForm";

const App = () => {
    return (
        <Layout>
            <StatusFilter />
            <TaskForm />
            <TaskList />
        </Layout>
    );
};

export default App;
