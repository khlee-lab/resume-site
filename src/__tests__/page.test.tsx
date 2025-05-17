import { render, screen } from '@testing-library/react';
import ResumePage from '../app/page';

describe('ResumePage', () => {
  it('renders main heading', () => {
    render(<ResumePage />);
    const heading = screen.getByRole('heading', { level: 1, name: /履歴書 \/ Curriculum Vitae/i });
    expect(heading).toBeInTheDocument();
  });
});
