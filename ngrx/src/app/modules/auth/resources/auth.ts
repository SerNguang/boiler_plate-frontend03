export interface User {
  id: string;
  email: string;
  fullName: string;
  password: string;
  isAdmin: boolean;
}

export var UserModel: User = {
  id: null,
  email: null,
  fullName: null,
  password: null,
  isAdmin: false,
};
