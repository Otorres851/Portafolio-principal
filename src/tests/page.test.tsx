import HomePage from '@/app/page';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('HomePage', () => {
  it('renderiza el nombre principal', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', { name: /Oscar Torres/i }),
    ).toBeInTheDocument();
  });

  it('abre el modal al hacer click en la imagen del proceso', async () => {
    const user = userEvent.setup();

    render(<HomePage />);

    const processImage = screen.getByTestId('process-image');
    await user.click(processImage);

    expect(screen.getByTestId('modal-image')).toBeInTheDocument();
  });
});
