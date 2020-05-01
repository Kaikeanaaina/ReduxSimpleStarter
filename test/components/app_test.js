import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests
describe('App' , () => {
  let component;

  beforeEach(() => {
    // create an instance of App
    component = renderComponent(App);
  });
  
  // use 'it' to test a single attribute of a target
  it('renders something', () => {
    //use 'expect' to make an 'assertion' about a target
    expect(component).to.exist;
    expect(component).to.contain('React simple starter')
  });
});
