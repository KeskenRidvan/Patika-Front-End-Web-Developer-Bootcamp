import React from "react";
import "./purchase.css";
import purchasesImages1 from "../../assets/images/purchases/purchase1.jpg";
import purchasesImages2 from "../../assets/images/purchases/purchase2.jpg";
import purchasesImages3 from "../../assets/images/purchases/purchase3.jpg";
import purchasesImages4 from "../../assets/images/purchases/purchase4.jpg";

function Purchase() {
  return (
    <section id="purchase">
      <div className="purchase-container container">
        <div className="header">
          <h2>PURCHASE FROM US</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iusto itaque, sapiente! <br /> illum temporibus nihil.
          </p>
        </div>

        {/*  equipment container  */}
        <div className="equipment-container">
          {/*  equipment-1  */}
          <div className="equipment-card">
            <img src={purchasesImages1} />

            {/*  card-box  */}
            <div className="card-box">
              {/*  product  */}
              <div className="product">
                <h4>Kettlebell / 5kg</h4>
                <p>
                  <span>89,99$</span>/ 59,99$
                </p>
              </div>
              {/*  product end  */}

              {/*  cart  */}
              <div className="cart">
                <a href="">
                  <i className="bi bi-cart-fill"></i>
                  Add To Cart
                </a>
              </div>
              {/*  cart end  */}
            </div>
            {/*  card-box end  */}
          </div>
          {/*  equipment-1 end  */}

          {/*  equipment-2  */}
          <div className="equipment-card">
            <img src={purchasesImages2} />

            {/*  card-box  */}
            <div className="card-box">
              {/*  product  */}
              <div className="product">
                <h4>Treadmill</h4>
                <p>
                  <span>899,99$</span>/ 599,99$
                </p>
              </div>
              {/*  product end  */}

              {/*  cart  */}
              <div className="cart">
                <a href="">
                  <i className="bi bi-cart-fill"></i>
                  Add To Cart
                </a>
              </div>
              {/*  cart end  */}
            </div>
            {/*  card-box end  */}
          </div>
          {/*  equipment-2 end  */}

          {/*  equipment-3  */}
          <div className="equipment-card">
            <img src={purchasesImages3} />

            {/*  card-box  */}
            <div className="card-box">
              {/*  product  */}
              <div className="product">
                <h4>Adjustable</h4>
                <p>
                  <span>89,99$</span>/ 59,99$
                </p>
              </div>
              {/*  product end  */}

              {/*  cart  */}
              <div className="cart">
                <a href="">
                  <i className="bi bi-cart-fill"></i>
                  Add To Cart
                </a>
              </div>
              {/*  cart end  */}
            </div>
            {/*  card-box end  */}
          </div>
          {/*  equipment-3 end  */}

          {/*  equipment-4  */}
          <div className="equipment-card">
            <img src={purchasesImages4} />

            {/*  card-box  */}
            <div className="card-box">
              {/*  product  */}
              <div className="product">
                <h4>Kettlebell / 3kg</h4>
                <p>
                  <span>89,99$</span>/ 59,99$
                </p>
              </div>
              {/*  product end  */}

              {/*  cart  */}
              <div className="cart">
                <a href="">
                  <i className="bi bi-cart-fill"></i>
                  Add To Cart
                </a>
              </div>
              {/*  cart end  */}
            </div>
            {/*  card-box end  */}
          </div>
          {/*  equipment-4 end  */}
        </div>
        {/*  equipment container end  */}
      </div>
    </section>
  );
}

export default Purchase;
