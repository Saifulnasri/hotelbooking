import React from 'react';
import poolImage from '../image/ตารอ.jpg'; // ตรวจสอบให้แน่ใจว่าที่อยู่ไฟล์ถูกต้อง

function Hero() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <img 
        src={poolImage} 
        alt="Pool" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
    
    </section>
  );
}

export default Hero;
