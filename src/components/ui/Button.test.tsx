import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('[components/ui/Button.tsx]', () => {
  it("should display a button with 'Click me' as text", () => {
    render(<Button text="Click me" />)

    const element = screen.getByText(/Click me/)

    expect(element).toBeInTheDocument()
  })
})
