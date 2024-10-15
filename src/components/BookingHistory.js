import React, { useEffect, useState } from 'react';
import { Table, Container, Alert, Button, Modal, Form } from 'react-bootstrap';
import styled from 'styled-components';

// CSS Styles สำหรับการจัดโครงสร้างหน้า
const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ให้เนื้อหาขยายไปเต็มความสูงของหน้าจอ */
  background-color: #a4ebf3;
`;

const MainContent = styled.div`
  flex-grow: 1; /* ให้เนื้อหาหลักขยายตัวเต็มพื้นที่ */
`;

const FooterStyled = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  gap: 15px;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f8f9fa;
  }
`;

const PageTitle = styled.h2``;

const StyledTable = styled(Table)`
  margin: 20px; /* Add margin here */
`;

function BookingHistory() {
  const [bookingHistory, setBookingHistory] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [formData, setFormData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookingHistory')) || [];
    setBookingHistory(savedBookings);
  }, []);

  const handleDelete = (index) => {
    const updatedBookings = bookingHistory.filter((_, i) => i !== index);
    localStorage.setItem('bookingHistory', JSON.stringify(updatedBookings));
    setBookingHistory(updatedBookings);
  };

  const handleEdit = (index) => {
    const bookingToEdit = bookingHistory[index];
    setFormData({ ...bookingToEdit });
    setSelectedBooking(index);
    setShowEditModal(true);
  };

  const handleUpdateBooking = () => {
    const updatedBookings = [...bookingHistory];
    updatedBookings[selectedBooking] = formData;
    localStorage.setItem('bookingHistory', JSON.stringify(updatedBookings));
    setBookingHistory(updatedBookings);
    setShowEditModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <PageContainer bgcl="#e9ecef"> {/* Adding dynamic background color */}
      <MainContent>
        <PageTitle>ประวัติการจอง</PageTitle>
        {bookingHistory.length > 0 ? (
          <StyledTable striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>ชื่อผู้จอง</th>
                <th>ห้องพัก</th>
                <th>วันที่เข้าพัก</th>
                <th>วันที่ออก</th>
                <th>เบอร์โทร</th>
                <th>อีเมล</th>
                <th>ราคา</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingHistory.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>{booking.roomName}</td>
                  <td>{booking.checkInDate}</td>
                  <td>{booking.checkOutDate}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.email}</td>
                  <td>{booking.price}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(index)}>แก้ไข</Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(index)}>ลบ</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        ) : (
          <Alert variant="warning">ยังไม่มีประวัติการจอง</Alert>
        )}

        {/* Modal สำหรับการแก้ไขการจอง */}
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>แก้ไขการจอง</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>ชื่อผู้จอง</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formRoomName">
                <Form.Label>ห้องพัก</Form.Label>
                <Form.Control
                  type="text"
                  name="roomName"
                  value={formData.roomName || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formCheckInDate">
                <Form.Label>วันที่เข้าพัก</Form.Label>
                <Form.Control
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formCheckOutDate">
                <Form.Label>วันที่ออก</Form.Label>
                <Form.Control
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>เบอร์โทร</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>อีเมล</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>ราคา</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price || ''}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEditModal(false)}>ปิด</Button>
            <Button variant="primary" onClick={handleUpdateBooking}>บันทึกการแก้ไข</Button>
          </Modal.Footer>
        </Modal>
      </MainContent>
    </PageContainer>
  );
}

export default BookingHistory;
