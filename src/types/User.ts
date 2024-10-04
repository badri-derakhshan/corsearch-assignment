type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Geo = {
  lat: number;
  lang: number;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: Geo;
};

export type User = {
  id: number;
  name: string;
  userName: string;
  email: string;
  address: Address;
  company: Company;
  website: string;
  phone: string;
};
