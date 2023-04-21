'use client';

import { TableRow, TableHead, TableData } from './components';
import { TableProps } from './Table.types';

export default function Table({ children, ...props }: TableProps) {
  return <table {...props}>{children}</table>;
}

Table.Head = TableHead;
Table.Row = TableRow;
Table.Data = TableData;
