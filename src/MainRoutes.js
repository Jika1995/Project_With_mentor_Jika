import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

const MainRoutes = () => {

    const PUBLIC_ROUTES = [
        {
        link: '/register',
        element: <RegistrationPage />,
        id: 1
        },
        {
            link: '/login',
            element: <LoginPage />,
            id: 2
        },
        {
            link: '/',
            element: <HomePage />,
            id: 3
        },
        {
            link: '*', //все пути, которые НЕ указаны в моей выборке
            element: <NotFoundPage />,
            id: 4
        }
    ];

  return (
    <div>
        <Routes>
            {PUBLIC_ROUTES.map(item => (
                <Route path={item.link} element={item.element} key={item.id} /> //можно и не добавлять айди, а только по индексам
            ))}
        </Routes>
    </div>
  )
}

export default MainRoutes

//массив с объектами, где внутри объекта путь и элемент - ДИНАМИКА