import { useState } from "react"


function App() {
 
  const [open, setOpen] = useState(false)
  return (
    <>
        <div className="bg-[#E9EAEC] py-4">
      <div className="container mx-auto">

        {/* Wrapper box */}
        <div className="bg-white rounded-3xl px-8 py-4 shadow-sm flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              className="w-7 h-7"
              alt="ZapShift"
            />
            <span className="text-2xl font-semibold text-gray-800">ZapShift</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10 text-gray-600 text-[15px] font-medium">
            <a className="hover:text-black cursor-pointer">Services</a>
            <a className="hover:text-black cursor-pointer">Coverage</a>
            <a className="hover:text-black cursor-pointer">About Us</a>
            <a className="hover:text-black cursor-pointer">Pricing</a>
            <a className="hover:text-black cursor-pointer">Be a Rider</a>
          </div>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Sign In */}
            <button className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 bg-white hover:bg-gray-100">
              Sign In
            </button>

            {/* Green Button + Black circular icon */}
            <div className="flex items-center gap-2">
              <button className="px-6 py-2 rounded-xl bg-[#C5F57B] text-gray-900 font-semibold hover:brightness-95">
                Be a rider
              </button>
              <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-lg">↗</span>
              </button>
            </div>

          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>

        </div>

        {/* Mobile menu */}
        {open && (
          <div className="bg-white rounded-3xl mt-3 shadow-md px-8 py-5 flex flex-col gap-4 lg:hidden">

            <a className="text-gray-700">Services</a>
            <a className="text-gray-700">Coverage</a>
            <a className="text-gray-700">About Us</a>
            <a className="text-gray-700">Pricing</a>
            <a className="text-gray-700">Be a Rider</a>

            <button className="px-6 py-2 rounded-xl border border-gray-300 text-gray-700 w-full mt-3">
              Sign In
            </button>

            <div className="flex items-center gap-2 mt-3">
              <button className="px-6 py-2 rounded-xl bg-[#C5F57B] text-gray-900 font-semibold w-full">
                Be a rider
              </button>
              <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-lg">↗</span>
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
