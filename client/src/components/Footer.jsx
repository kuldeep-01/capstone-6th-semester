import logo from './flower.jpg'

function Footer() {
    return (
        // <footer class="bg-white rounded-lg dark:bg-gray-900 m-4">
        //     <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        //         <div class="sm:flex sm:items-center sm:justify-between">
        //             <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        //                 <img src={logo} class="h-12 rounded-md" alt="Flowbite Logo" />
        //                 <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Connecting World</span>
        //             </a>
        //             <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        //                 <li>
        //                     <a href="#" class="hover:underline me-4 md:me-6">About</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="hover:underline">Contact</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </footer>
        <footer className="bg-neutral-200 py-20 sm:py-5  p-6 lg:px-8">
    
        <div class="hidden lg:flex lg:gap-x-12 justify-center">
          <a href="/#" class="text-sm font-semibold leading-7 text-black">About</a>
          <a href="/#" class="text-sm font-semibold leading-6 text-black">Privacy Policy</a>
          <a href="/#" class="text-sm font-semibold leading-6 text-black">Licensing</a>
          <a href="/#" class="text-sm font-semibold leading-6 text-black">Contact us</a>
        </div>
        <div class="lg:flex lg:gap-x-12 justify-center">
          <p>Copyright &copy; Company</p>
        </div>
      </footer>
    )
}

export default Footer;