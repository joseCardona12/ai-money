"use client";
import TransactionsStatsCards from "./TransactionsStatsCards";
import TransactionsFilters from "./TransactionsFilters";
import TransactionsTable from "./TransactionsTable";
import TransactionModal from "./TransactionModal";
import TransactionDetailsModal from "./TransactionDetailsModal";
import Button from "@/ui/components/Button";
import { IconPlus, IconDownload } from "@tabler/icons-react";
import { IUseTransactions } from "../hooks/useTransactions";

interface ITransactionsContentProps {
  transactionsData: IUseTransactions;
}

export default function TransactionsContent({
  transactionsData,
}: ITransactionsContentProps): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      {/* Header with Title and Actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--color-text-black)]">
            Transactions
          </h1>
          <p className="text-sm text-[var(--color-text-gray)]">
            Manage and track all your financial transactions
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            onClick={() => transactionsData.handleActionClick(2)}
            className="flex items-center space-x-2"
          >
            <IconDownload size={16} />
            <span>Export</span>
          </Button>
          <Button
            variant="primary"
            onClick={transactionsData.openAddModal}
            className="flex items-center space-x-2"
          >
            <IconPlus size={16} />
            <span>Add Transaction</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <TransactionsStatsCards stats={transactionsData.stats} />

      {/* Filters */}
      <TransactionsFilters
        searchTerm={transactionsData.searchInputValue}
        categories={transactionsData.categories}
        types={transactionsData.types}
        timePeriods={transactionsData.timePeriods}
        selectedCategory={transactionsData.filters.selectedCategory}
        selectedType={transactionsData.filters.selectedType}
        selectedTimePeriod={transactionsData.filters.selectedTimePeriod}
        onSearch={transactionsData.handleSearch}
        onCategoryFilter={transactionsData.handleCategoryFilter}
        onTypeFilter={transactionsData.handleTypeFilter}
        onTimePeriodFilter={transactionsData.handleTimePeriodFilter}
        onClearFilters={transactionsData.clearFilters}
      />

      {/* Transactions Table */}
      <TransactionsTable
        transactions={transactionsData.transactions}
        onTransactionClick={transactionsData.handleTransactionClick}
        currentPage={transactionsData.pagination.currentPage}
        itemsPerPage={transactionsData.pagination.itemsPerPage}
        totalItems={transactionsData.pagination.totalItems}
        onPageChange={transactionsData.handlePageChange}
        onEditTransaction={transactionsData.handleEditTransaction}
        onDeleteTransaction={transactionsData.handleDeleteTransaction}
        onViewDetails={transactionsData.handleViewDetails}
        onDownloadReceipt={transactionsData.handleDownloadReceipt}
        isLoading={transactionsData.isLoading}
      />

      {/* Transaction Modal */}
      <TransactionModal
        isOpen={transactionsData.modal.isOpen}
        onClose={transactionsData.closeModal}
        mode={transactionsData.modal.mode}
        transaction={transactionsData.modal.selectedTransaction}
        onSubmit={transactionsData.handleModalSubmit}
        categories={transactionsData.categories}
        types={transactionsData.types}
        states={transactionsData.states}
        accounts={transactionsData.accounts}
      />

      {/* Transaction Details Modal */}
      <TransactionDetailsModal
        isOpen={transactionsData.detailsModal.isOpen}
        onClose={transactionsData.closeDetailsModal}
        transaction={transactionsData.detailsModal.selectedTransaction}
        onEdit={transactionsData.handleEditTransaction}
        onDelete={transactionsData.handleDeleteTransaction}
        onDownloadReceipt={transactionsData.handleDownloadReceipt}
      />
    </div>
  );
}
