import { call } from 'redux-saga/effects';

import api from './api';

export default function*(request) {
  return yield call(api.put, {
    path: `user`,
    request,
  });
}
