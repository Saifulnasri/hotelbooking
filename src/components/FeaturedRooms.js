import React from 'react';
import room1Image from '../image/โดม1.jpg'; // อัปเดตให้เป็นที่อยู่ที่ถูกต้อง
import room2Image from '../image/โดม.jpg'; // อัปเดตให้เป็นที่อยู่ที่ถูกต้อง
import room3Image from '../image/โดม3.jpg'; // อัปเดตให้เป็นที่อยู่ที่ถูกต้อง

function FeaturedRooms() {
  return (
    <section style={{ backgroundColor: '#a4ebf3' }} className="py-5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">ห้องพักราคาสบายกระเป๋า</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={room1Image}
                alt="Room 1"
                className="card-img-top rounded-top"
                style={{ height: '250px', objectFit: 'cover' }} // ปรับขนาดและให้รูปไม่เสียสัดส่วน
              />
              <div className="card-body text-center">
                <h3 className="card-title text-2xl">1600 บาทต่อคืน</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={room2Image}
                alt="Room 2"
                className="card-img-top rounded-top"
                style={{ height: '250px', objectFit: 'cover' }} // ปรับขนาดและให้รูปไม่เสียสัดส่วน
              />
              <div className="card-body text-center">
                <h3 className="card-title text-2xl">1800 บาทต่อคืน</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src={room3Image}
                alt="Room 3"
                className="card-img-top rounded-top"
                style={{ height: '250px', objectFit: 'cover' }} // ปรับขนาดและให้รูปไม่เสียสัดส่วน
              />
              <div className="card-body text-center">
                <h3 className="card-title text-2xl">1600 บาทต่อคืน</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedRooms;
