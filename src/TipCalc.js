import React, { useState } from "react"

function TipCalc() {
  const [itemPrice, setItemPrice] = useState(0)
  const [tipPercent, setTipPercent] = useState(0)
  const [party, setParty] = useState(0)

  const totalTip = (parseInt(itemPrice) * parseInt(tipPercent)) / 100
  const subTotal = parseInt(itemPrice) + totalTip
  const individualPay = subTotal / parseInt(party)
  console.log(totalTip)
  console.log(subTotal)
  console.log(individualPay)

  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>------------------------------------------</p>

      <input
        type="number"
        placeholder="item price"
        onChange={e => {
          setItemPrice(e.target.value)
        }}
      />
      <input
        type="number"
        placeholder="Tip %"
        onChange={e => {
          setTipPercent(e.target.value)
        }}
      />
      <input
        type="number"
        placeholder="Split Between"
        onChange={e => {
          setParty(e.target.value)
        }}
      />
      <input type="submit" />

      <p>
        The Subtotal is: ${subTotal} The party of {party} pays ${" "}
        {individualPay.toFixed(2)}.
      </p>
    </div>
  )
}

export default TipCalc
