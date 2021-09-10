import * as fromUser from './user.actions';

describe('loadCustomers', () => {
  it('should return an action', () => {
    expect(fromUser.addUser.type).toBe('[Customer] Load Users');
  });
});
