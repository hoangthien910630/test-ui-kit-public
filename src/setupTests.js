// src/setupTests.js
import '@testing-library/jest-dom';

// Mock matchMedia for tests
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(), // New way to add listeners
  removeEventListener: jest.fn(), // New way to remove listeners
  dispatchEvent: jest.fn(),
}));
