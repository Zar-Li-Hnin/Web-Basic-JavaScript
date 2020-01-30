const functions = require('./function');

test('Adds 2+2 equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2+2 to NOT equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Brad Traversy Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

test('Should be under 1600' , () =>{
    const load1= 800;
    const load2= 800;
    expect(load1+load2).toBeLessThanOrEqual(1600);
});

test('There is no I in team' , ()=> {
    expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames' , () =>{
    usernames = ['john','karen','admin'];
    expect(usernames).toContain('admin');
});

/*
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
     return functions.fetchUser().then(data => {
          expect(data.name).toEqual('Leanne Graham');
      });
});*/

test('User fetched name should be Leanne Graham', async () =>{
    expect.assertions(1);
    const data= await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});