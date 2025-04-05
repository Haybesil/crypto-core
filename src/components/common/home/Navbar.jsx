import React from 'react'
import { ButtonSolid } from '../base/buttons/Button'

export default function Navbar() {
  return (
    <div>
      <header className='pt-3'>
        <div className="shadow shadow-[#262b38]">
          <div className="h-[50px] w-[100%] p-0 m-0">
            <iframe
              src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=no"
              width="100%"
              height="36px"
              scrolling="auto"
              marginwidth="0"
              marginheight="0"
              frameborder="0"
              border="0"
            ></iframe>
          </div>
        </div>
      </header>
    </div>
  )
}
