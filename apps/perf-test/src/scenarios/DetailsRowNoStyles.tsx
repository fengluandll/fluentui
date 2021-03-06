import * as React from 'react';
import { createTheme, DetailsRowBase, IColumn, Selection, SelectionMode } from 'office-ui-fabric-react';

// tslint:disable-next-line:typedef
const Items = Array.from({ length: 10 }, (n, i) => ({
  key: `Item ${i}`,
  name: `Item ${i}`,
  modified: new Date().toString(),
  shared: 'Private',
  size: `${Math.round(Math.random() * 1000) / 10}KB`,
}));

const selection = new Selection();
selection.setItems(Items);

const Columns: IColumn[] = [
  { key: 'a', name: 'Name', fieldName: 'name', minWidth: 200, maxWidth: 400 },
  { key: 'b', name: 'Last modified', fieldName: 'modified', minWidth: 200, maxWidth: 400 },
  { key: 'c', name: 'Shared', fieldName: 'shared', minWidth: 300, maxWidth: 300 },
  { key: 'c', name: 'Size', fieldName: 'size', minWidth: 300, maxWidth: 300 },
];

const defaultTheme = createTheme({});

const Scenario = () => (
  <DetailsRowBase
    theme={defaultTheme}
    itemIndex={0}
    item={Items[0]}
    columns={Columns}
    selection={selection}
    selectionMode={SelectionMode.single}
  />
);

export default Scenario;
