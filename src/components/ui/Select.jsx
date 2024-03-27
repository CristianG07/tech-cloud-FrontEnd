import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import OutsideClickHandler from 'react-outside-click-handler'

export const Select = ({ selectedOption, onSelectChange }) => {
  const options = ['Alphabetically', 'Price']
  const [isOpen, setIsOpen] = useState(false)

  const toggleOptions = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionSelect = (option) => {
    onSelectChange(option);
    setIsOpen(false);
  };

  return (
    <div className='relative font-light text-text_secondary'>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <div
          className={`border rounded-xl flex items-center w-full py-2.5 cursor-pointer select-none pl-3 pr-20 mb-0.5 min-w-36`}
          onClick={toggleOptions}
        >
          <p>{selectedOption}</p>
          <div className='absolute right-2'>
            <MdKeyboardArrowDown size={22} />
          </div>
        </div>
        {isOpen && (
          <div className='absolute overflow-hidden z-10 w-full bg-ligth_gray rounded-xl border bg-card_gray shadow-md min-w-36'>
            {options.map((option, index) => (
              <div
                key={index}
                className='px-5 py-2 cursor-pointer hover:bg-light_primary select-none'
                onClick={() => handleOptionSelect(option)}
              >
                <p>{option}</p>
              </div>
            ))}
          </div>
        )}
      </OutsideClickHandler>
    </div>
  )
}
