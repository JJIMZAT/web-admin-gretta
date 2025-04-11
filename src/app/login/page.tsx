// app/login/page.tsx
import LoginForm from '@/components/login/LoginForm'

export default function LoginPage() {
  return (
    <div className="flex flex-1 bg-orange-gretta bg-[url('/images/fondo-ondas.png')] bg-no-repeat bg-cover">

      {/* Izquierda */}
      <div className="w-2/5 flex flex-col">
        <LoginForm />
      </div>

      {/* Derecha */}
      <div className="w-3/5 relative flex flex-wrap  text-white">
        <div className='w-full h-[87.5%]  px-4 flex items-center justify-start'>
          <h2 className='text-[#FFF] font-kanit text-[50px] font-[400] tracking-[-0.165px]'>Transforma la forma<br/> 
            de gestionar tus guías de<br/>
            remisión electrónica
          </h2>
        </div>
        <div className='w-full h-[12.5%] flex items-center justify-end pr-[72px]'>
            <div className='flex flex-col items-end'>
              <p className='text-[#FFF] font-kanit text-[16px] font-[300] leading-[21.386px] tracking-[0.134px]'>
                Un producto digital de :
              </p>
              <img src="images/lissa-isotipo.svg" alt="lissa isotipo" className='w-[79px] h-[24px] mt-[16px]' />
            </div>
        </div>
      </div>
    </div>
  )
}
