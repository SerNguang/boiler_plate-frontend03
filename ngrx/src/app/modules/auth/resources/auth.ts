export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  isAdmin: boolean;
}

export var UserModel: User = {
  id: null,
  email: null,
  name: null,
  password: null,
  isAdmin: false,
};
