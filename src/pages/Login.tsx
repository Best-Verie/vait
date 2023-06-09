
export default function Login() {
  return (
       <>
            <div className="flex justify-center items-center h-screen">
                 <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                           <label className="block text-gray-700 font-bold mb-2" >
                                Username
                           </label>
                           <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                           />
                      </div>
                      <div className="mb-6">
                           <label className="block text-gray-700 font-bold mb-2" >
                                Password
                           </label>
                           <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                           />
                      </div>
                      <div className="flex items-center justify-between">
                           <button
                                className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                           >
                                Sign In
                           </button>
                           <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                           </a>
                      </div>
                 </form>
            </div>
       </>
  )
}
