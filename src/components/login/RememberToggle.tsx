interface Props {
    value: boolean
    onChange: (val: boolean) => void
  }
  
  export default function RememberToggle({ value, onChange }: Props) {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-[#333333] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#333333] dark:peer-focus:ring-[#333333] rounded-full peer dark:bg-[#333333] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#333333] peer-checked:bg-gray-500 dark:peer-checked:bg-gray-500">
        </div>
        <span className="ms-3 text-[18px] font-[400] leading-[20px] tracking-[0.045px] font-kanit text-[#FFF]">Recuerda mi cuenta</span>
      </label>

      
    )
  }
  