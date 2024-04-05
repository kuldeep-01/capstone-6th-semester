import logo from './flower.jpg'

function Footer() {
    return (
        
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