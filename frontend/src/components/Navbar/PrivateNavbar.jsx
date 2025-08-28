import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/slice/authSlice";
import { SiAuthy } from "react-icons/si";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function PrivateNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutAction());
    navigate("/login"); // ✅ smoother than window.location.href
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
  {({ open, close }) => (   // 👈 get close here
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Mobile button */}
          <div className="md:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none">
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </Disclosure.Button>
          </div>

          {/* Logo */}
          <div className="ml-2 flex-shrink-0 flex items-center">
            <SiAuthy className="h-8 w-auto text-green-500" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:space-x-6 ml-6">
            <Link to="/" className="text-sm font-medium text-gray-900 border-b-2 border-indigo-500">
              MasyncTracker
            </Link>
            <Link to="/add-transaction" className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Add Transaction
            </Link>
            <Link to="/add-category" className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Add Category
            </Link>
            <Link to="/categories" className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Categories
            </Link>
            <Link to="/profile" className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Profile
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-gray-500 hover:text-gray-700">
              Dashboard
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            <button
              onClick={logoutHandler}
              className="flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
            >
              <IoLogOutOutline className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <Disclosure.Panel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Disclosure.Button as={Link} to="/" onClick={() => close()}
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            MasyncTracker
          </Disclosure.Button>

          <Disclosure.Button as={Link} to="/add-transaction" onClick={() => close()}
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Add Transaction
          </Disclosure.Button>

          <Disclosure.Button as={Link} to="/add-category" onClick={() => close()}
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Add Category
          </Disclosure.Button>

          <Disclosure.Button as={Link} to="/categories" onClick={() => close()}
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Categories
          </Disclosure.Button>

          <Disclosure.Button as={Link} to="/profile" onClick={() => close()}
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Profile
          </Disclosure.Button>

          <Disclosure.Button as={Link} to="/dashboard" onClick={() => close()}
            className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md">
            Dashboard
          </Disclosure.Button>
        </div>

        <div className="border-t border-gray-200 px-2 py-3">
          <button
            onClick={() => {
              logoutHandler();
              close();
            }}
            className="block w-full text-left text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
          >
            Sign out
          </button>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>

    // <Disclosure as="nav" className="bg-white shadow">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //         <div className="flex h-16 justify-between items-center">
    //           {/* Left Side */}
    //           <div className="flex items-center">
    //             {/* Mobile menu button */}
    //             <div className="md:hidden">
    //               <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none">
    //                 {open ? (
    //                   <XMarkIcon className="h-6 w-6" />
    //                 ) : (
    //                   <Bars3Icon className="h-6 w-6" />
    //                 )}
    //               </Disclosure.Button>
    //             </div>

    //             {/* Logo */}
    //             <div className="ml-2 flex-shrink-0 flex items-center">
    //               <SiAuthy className="h-8 w-auto text-green-500" />
    //             </div>

    //             {/* Desktop Links */}
    //             <div className="hidden md:flex md:space-x-6 ml-6">
    //               <Link
    //                 to="/"
    //                 className="text-sm font-medium text-gray-900 border-b-2 border-indigo-500"
    //               >
    //                 MasyncTracker
    //               </Link>
    //               <Link
    //                 to="/add-transaction"
    //                 className="text-sm font-medium text-gray-500 hover:text-gray-700"
    //               >
    //                 Add Transaction
    //               </Link>
    //               <Link
    //                 to="/add-category"
    //                 className="text-sm font-medium text-gray-500 hover:text-gray-700"
    //               >
    //                 Add Category
    //               </Link>
    //               <Link
    //                 to="/categories"
    //                 className="text-sm font-medium text-gray-500 hover:text-gray-700"
    //               >
    //                 Categories
    //               </Link>
    //               <Link
    //                 to="/profile"
    //                 className="text-sm font-medium text-gray-500 hover:text-gray-700"
    //               >
    //                 Profile
    //               </Link>
    //               <Link
    //                 to="/dashboard"
    //                 className="text-sm font-medium text-gray-500 hover:text-gray-700"
    //               >
    //                 Dashboard
    //               </Link>
    //             </div>
    //           </div>

    //           {/* Right Side */}
    //           <div className="flex items-center">
    //             {/* Logout Button */}
    //             <button
    //               onClick={logoutHandler}
    //               aria-label="Logout"
    //               className="flex items-center gap-x-1.5 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700"
    //             >
    //               <IoLogOutOutline className="h-5 w-5" />
    //               <span>Logout</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Mobile Nav */}
    //       <Disclosure.Panel className="md:hidden">
    //         {({ close }) => (
    //           <>
    //             <div className="space-y-1 px-2 pt-2 pb-3">
    //               <Disclosure.Button
    //                 as={Link}
    //                 to="/"
    //                 className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
    //                 onClick={() => close()}
    //               >
    //                 MasyncTracker
    //               </Disclosure.Button>

    //               <Disclosure.Button
    //                 as={Link}
    //                 to="/add-transaction"
    //                 className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
    //                 onClick={() => close()}
    //               >
    //                 Add Transaction
    //               </Disclosure.Button>

    //               <Disclosure.Button
    //                 as={Link}
    //                 to="/add-category"
    //                 className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
    //                 onClick={() => close()}
    //               >
    //                 Add Category
    //               </Disclosure.Button>

    //               <Disclosure.Button
    //                 as={Link}
    //                 to="/categories"
    //                 className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
    //                 onClick={() => close()}
    //               >
    //                 Categories
    //               </Disclosure.Button>

    //               <Disclosure.Button
    //                 as={Link}
    //                 to="/profile"
    //                 className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
    //                 onClick={() => close()}
    //               >
    //                 Profile
    //               </Disclosure.Button>

    //               <Disclosure.Button
    //                 as={Link}
    //                 to="/dashboard"
    //                 className="block text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
    //                 onClick={() => close()}
    //               >
    //                 Dashboard
    //               </Disclosure.Button>
    //             </div>

    //             <div className="border-t border-gray-200 px-2 py-3">
    //               <button
    //                 onClick={() => {
    //                   logoutHandler();
    //                   close(); // 👈 also closes menu after logout
    //                 }}
    //                 className="block w-full text-left text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
    //               >
    //                 Sign out
    //               </button>
    //             </div>
    //           </>
    //         )}
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
  );
}
