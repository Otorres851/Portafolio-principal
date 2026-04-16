import '@testing-library/jest-dom';
import type { PropsWithChildren } from 'react';

const Mock = ({ children }: PropsWithChildren) => <div>{children}</div>;

jest.mock('framer-motion', () => ({
  motion: new Proxy({}, { get: () => Mock }),
  AnimatePresence: Mock,
}));
