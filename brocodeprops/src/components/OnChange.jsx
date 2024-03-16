import React, {useState} from 'react';

function OnChange() {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [payment, setPayment] = useState('Visa');
    const [shipping, setShipping] = useState('Pick Up');

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeQuantity = (e) => {
        setQuantity(e.target.value);
    };

    const onChangeComment = (e) => {
        setComment(e.target.value);
    };

    const onChangePayment = (e) => {
        setPayment(e.target.value);
    };

    const onChangeShipping = (e) => {
        setShipping(e.target.value);
    };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeName} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={onChangeQuantity} />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={onChangeComment}
        placeholder="please enter optional instructions about order."
        cols="30"
        rows="10"
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={onChangePayment}>
        <option>Visa</option>
        <option>Mastercard</option>
        <option>Giftcard</option>
      </select>
      <p>Payment Method: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={onChangeShipping}
        />
        Pick Up
      </label>

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={onChangeShipping}
        />
        Delivery
      </label>
      <p>Shipping Method: {shipping}</p>
    </div>
  );
}

export default OnChange;