#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {saveMockDataToFile} from '../lib/generateMockData.js';

yargs(hideBin(process.argv))
  .command(
    'generate',
    'Generate mock data',
    (yargs) => {
      yargs
        .option('rows', {
          alias: 'r',
          describe: 'Number of rows to generate',
          type: 'number',
          default: 10,
        })
        .option('schema', {
          alias: 's',
          describe: 'Schema in the format key:datatype,key:datatype',
          type: 'string',
          demandOption: true,
        })
        .option('file', {
          alias: 'f',
          describe: 'Output file path',
          type: 'string',
          default: './mockData.json',
        });
    },
    (argv) => {
      const schema = argv.schema.split(',').reduce((acc, pair) => {
        const [key, type] = pair.split(':');
        acc[key] = type;
        return acc;
      }, {});

      saveMockDataToFile(schema, argv.rows, argv.file);
    }
  )
  .help()
  .argv;
