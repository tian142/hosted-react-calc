import React, { useState } from "react"

function TipCalc() {
  const [itemPrice, setItemPrice] = useState("")
  const [taxAmount, setTaxAmount] = useState("")
  const [tipAmount, setTipAmount] = useState("")

  const tipPercent = 0.15

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setItemPrice()
  // }

  const total = itemPrice + taxAmount
  console.log(itemPrice)
  console.log(taxAmount)
  console.log(total)

  const finalTip = total * tipPercent

  return (
    <div>
      <h1>Tip Calculator</h1>
      <p>------------------------------------------</p>

      <input
        type="number"
        placeholder="item price"
        name="item"
        onChange={(e) => {
          setItemPrice(e.target.value)
        }}
      />
      <input
        type="number"
        placeholder="totax amount"
        name="tax"
        onChange={(e) => {
          setTaxAmount(e.target.value)
        }}
      />
      <input type="submit" />

      <p>at 15%, you pay: ${finalTip} in tips</p>
    </div>
  )
}

export default TipCalc
