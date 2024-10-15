import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal, Form, Alert } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from '../image/1.webp';
import Image2 from '../image/2.webp';
import Image3 from '../image/3.webp';
import Image4 from '../image/4.webp';
import Image5 from '../image/5.webp';
import Image6 from '../image/6.webp';
import Image7 from '../image/7.webp';
import BookingHistory from './BookingHistory'; // นำเข้า BookingHistory

const roomsData = [
  { id: 1, name: 'Deluxe Room', description: 'ห้องพักหรูพร้อมวิวทะเล', imageUrl: Image1, price: '3,000 บาท/คืน' },
  { id: 2, name: 'Standard Room', description: 'ห้องพักมาตรฐาน', imageUrl: Image2, price: '2,000 บาท/คืน' },
  { id: 3, name: 'Family Room', description: 'ห้องพักขนาดใหญ่สำหรับครอบครัว', imageUrl: Image3, price: '4,500 บาท/คืน' },
  { id: 4, name: 'Sea View Room', description: 'ห้องพักวิวทะเลสุดโรแมนติก', imageUrl: Image4, price: '3,500 บาท/คืน' },
  { id: 5, name: 'Luxury Suite', description: 'ห้องสวีทหรูสำหรับการพักผ่อนอย่างเต็มที่', imageUrl: Image5, price: '5,000 บาท/คืน' },
  { id: 6, name: 'Garden View Room', description: 'ห้องพักวิวสวนสวยสงบ', imageUrl: Image6, price: '2,500 บาท/คืน' },
  { id: 7, name: 'Garden View Room', description: 'ห้องพักวิวสวนสวยสงบ', imageUrl: Image7, price: '2,500 บาท/คืน' },
];

function Rooms() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    phone: '',
    email: ''
  });

  const handleShowModal = (room) => {
    setSelectedRoom(room);
    setBookingSuccess(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleBookingConfirmation = () => {
    if (formData.name && formData.checkInDate && formData.checkOutDate && formData.phone && formData.email) {
      const newBooking = {
        ...formData,
        roomName: selectedRoom.name,
        price: selectedRoom.price,
      };

      const existingBookings = JSON.parse(localStorage.getItem('bookingHistory')) || [];
      const updatedBookings = [...existingBookings, newBooking];
      localStorage.setItem('bookingHistory', JSON.stringify(updatedBookings));

      setBookingSuccess(true);
      setFormData({ name: '', checkInDate: '', checkOutDate: '', phone: '', email: '' });
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container my-5" style={{ 
      marginTop: '50px', 
      backgroundColor: '#a4ebf3', /* Set background color to #a4ebf3 */
      color: 'black', /* Text color to contrast with the background */
      borderRadius: '10px', /* Optional: for rounded corners */
      padding: '20px', /* Padding for spacing */
      minHeight: '100vh',
    }}>
      <Row>
        {roomsData.map((room) => (
          <Col md={3} key={room.id} className="mb-4">
            <Card className="shadow-sm" style={{ backgroundColor: 'white' }}>
              <Card.Img 
                variant="top" 
                src={room.imageUrl} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title style={{ color: 'black' }}>{room.name}</Card.Title>
                <Card.Text style={{ color: 'black' }}>{room.description}</Card.Text>
                <Card.Text style={{ color: 'blue', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {room.price}
                </Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(room)}>
                  จองห้องพัก
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedRoom && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>จองห้องพัก: {selectedRoom.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {bookingSuccess ? (
              <Alert variant="success" className="d-flex align-items-center">
                <FaCheckCircle size={24} className="me-2" />
                <div>การจองสำเร็จ!</div>
              </Alert>
            ) : (
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>ชื่อผู้จอง</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="กรอกชื่อของคุณ" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formCheckInDate">
                  <Form.Label>วันที่เข้าพัก</Form.Label>
                  <Form.Control 
                    type="date" 
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formCheckOutDate">
                  <Form.Label>วันที่ออก</Form.Label>
                  <Form.Control 
                    type="date" 
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>เบอร์โทร</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone"
                    placeholder="กรอกเบอร์โทรศัพท์" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>อีเมล</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="กรอกอีเมลของคุณ"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            )}
          </Modal.Body>
          <Modal.Footer>
            {!bookingSuccess && (
              <>
                <Button variant="secondary" onClick={handleCloseModal}>ปิด</Button>
                <Button variant="primary" onClick={handleBookingConfirmation}>ยืนยันการจอง</Button>
              </>
            )}
            {bookingSuccess && <Button variant="success" onClick={handleCloseModal}>ปิด</Button>}
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Rooms;
