import exp, {call, NAME} from './module.js'

export function some() {
  console.log('this is from <%= name %>\'s property some');
  console.log('this is a imported module\'s NAME:', NAME);
  call();
}
