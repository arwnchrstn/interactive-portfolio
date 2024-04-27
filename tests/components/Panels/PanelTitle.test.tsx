import terminalImage from '@assets/terminal.png'
import PanelTitle from '@components/Panels/PanelTitle'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe(PanelTitle, () => {
  it('should render panel title properly', () => {
    const title = 'Command Prompt'
    const image = terminalImage

    render(<PanelTitle title={title} image={image} />)

    const renderedTitle = screen.getByText(title)
    const renderedImage = screen.getByRole('img')

    expect(renderedTitle).toBeInTheDocument()
    expect(renderedTitle).toHaveTextContent(title)

    expect(renderedImage).toBeInTheDocument()
    expect(renderedImage).toHaveAttribute('src', image)
    expect(renderedImage).toHaveAttribute('alt', title)
    expect(renderedImage).toHaveAttribute('width', '20px')
  })
})
