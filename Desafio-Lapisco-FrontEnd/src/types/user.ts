export interface User {
  name: { first: string; last: string };
  gender: string;
  dob: { age: number };
  email: string;
  phone: string;
  picture: { large: string };
}
export interface UserCardProps {
  user: User;
}
