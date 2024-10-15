import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext); // ดึงข้อมูลผู้ใช้จาก context

    return user ? children : <Navigate to="/login" />; // หากผู้ใช้ล็อกอินแล้ว ให้แสดง children ถ้ายังไม่ได้ล็อกอิน ให้เปลี่ยนเส้นทางไปยัง /login
}

export default PrivateRoute;
