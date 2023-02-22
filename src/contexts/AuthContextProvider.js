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

    }

  return (
    <authContext.Provider value={{
        user,
        error,

        register,
        login
    }}>
        { children }
    </authContext.Provider>
  )
}

export default AuthContextProvider