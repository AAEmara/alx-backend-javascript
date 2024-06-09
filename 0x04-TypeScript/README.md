# Typescript

To be able to run the compiler succesfully for this project,
we need to install the relative version of TypeScript compiler
to Node.js v12.11.1.

To install the relative version of TypeScript, run the following command:
  `npm install -g typescript@1.7.5`

To check that the right version have been installed, run the following command:
  `tsc -v`

The output should be as the following:
  `message TS6029: Version 1.7.5`

To run the TypeScript compiler on any \*.ts file,
we could run the following command:
  `tsc <filename>.ts`

The output of the compiled file should be `<filename>.js` in the same directory
of the typescript file.
