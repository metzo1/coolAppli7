import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '2eec54c9-0000-4bd5-93af-a39806512a99',
};

export const sampleWithPartialData: IAuthority = {
  name: '82ad8ec0-7709-41df-97d0-3c19008ad1e1',
};

export const sampleWithFullData: IAuthority = {
  name: '91129765-986e-41b3-af0a-974efe87abdc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
