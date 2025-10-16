import {
  ISignUpRequestCompleteDto,
  ISignUpRequestDto,
  ISignUpResponseDto,
} from "@/interfaces/dto/auth";
import { IUser } from "@/interfaces/user";
import { HTTPClient } from "@/utils/httpClient";

export class SignUpAuthService {
  private httpClient: HTTPClient;

  constructor() {
    this.httpClient = new HTTPClient();
  }

  public async signUp(request: ISignUpRequestDto): Promise<ISignUpResponseDto> {
    const user: ISignUpRequestCompleteDto = {
      ...request,
      phone_number: "+570000000000",
      address: "CR address 123",
      bio: `${request.fullName} is using ai money to manage their finances.`,
      profile_picture: `https://api.dicebear.com/6.x/initials/svg?seed=${request.fullName}`,
      join_date: new Date().toISOString(),
      role_id: 1,
      provider_id: 3,
    };

    return await this.httpClient.post<
      ISignUpResponseDto,
      ISignUpRequestCompleteDto
    >("auth/register", user);
  }
}

export const signUpAuthService = new SignUpAuthService();
