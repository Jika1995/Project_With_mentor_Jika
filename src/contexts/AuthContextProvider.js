import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext); //custom hook

const API = 'http://35.239.251.89/'; //нужен слеш

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    };

    const register = async (username, password) => {
        //сбор данных для бэка
        let formData = new FormData(); //объект от класса внутри JS
        formData.append('username', username); //какой ключ и что
        formData.append('password', password); 

        //тут ниже локальное пространство
        try {
            const res = await axios.post(`${API}register/`, formData, config) //потому что слеш там есть в АПИ. Куда? Что? Доп сопровождающие вещи(могут быть и не быть)
            console.log(res);
            navigate('/login'); //зарегистрировался - иди авторизуйся
            setError('')
        } catch(err) {
            console.log(err); 
            setError('Error occured!') //объект ошибки
        };

    };

    const login = async(username, password) => {
        let formData = new FormData(); //объект от класса внутри JS
        formData.append('username', username); //какой ключ и что
        formData.append('password', password); 

        try {
            
            let res = await axios.post(`${API}api/token/`, formData, config);
            console.log(res.data);
            navigate('/'); //переброс на homepage
            localStorage.setItem('token', JSON.stringify(res.data))
            localStorage.setItem('username', username); //потому что в username уже лежит строка, поэтому не надо stringify
            setUser(username);
            setError('');

        } catch(e) {
            console.log(e);
            setError('Wrong username or password!');
        };

    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUser("");
        navigate("/");
    };

    const checkAuth = async () => {
        console.log('WORKED!');
        let token = JSON.parse(localStorage.getItem('token')) //будет JS объект с двумя ключами, refresh и access

        try {
            const Authorization = `Bearer ${token.access}`; //получили авторизацию
            let res = await axios.post(
                `${API}api/token/refresh/`, //куда - запрос должен быть авторизованный
                { refresh: token.refresh }, //что отправить
                { headers: { Authorization }} //кто такой - просто передается как объект
            ); //res - ответ от сервера на мой отправленный запрос post

            //ОТВЕТ ПОЛУЧАЕШЬ ВСЕГДА при запросах, и put post patch delete, а НЕ ТОЛЬКО get

            console.log(res);

            localStorage.setItem('token', JSON.stringify({
                refresh: token.refresh,
                access: res.data.access
            }));

            let username = localStorage.getItem('username'); //на всякий случай обновляем юзера
            setUser(username);

        } catch (error) {
            console.log(error);
            logout();
        }
    }

  return (
    <authContext.Provider value={{
        user,
        error,

        register,
        login,
        logout,
        checkAuth
    }}>
        { children }
    </authContext.Provider>
  )
}

export default AuthContextProvider