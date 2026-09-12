import React from 'react'

const Skill = ({ name, level, icon }) => {
  return (
    <div 
      className="tooltip tooltip-bottom" 
      data-tip={level}
    >
      <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-5 w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          <img 
            src={icon} 
            alt={`${name} icon`} 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span className="text-xs md:text-sm font-semibold tracking-wide text-center group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {name}
        </span>
      </div>
    </div>
  )
}

export default Skill