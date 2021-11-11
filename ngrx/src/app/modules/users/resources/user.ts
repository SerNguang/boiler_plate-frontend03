export interface User {
  id: string;
  name: string;
  businessName: string;
  email: string;
  password: string;
  phoneNumber: string;
  ceaReg: string;
  agencyReg: string;
  designation: string;
  aboutMe: string;
  avatar: string;
  quantity: number;
}
export interface UserFilter {
  name: string;
}

export interface Pagination {
  first: string;
  next: string;
  last: string;
  prev: string;
}

export interface PaginatedResult<T> {
  result: T;
  pagination: Pagination;
}

export interface PaginationParams {
  page: string;
  limit: string;
  url: string;
}

export var paginationParamsModel: PaginationParams = {
  page: '1',
  limit: '9',
  url: null,
};
