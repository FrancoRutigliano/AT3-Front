import './Header.css'

export const Header = () => {
  return (
    <header>
      <div className='w-1/2  flex items-center justify-center  h-screen'>

        <div className="pl-14 mb-20 ">
          <h1 className='bg-custom-gradient bg-clip-text text-transparent text-8xl'>Welcome to Atómico3</h1>
          <p className='my-5'>A crypto asset backed by lithium, promoting sustainability by reducing carbon emissions through tokenized incentives.</p>
          <div className='flex flex-col justify-between w-full pr-36 '>
            <button className='bg-custom-gradient py-2 rounded-md ' >Staking</button>
            <button className='relative   py-[1px] rounded-md my-2 px-[0.8px] bg-transparent'>
              <span className="absolute inset-0 p-px bg-gradient-to-r from-purple-600 to-cyan-400 rounded-md"></span>
              <span className="relative block bg-dark-blue text-white rounded-md px-6 py-2 text-black ">
                Download Wallpaper
              </span>
            </button>
            <button className='bg-custom-gradient py-2 rounded-md ' >Buy Token</button>
          </div>
        </div>

      </div>
      <div className='w-1/2 bg-lime-200  flex items-center justify-center'>

      </div>
    </header>
  )
}
