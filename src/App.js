import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import FeaturedRooms from './components/FeaturedRooms';
import Login from './components/Login'; // นำเข้า Login component
import Rooms from './components/Rooms'; // นำเข้า Rooms component
import BookingHistory from './components/BookingHistory'; // นำเข้า BookingHistory component
import { AuthProvider } from './components/AuthContext'; // นำเข้า AuthProvider
import PrivateRoute from './components/PrivateRoute'; // นำเข้า PrivateRoute

function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <PrivateRoute>
                                    <Hero />
                                    <Services />
                                    <FeaturedRooms />
                                </PrivateRoute>
                            } 
                        />
                        <Route 
                            path="/rooms" 
                            element={
                                <PrivateRoute>
                                    <Rooms />
                                </PrivateRoute>
                            } 
                        />
                        <Route 
                            path="/booking-history" 
                            element={
                                <PrivateRoute>
                                    <BookingHistory />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/login" element={<Login />} /> {/* เส้นทางไปยัง Login */}
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
