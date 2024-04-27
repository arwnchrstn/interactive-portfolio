import '@styles/taskbar.css'

import moment from 'moment'
import { useEffect, useState } from 'react'

function DateTime() {
  const [time, setTime] = useState<number>(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col text-end text-slate-300 text-xs cursor-default hover:bg-gray-600 p-2 rounded date-time cursor-pointer">
      <p>{moment(time).format('hh:mm A')}</p>
      <p>{moment(Date.now()).format('M/D/YYYY')}</p>
    </div>
  )
}

export default DateTime
