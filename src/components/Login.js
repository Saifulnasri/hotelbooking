import React, { useState } from 'react';
import { auth, provider, facebookProvider } from './firebase'; // นำเข้าการตั้งค่าจาก firebase
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // อย่าลืม import Bootstrap CSS

// URL โลโก้ของ Google และ Facebook
const googleLogo = "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"; // โลโก้ Google
const facebookLogo = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"; // โลโก้ Facebook

function Login() {
  const [user, setUser] = useState(null); // สร้าง state สำหรับเก็บข้อมูลผู้ใช้
  const navigate = useNavigate(); // สร้างฟังก์ชัน navigate

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider); // ล็อกอินด้วย Google
      setUser(result.user); // เก็บข้อมูลผู้ใช้
      console.log('Logged in successfully', result.user);
      navigate('/'); // เปลี่ยนเส้นทางไปหน้า Home หลังจากล็อกอินสำเร็จ
    } catch (error) {
      console.error('Error logging in with Google: ', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider); // ล็อกอินด้วย Facebook
      setUser(result.user); // เก็บข้อมูลผู้ใช้
      console.log('Logged in successfully with Facebook', result.user);
      navigate('/'); // เปลี่ยนเส้นทางไปหน้า Home หลังจากล็อกอินสำเร็จ
    } catch (error) {
      console.error('Error logging in with Facebook: ', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {user ? ( // ตรวจสอบว่ามีผู้ใช้ล็อกอินหรือไม่
        <div className="card" style={{ width: '25rem' }}>
          <div className="card-body text-center">
            <h2 className="card-title">Welcome, {user.displayName}!</h2> {/* แสดงชื่อผู้ใช้ในข้อความยินดีต้อนรับ */}
            <img
              src={user.photoURL} // แสดงภาพโปรไฟล์ผู้ใช้
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: '100px', height: '100px' }}
            />
            <h4>{user.displayName}</h4> {/* แสดงชื่อผู้ใช้ */}
            <p>{user.email}</p> {/* แสดงอีเมลผู้ใช้ */}
            <button className="btn btn-primary mt-3" onClick={() => setUser(null)}>
              ล็อกเอาท์
            </button>
          </div>
        </div>
      ) : (
        <div className="card" style={{ width: '25rem' }}>
          <div className="card-body d-flex flex-column align-items-center text-center">
            <h2 className="card-title mb-4">เข้าสู่ระบบ</h2>
            {/* ปุ่มล็อกอินด้วย Google */}
            <button className="btn btn-danger d-flex align-items-center mb-2" onClick={handleGoogleLogin}>
              <img src={googleLogo} alt="Google" style={{ width: '20px', marginRight: '10px' }} />
              ล็อกอินด้วย Google
            </button>
            {/* ปุ่มล็อกอินด้วย Facebook */}
            <button className="btn btn-primary d-flex align-items-center" onClick={handleFacebookLogin}>
              <img src={facebookLogo} alt="Facebook" style={{ width: '20px', marginRight: '10px' }} />
              ล็อกอินด้วย Facebook
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
