export interface IUser {
  id?: number;
  email: string;
  password: string;
  fullName: string;
  phone_number: string;
  address: string;
  bio: string;
  profile_picture: string;
  join_date: Date;
  role_id: number;
  provider_id: number;
  plan_id: number;
}
