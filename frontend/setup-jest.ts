import 'jest-preset-angular';
import 'zone.js';
import 'zone.js/testing';
import 'zone.js/dist/long-stack-trace-zone.js';

import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
