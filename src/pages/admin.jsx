import "./admin.css";
import { useState } from "react";

const Admin = () => {
    const [product, setProduct] = useState({});

    const saveProduct = () => {
        console.log(product);
    };

    const saveCoupon = () => {
        console.log('Save Coupon');
    }; 

    const productValChange = (e) => { 
        let name = e.target.name;
        let value = e.target.value;
      
        // copy, modify the copy, set the copy back
        let copy = {...product};
        copy[name] = value;
        setProduct(copy);
    };

    return (
        <div className="admin">
            <h3>Store Administration</h3>
        

            <div className="content">
              <div className="products-form">
                <h5>Save Product</h5>
                
                <div className="my-control">
                <label>Title</label>
                <input name="title" onBlur={productValChange} type="text" />
            </div>

            <div className="my-control">
                <label>Image</label>
                <input name="image" onBlur={productValChange} type="text" />
            </div>

            <div className="my-control">
                <label>Category</label>
                <input name="category" onBlur={productValChange} type="text" />
            </div>

            <div className="my-control">
                <label>Price</label>
                <input name="price" onBlur={productValChange} type="number" />
            </div>

            <div className="my-control center">
                <button onClick={saveProduct} className="btn btn-sm btn-dark">Save Product</button>
            </div>

            <div className="coupons-form">
                <h5>Register Coupon Codes</h5>
            
            <div className="my-control">
                <label>Code</label>
                <input type="text" />
            </div>

            <div className="my-control">
                <label>Discount</label>
                <input type="number" />
            </div>

            <div className="my-control center">
                <button onClick={saveCoupon} className="btn btn-sm btn-dark">Save Coupon</button>
            </div>
        </div>
    </div>
</div>
</div>
    );
};

export default Admin;