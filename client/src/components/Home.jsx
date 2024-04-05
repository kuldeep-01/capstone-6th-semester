function Home() {
  return (
    <>
      <div class="container mx-auto flex items-center h-screen">

        <div class="w-1/2">

          <h1 class="text-4xl font-bold text-black mb-4">Welcome to Our Website</h1>
          <p class="text-black mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
            <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</a>
            <a href="/signup" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign Up</a>
          </div>
        </div>
        <div class="w-1/2">
          <img src="https://wallpapers.com/images/hd/dark-man-standing-idawk015ad468bbi.webp" alt="flower.jpg" class="mx-auto round rounded-md" />
        </div>
      </div>

      <div class="bg-white bg-fixed" style={{ "background-image": "url('https://wallpapers.com/images/hd/dark-man-standing-idawk015ad468bbi.webp')" }}>

        <div class="relative isolate px-6 pt-14 lg:px-8">
          <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Unlock the power of interaction, where every message becomes a spark in the conversation.. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span></a>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 text-white sm:text-6xl">Connecting world</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600 text-white">
                "Welcome to our live interactive chat! We're thrilled to have you join us. Feel free to ask questions, share thoughts, or engage with fellow participants. Let's make this chat experience memorable and enriching for everyone involved. Happy chatting!"
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Join Session</a>
                <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Create Session <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
