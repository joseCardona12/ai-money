import { IPersonalInformation } from "@/app/(main)/dashboard/myaccount/types/myaccount";
import { IResponseDto } from "@/interfaces/responseDto";
import { IUser } from "@/interfaces/user";
import { HTTPClient } from "@/utils/httpClient";

export interface IUserService {
  updateUser(userId: number, user: IPersonalInformation): Promise<IResponseDto>;
}
class UserService implements IUserService {
  private httpClient: HTTPClient;
  constructor() {
    this.httpClient = new HTTPClient();
  }

  public async updateUser(
    userId: number,
    user: IPersonalInformation
  ): Promise<IResponseDto> {
    const newUser: IUser = {
      fullName: user.fullName,
      email: user.email,
      phone_number: user.phoneNumber,
      address: user.location,
      bio: user.bio,
      join_date: new Date(),
      role_id: 1,
      provider_id: 1,
      plan_id: 1,
      profile_picture:
        user.profile_picture || "https://avatar.iran.liara.run/public/8",
      password: "123456",
      id: userId,
    };
    try {
      return await this.httpClient.put<IUser, IResponseDto>(
        `users/${userId}`,
        newUser
      );
    } catch (error) {
      throw error;
    }
  }
}

export const userService = new UserService();
