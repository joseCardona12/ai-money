import { ILoginRequestDto, ILoginResponseDto } from "@/interfaces/dto/auth";
import { HTTPClient } from "@/utils/httpClient";

class OAuthService {
  private httpClient: HTTPClient;
  constructor() {
    this.httpClient = new HTTPClient();
  }
  public login = async (request: ILoginRequestDto) => {
    return await this.httpClient.post<ILoginRequestDto, ILoginResponseDto>(
      "auth",
      request
    );
  };
}

export const oauthService = new OAuthService();
