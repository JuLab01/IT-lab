import React from 'react'
import 'boxicons'

export default function InputField({label, name, type, placeholder, id}) {

    id = id || name
    
    if(type == 'password') {
        return <PasswordField label={label} name={name} placeholder={placeholder} id={id} />
    }
    return (
        <div class="mb-4">
            <label for="gmail" class="block text-gray-700">Gmail</label>
            <input
            type="email"
            id="gmail"
            name="gmail"
            placeholder="Enter your Gmail"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
        </div>
    )
}


function PasswordField({label = 'Password', name = 'password', placeholder = "Enter your password", id = 'password'}) {
    const[isOpen, setIsOpen] = React.useState(false)
    function togglePassword() {
        setIsOpen(isOpen => !isOpen)
    }
  return (
    <div class="mb-4 relative">
        <div >
            <label for="password" class="block text-gray-700">{label}</label>
            <input
            type={isOpen ? 'text' : "password"}
            id={id}
            name={name}
            placeholder={placeholder}
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
        </div>
        <span 
        onClick={togglePassword}
        className='absolute top-1/2 right-2 cursor-pointer text-gray-500'>
            {isOpen? <box-icon name='hide'></box-icon> : <box-icon name='show'></box-icon>}
        </span>
    </div>
  )
}
