"use client"
import { format } from 'date-fns'
import { useState, useEffect } from 'react'

export default function clock() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  return (
		<time
			dateTime={time.toDateString()}
			suppressHydrationWarning
			className="mt-4"
		>
			{format(time, "kk:mm:ss")}
		</time>
  );
}
