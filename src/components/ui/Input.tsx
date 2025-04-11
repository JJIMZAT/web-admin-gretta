interface Props {
    label: string,
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    icon?: string
  }
  
  export default function Input({ value, label, onChange, type = 'text', icon }: Props) {
    return (
      <div className="relative w-full">
        <label className="absolute left-5 top-2 text-[12px] font-[500] font-kanit text-[#9B9BA1] pointer-events-none mb-[4px]">
          {label.toUpperCase()}
        </label>
          <input
            type={type}
            value={value}
            onChange={onChange}
            className="w-full h-[76px] bg-white text-[16px] font-kanit font-[400] leading-[20px] tracking-[0.045px] text-gray-800  py-[16px] px-[24px] rounded-[24px] focus:outline-none"
          />
          {icon && (
            <span className="absolute right-4 top-3/5 -translate-y-1/2 ">
               <img src={icon} alt="" />
            </span>
          )}
      </div>
    )
  }
  