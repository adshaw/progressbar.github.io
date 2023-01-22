import React from 'react'


import Component from '.'
import {RenderResult, render} from '@testing-library/react'

describe('ProgressBar', () => {


  it('should show progress bar and default color for progress bar values less than 100 ', () => {

   const component = renderComponent(25)

    const progressBar = component.queryByTestId('progress-bar');
    const progressBarFil = component.queryByTestId('progress-bar-fill');

    expect(progressBar).toBeTruthy();
    expect(progressBar?.innerHTML).toBe('25%');
    expect(progressBarFil?.style.backgroundColor).toBe('rgb(171, 212, 230)');
  })

  it('should show progress bar and overlimit color for progress bar values greater than or equal to 100 ', () => {

    const component = renderComponent(100)

    const progressBar = component.queryByTestId('progress-bar');
    const progressBarFil = component.queryByTestId('progress-bar-fill');

    expect(progressBar).toBeTruthy();
    expect(progressBar?.innerHTML).toBe('100%');
    expect(progressBarFil?.style.backgroundColor).toBe('rgb(255, 0, 0)');
  })

  it('should show progress bar as 0 even if less than 0 is entered', () => {

    const component = renderComponent(-25)

    const progressBar = component.queryByTestId('progress-bar');

    expect(progressBar).toBeTruthy();
    expect(progressBar?.innerHTML).toBe('0%');
  })
})

function renderComponent(completed: number): RenderResult {
  return render(
    <Component completed={completed} />
  )
}
