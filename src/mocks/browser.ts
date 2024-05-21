import {setupWorker} from 'msw/browser';
import api from './api';

export const worker = setupWorker(...api);
