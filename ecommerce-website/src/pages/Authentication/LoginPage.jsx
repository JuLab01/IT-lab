import React from 'react'
import InputField from '../../UI/Auth/InputField'

export default function LoginPage() {
  return (
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          {/* <!-- Name Field --> */}
          
          <InputField label="Name" name="name" type="text" placeholder="Enter your name" id="name" />
          {/* <!-- Gmail Field --> */}

          <InputField label="Gmail" name="gmail" type="email" placeholder="Enter your Gmail" id="gmail" />
          {/* <!-- Password Field --> */}
          
          <InputField label="Password" name="password" type="password" placeholder="Enter your password" id="password" />
          {/* <!-- Confirm Password Field --> */}

          <InputField label="Confirm Password" name="confirm-password" type="password" placeholder="Confirm your password" id="confirm-password" />
          {/* <!-- Submit Button --> */}
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  )
}
