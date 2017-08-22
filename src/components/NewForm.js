import React from 'react';

const NewForm = () => {
  return (
    <form>
      <label>Program Type</label>
      <select>
        <option>Count Series</option>
        <option>Time Series</option>
        <option>Membership</option>
      </select>
      <label>Program Name</label>
      <input type="text" placeholder="Username" />
      <label>Program Name</label>
      <input type="password" placeholder="Password" />
      <button type="submit" id="login-button">Login</button>
    </form>
  )
}

export default NewForm;
