// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

if (global.IntersectionObserver === undefined) {
    global.IntersectionObserver = class IntersectionObserver {
        constructor() {}

        disconnect() {
            return null;
        }

        observe() {
            return null;
        }

        unobserve() {
            return null;
        }
    };
}