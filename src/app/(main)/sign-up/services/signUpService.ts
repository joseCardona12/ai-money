import { IResponseDto } from "@/interfaces/responseDto";
import { ISignUpRequest } from "@/interfaces/signUp";
import { IUser } from "@/interfaces/user";
import { HTTPClient } from "@/utils/httpClient";

export interface ISignUpService {
  signUp(request: ISignUpRequest): Promise<IResponseDto>;
}
class SignUpService implements ISignUpService {
  private httpClient: HTTPClient;
  constructor() {
    this.httpClient = new HTTPClient();
  }
  public async signUp(request: ISignUpRequest): Promise<IResponseDto> {
    const user: IUser = {
      ...request,
      fullName: request.fullName || "John Doe",
      phone_number: "+57 3006233512",
      address: "CR 77 TEST123",
      bio: "I am a test user",
      profile_picture: "https://avatar.iran.liara.run/public/8",
      join_date: new Date(),
      role_id: 1,
      provider_id: 1,
      plan_id: 1,
    };
    try {
      return await this.httpClient.post<IUser, IResponseDto>(
        "auth/register",
        user
      );
    } catch (error) {
      throw error;
    }
  }
}

export const signUpService = new SignUpService();
