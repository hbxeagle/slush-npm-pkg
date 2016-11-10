import program from 'commander'
import pkg from '../package.json';

function run(options){
  console.log('you options:');
  console.log('-v, --value: ',options.value);
  console.log('-b, --boolean: ', options.boolean);

  console.log('commander <%= command %> is running!');
}

program
  .version(pkg.version)
  .option('-v, --value [value]','the need set value option')
  .option('-b, --boolean','the boolean option')
  .description('<%= description %>')
  .parse(process.argv);

run(program);