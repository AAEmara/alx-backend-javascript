// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
  firstName: 'Guillame',
  lastName: 'Salva',
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
