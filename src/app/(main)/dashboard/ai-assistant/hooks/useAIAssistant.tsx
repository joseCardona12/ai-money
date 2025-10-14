"use client";
import { useState, useCallback } from "react";
import {
  IUseAIAssistant,
  IChatMessage,
} from "../types/aiAssistant";
import {
  SAMPLE_MESSAGES,
  QUICK_PROMPTS,
  AI_INSIGHTS,
  AI_CAPABILITIES,
} from "../utils/constants/aiAssistantData";

export default function useAIAssistant(): IUseAIAssistant {
  const [messages, setMessages] = useState<IChatMessage[]>(SAMPLE_MESSAGES);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isActive] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

  const sendMessage = useCallback((message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: IChatMessage = {
      id: `user-${Date.now()}`,
      type: "user",
      content: message.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: IChatMessage = {
        id: `assistant-${Date.now()}`,
        type: "assistant",
        content: generateAIResponse(message),
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  }, []);

  const handleQuickPrompt = useCallback((prompt: string) => {
    sendMessage(prompt);
  }, [sendMessage]);

  const clearChat = useCallback(() => {
    setMessages(SAMPLE_MESSAGES);
    setIsTyping(false);
  }, []);

  return {
    // State
    messages,
    isTyping,
    isActive,
    quickPrompts: QUICK_PROMPTS,
    insights: AI_INSIGHTS,
    capabilities: AI_CAPABILITIES,
    inputValue,

    // Actions
    sendMessage,
    handleQuickPrompt,
    setInputValue,
    clearChat,
  };
}

// Helper function to generate AI responses
function generateAIResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();

  if (message.includes("spending") || message.includes("analyze")) {
    return "I've analyzed your spending patterns for the last 3 months. I notice you've increased dining out expenses by 25% compared to your average. Your largest expense categories are: Housing (45%), Food (20%), and Transportation (15%). Would you like me to suggest ways to optimize these categories?";
  }

  if (message.includes("budget") || message.includes("optimize")) {
    return "Based on your current spending patterns, I recommend adjusting your budget allocation. You could reduce dining out by $200/month and increase your savings rate to 20%. I can help you set up automatic transfers and spending alerts. Would you like me to create a new budget plan?";
  }

  if (message.includes("savings") || message.includes("goal")) {
    return "Great question about savings! I see you're currently saving $500/month toward your vacation fund. At this rate, you'll reach your $6,000 goal 2 months ahead of schedule. I can help you optimize this further by identifying additional savings opportunities. Would you like me to analyze your subscriptions and recurring expenses?";
  }

  if (message.includes("transaction") || message.includes("unusual")) {
    return "I've reviewed your recent transactions and found 3 unusual patterns: 1) A $150 charge from an unknown merchant last week, 2) Duplicate subscription charges from Netflix, 3) Higher than usual gas expenses. Would you like me to help you investigate these transactions or set up alerts for similar patterns?";
  }

  return "I understand you're asking about your finances. I can help you with budgeting, expense tracking, goal setting, and financial analysis. Could you be more specific about what you'd like assistance with? You can also use the quick prompts below for common requests.";
}
