import React from 'react'

function AddProduct({setIsOpen}) {
  return (
    <div>
        <button onClick={()=>setIsOpen(true)}>Yeni Ürün Ekle</button>
    </div>
  )
}

export default AddProduct