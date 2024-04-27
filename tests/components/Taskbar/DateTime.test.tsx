import DateTime from '@components/Taskbar/DateTime'
import { render, screen } from '@testing-library/react'
import moment from 'moment'
import { describe, expect, it } from 'vitest'

describe(DateTime, () => {
  it('should render date and time properly on the taskbar', () => {
    render(<DateTime />)

    const currentTime = moment(new Date()).format('hh:mm A')
    const currentDate = moment(new Date()).format('M/D/YYYY')

    const renderedDate = screen.getByText(currentDate)
    const renderedTime = screen.getByText(currentTime)

    expect(renderedDate).toBeInTheDocument()
    expect(renderedTime).toBeInTheDocument()
  })
})
