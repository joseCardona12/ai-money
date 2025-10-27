import { ILoginRequestDto, ILoginResponseDto } from "@/interfaces/dto/auth";
import { HTTPClient } from "@/utils/httpClient";

export class LoginAuthService {
  private httpClient: HTTPClient;

  constructor() {
    this.httpClient = new HTTPClient();
  }

  public async login(request: ILoginRequestDto): Promise<ILoginResponseDto> {
    console.log("Login request:", request);

    return await this.httpClient.post<ILoginResponseDto, ILoginRequestDto>(
      "auth/login",
      request
    );
  }
}

export const loginAuthService = new LoginAuthService();
