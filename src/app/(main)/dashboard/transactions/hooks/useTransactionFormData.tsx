"use client";
import { useState, useEffect } from "react";
import { categoryService, ICategory } from "@/services/category";
import {
  transactionTypeService,
  ITransactionType,
} from "@/services/transactionType";
import {
  transactionStateService,
  ITransactionState,
} from "@/services/transactionState";
import { accountService, IAccount } from "@/services/account";
import { DEFAULT_TRANSACTION_STATES } from "@/utils/constants/transactionConstants";
import useAuthListener from "../../hooks/useAuthListener";
import { convertStatesToSelectOptions } from "../utils/converStatesToSelect";

export default function useTransactionFormData() {
  const { user } = useAuthListener();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [types, setTypes] = useState<ITransactionType[]>([]);
  const [states, setStates] = useState<ITransactionState[]>([]);
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  return {
    categories: convertStatesToSelectOptions(categories),
    types: convertStatesToSelectOptions(types),
    states: convertStatesToSelectOptions(states),
    accounts: convertStatesToSelectOptions(accounts),
    isLoading,
  };
}
