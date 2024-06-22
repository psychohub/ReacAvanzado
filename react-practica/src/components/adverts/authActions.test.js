import { logout } from '../../redux/userSlice';

describe('Auth Actions', () => {
  it('Debería crear una acción para cerrar sesión', () => {
    const expectedAction = {
      type: 'auth/logout',
    };
    expect(logout()).toEqual(expectedAction);
  });
});