import LoginContainer from '../components/LoginContainer/LoginContainer';
import HomeContainer from '../components/HomeContainer/HomeContainer';

const routes = [
    {
        path: "/login",
        component: LoginContainer
    },
    {
        path: "/home",
        component: HomeContainer
    }
]

export default routes;