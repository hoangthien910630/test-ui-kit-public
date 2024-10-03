// src/setupTests.js
import '@testing-library/jest-dom';

// Mock matchMedia for tests
// https://github.com/akiran/react-slick/blob/bae881766024deeccab7d67ddf5d1a323f9355c8/test-setup.js#L4-L13
window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
