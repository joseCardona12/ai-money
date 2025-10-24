import { IResponseDto } from "@/interfaces/responseDto";
import {
  ITransaction,
  ICreateTransactionRequest,
  IUpdateTransactionRequest,
} from "@/interfaces/transaction";
import { HTTPClient } from "@/utils/httpClient";

export interface IMonthlyStatsComparison {
  currentMonth: {
    totalAmount: number;
    totalIncome: number;
    totalExpenses: number;
    balance: number;
  };
  lastMonth: {
    totalAmount: number;
    totalIncome: number;
    totalExpenses: number;
    balance: number;
  } | null;
  changes: {
    totalAmountChange: string | null;
    totalIncomeChange: string | null;
    totalExpensesChange: string | null;
    totalAmountChangePositive: boolean;
    totalIncomeChangePositive: boolean;
    totalExpensesChangePositive: boolean;
  };
}

export interface ITransactionService {
  getTransactionsByUserId(userId: number): Promise<IResponseDto>;
  getTransactionById(transactionId: number): Promise<IResponseDto>;
  createTransaction(
    transaction: ICreateTransactionRequest
  ): Promise<IResponseDto>;
  updateTransaction(
    transactionId: number,
    transaction: IUpdateTransactionRequest
  ): Promise<IResponseDto>;
  deleteTransaction(transactionId: number): Promise<IResponseDto>;
  getMonthlyStatsComparison(userId: number): Promise<IResponseDto>;
}

class TransactionService implements ITransactionService {
  private httpClient: HTTPClient;

  constructor() {
    this.httpClient = new HTTPClient();
  }

  public async getTransactionsByUserId(
    userId: number,
    page: number = 1,
    limit: number = 20,
    filters?: {
      search?: string;
      category?: string;
      type?: string;
      startDate?: string;
      endDate?: string;
    }
  ): Promise<IResponseDto> {
    try {
      let url = `transactions/user/${userId}?page=${page}&limit=${limit}`;

      if (filters?.search) {
        url += `&search=${encodeURIComponent(filters.search)}`;
      }
      if (filters?.category && filters.category !== "all") {
        url += `&category=${encodeURIComponent(filters.category)}`;
      }
      if (filters?.type && filters.type !== "all") {
        url += `&type=${encodeURIComponent(filters.type)}`;
      }
      if (filters?.startDate) {
        url += `&startDate=${filters.startDate}`;
      }
      if (filters?.endDate) {
        url += `&endDate=${filters.endDate}`;
      }

      return await this.httpClient.get<IResponseDto>(url);
    } catch (error) {
      throw error;
    }
  }

  public async getTransactionById(
    transactionId: number
  ): Promise<IResponseDto> {
    try {
      return await this.httpClient.get<IResponseDto>(
        `transactions/${transactionId}`
      );
    } catch (error) {
      throw error;
    }
  }

  public async createTransaction(
    transaction: ICreateTransactionRequest
  ): Promise<IResponseDto> {
    try {
      return await this.httpClient.post<
        ICreateTransactionRequest,
        IResponseDto
      >("transactions", transaction);
    } catch (error) {
      throw error;
    }
  }

  public async updateTransaction(
    transactionId: number,
    transaction: IUpdateTransactionRequest
  ): Promise<IResponseDto> {
    try {
      return await this.httpClient.put<IUpdateTransactionRequest, IResponseDto>(
        `transactions/${transactionId}`,
        transaction
      );
    } catch (error) {
      throw error;
    }
  }

  public async deleteTransaction(transactionId: number): Promise<IResponseDto> {
    try {
      // Note: DELETE method not available in HTTPClient yet
      // This is a placeholder for future implementation
      throw new Error("DELETE method not implemented in HTTPClient");
    } catch (error) {
      throw error;
    }
  }

  public async getMonthlyStatsComparison(
    userId: number
  ): Promise<IResponseDto> {
    try {
      return await this.httpClient.get<IResponseDto>(
        `transactions/user/${userId}/monthly-stats`
      );
    } catch (error) {
      throw error;
    }
  }
}

export const transactionService = new TransactionService();
