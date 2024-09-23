import React from 'react'
import "../../styles/buttons.css"
function Buttons() {
  return (
    <div className="buttons">
      <button className="button"><span class="material-symbols-outlined">
supervisor_account
</span>
	<p>Customers</p></button>
      <button className="button"><span class="material-symbols-outlined">
local_activity
      </span><p>Cupon</p></button>
      <button className="button"><span class="material-symbols-outlined">
price_check
</span>
	<p>Discount</p></button>
    </div>
  )
}

export default Buttons
