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
  instruments?: { id: number; name: string }[];
}

interface UserGroup {
  id: number;
  name: string;
  pivot: {
    isAdmin: boolean;
    isMember: boolean;
  };
}
