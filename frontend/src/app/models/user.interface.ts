export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  image?: string;
  groups?: UserGroup[];
}

interface UserGroup {
  id: number;
  name: string;
  pivot: {
    isAdmin: boolean;
    isMember: boolean;
  };
}
