"use client";
import OverallProgressSection from "./OverallProgressSection";
import GoalsSection from "./GoalsSection";
import AddGoalModal from "./AddGoalModal";
import AddContributionModal from "./AddContributionModal";
import Button from "@/ui/components/Button";
import { IconPlus } from "@tabler/icons-react";
import { IUseGoals } from "../hooks/useGoals";

interface GoalsContentProps {
  goalsData: IUseGoals;
}

export default function GoalsContent({
  goalsData,
}: GoalsContentProps): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      {/* Header with title and Add Goal button */}
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--color-text-black)" }}
          >
            Financial Goals
          </h1>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--color-text-gray)" }}
          >
            Track and achieve your financial objectives
          </p>
        </div>
        <Button
          variant="primary"
          onClick={goalsData.handleAddGoal}
          className="flex items-center gap-2"
        >
          <IconPlus size={16} />
          Add Goal
        </Button>
      </div>

      <OverallProgressSection progress={goalsData.overallProgress} />

      <GoalsSection
        goals={goalsData.goals}
        onGoalClick={goalsData.handleGoalClick}
        onAddContribution={goalsData.handleAddContribution}
        getGoalOptions={goalsData.getGoalOptions}
      />

      <AddGoalModal
        isOpen={goalsData.modal.isOpen}
        onClose={goalsData.closeModal}
        mode={goalsData.modal.mode}
        goal={goalsData.modal.selectedGoal}
        onSubmit={goalsData.handleModalSubmit}
      />

      <AddContributionModal
        isOpen={goalsData.contributionModal.isOpen}
        onClose={goalsData.closeContributionModal}
        goal={goalsData.contributionModal.selectedGoal || null}
        onSubmit={goalsData.handleContributionSubmit}
      />
    </div>
  );
}
