import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Instagram Clone</h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/create-post" component={CreatePost} />
                    <Route path="/" component={PostList} exact />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
