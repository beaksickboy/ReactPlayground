import LoginContainer from '../container/LoginContainer';
import HomeContainer from '../container/HomeContainer';

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