import { get } from '@/services/api';
import { User } from '@/types/User';

type UserResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  website: string;
  phone: string;
};

const transformUserResponse = (user: UserResponse): User => {
  return {
    name: user.name,
    email: user.email,
    id: user.id,
    userName: user.username,
    address: {
      city: user.address.city,
      geo: {
        lat: user.address.geo.lat,
        lang: user.address.geo.lng
      },
      street: user.address.street,
      suite: user.address.suite,
      zipCode: user.address.zipcode
    },
    company: user.company,
    phone: user.phone,
    website: user.website
  };
};

const GET_ALL_USERS = '/users';

export const getAllUsers = () => {
  return get<UserResponse[]>(GET_ALL_USERS).then((users) => {
    return users.map(transformUserResponse);
  });
};
