import {render} from '@testing-library/react'
import MuiProviders from './components/MuiProvider/MuiProviders'


const customRender = (ui, options) =>
  render(ui, {wrapper: MuiProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}