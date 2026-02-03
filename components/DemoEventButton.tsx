'use client'
 
import { sendGTMEvent } from '@next/third-parties/google'
 
export const EventButton =()=> {
  return (
    <div>
      <button
        onClick={() => sendGTMEvent({ event: 'button_click', value: 'xyz' })}
        className='p-4 border-2 border-white'
      >
        Send Event
      </button>
    </div>
  )
}