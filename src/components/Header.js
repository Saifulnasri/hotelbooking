import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // นำเข้า Link และ useNavigate
import { AuthContext } from './AuthContext'; // นำเข้า AuthContext
import "bootstrap/dist/css/bootstrap.min.css"; // อย่าลืม import Bootstrap CSS

function Header() {
  const { user, logout } = useContext(AuthContext); // ใช้ context เพื่อดึงข้อมูลผู้ใช้และฟังก์ชัน logout
  const navigate = useNavigate(); // ใช้ useNavigate เพื่อเปลี่ยนเส้นทาง

  const handleLogout = () => {
    logout(); // เรียกใช้ฟังก์ชัน logout
    navigate("/login"); // เปลี่ยนเส้นทางไปยังหน้า login
  };

  return (
    <Navbar expand="lg" fixed="top" className="shadow-md border-b border-gray-300" style={{ backgroundColor: '#51c2d5' }}>
      <div className="container">
        <Navbar.Brand as={Link} to="/" className="me-auto">
          <span className="text-2xl font-bold text-gray-800 ms-2">
            <span className="text-black">B</span>
            <span className="text-gray-500">each</span>
            <span className="text-black"> R</span>
            <span className="text-gray-500">esort</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Align the Nav links to the center */}
          <Nav className="mx-auto">
            {/* หน้าเว็บหลัก */}
            <Nav.Link 
              as={Link} 
              to="/" 
              className="btn btn-success me-2" 
              style={{ 
                fontSize: '1rem', 
                color: 'black', 
                borderRadius: '5px', 
                padding: '10px 20px', 
                fontWeight: 'bold', 
                border: '2px solid blue' // Blue border
              }}
            >
              หน้าหลัก
            </Nav.Link>
            {/* จองห้องพัก */}
            <Nav.Link 
              as={Link} 
              to="/rooms" 
              className="btn btn-success me-2" 
              style={{ 
                fontSize: '1rem', 
                color: 'black', 
                borderRadius: '5px', 
                padding: '10px 20px', 
                fontWeight: 'bold', 
                border: '2px solid blue' // Blue border
              }}
            >
              จองห้องพัก
            </Nav.Link>
            {/* ประวัติการจอง */}
            {user && (
              <Nav.Link 
                as={Link} 
                to="/booking-history" 
                className="btn btn-success" 
                style={{ 
                  fontSize: '1rem', 
                  color: 'black', 
                  borderRadius: '5px', 
                  padding: '10px 20px', 
                  fontWeight: 'bold', 
                  border: '2px solid blue' // Blue border
                }}
              >
                ประวัติการจอง
              </Nav.Link>
            )}
          </Nav>

          {/* Right side - Login/Logout */}
          <Nav>
            <Nav.Item>
              {user ? ( // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
                <>
                  <span className="me-3" style={{ color: 'black', fontSize: '1.25rem' }}>{user.displayName || 'User'}</span> {/* แสดงชื่อผู้ใช้ */}
                  <button 
                    className="btn btn-danger" 
                    onClick={handleLogout}
                    style={{ color: 'white', fontSize: '1rem', padding: '10px 20px', borderRadius: '5px',  }}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <button 
                    className="btn btn-primary" 
                    style={{ color: 'white', fontSize: '1rem', padding: '10px 20px', borderRadius: '5px',  }}
                  >
                    Log In
                  </button>
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
