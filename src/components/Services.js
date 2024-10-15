import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return (
    <section style={{ backgroundColor: '#a4ebf3' }} className="py-5">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">
          บริการภายในซัยฟุลบีช รีสอร์ท
        </h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <span className="text-5xl">🍸</span>
                <h3 className="card-title mt-3">Free Cocktails</h3>
                <p className="card-text text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <span className="text-5xl">🏞️</span>
                <h3 className="card-title mt-3">Endless Hiking</h3>
                <p className="card-text text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <span className="text-5xl">🚌</span>
                <h3 className="card-title mt-3">Free Shuttle</h3>
                <p className="card-text text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card text-center">
              <div className="card-body">
                <span className="text-5xl">🍻</span>
                <h3 className="card-title mt-3">Storage Beer</h3>
                <p className="card-text text-gray-600">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
