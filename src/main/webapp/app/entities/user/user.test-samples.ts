import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 23242,
  login: 'U*KNc*@qtay\\!Qk-\\fLj\\2TIW',
};

export const sampleWithPartialData: IUser = {
  id: 27657,
  login: 'n^Au@-g\\RYYzzYf\\14',
};

export const sampleWithFullData: IUser = {
  id: 32665,
  login: 'YcLmw',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
