import React from 'react'

const Input = ({label,type,name,value,handleChange,placeholder,error}) => {
  return (
    <div className='d-flex justify-content-center flex-column'>
        <label htmlFor="basic-url" className="form-label text-primary">{label}</label>
        <div className="input-group mb-3">
            <input type={type} name={name} required value={value} placeholder={placeholder} onChange={handleChange} aria-describedby="basic-addon3" />
        </div>
        <div className="valid-feedback">
            {error}
        </div>
    </div>
  )
}

export default Input