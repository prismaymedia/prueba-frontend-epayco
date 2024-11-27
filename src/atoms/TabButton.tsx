import { TabButtonProps, TabsProps } from "@/types/type";
import React from "react";
import { Button } from "./Button";

const TabButton: React.FC<TabButtonProps> = ({
  isActive,
  onClick,
  children,
}) => (
  <Button
    onClick={onClick}
    className={`px-4 py-2 font-medium rounded-t-lg transition-colors duration-200 
      ${
        isActive
          ? "bg-white text-blue-600 border-t border-x border-gray-200"
          : "bg-gray-50 text-gray-600 hover:bg-gray-100"
      }`}
  >
    {children}
  </Button>
);

export const Tabs: React.FC<TabsProps> = ({
  activeTab,
  onTabChange,
  latestItem,
  allItems,
  ItemCounter,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b border-gray-200">
        <div className="flex gap-2 px-6 pt-6">
          <TabButton
            isActive={activeTab === "latest"}
            onClick={() => onTabChange("latest")}
          >
            Latest Item
          </TabButton>
          <TabButton
            isActive={activeTab === "all"}
            onClick={() => onTabChange("all")}
          >
            All Items
          </TabButton>
          <div className="ml-auto self-center">
            <ItemCounter />
          </div>
        </div>
      </div>

      <div className="p-6">
        {activeTab === "latest" ? (
          latestItem ? (
            <div className="transition-all duration-300 hover:transform hover:translate-x-1">
              {latestItem}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 mb-2">No items added yet</p>
              <p className="text-sm text-gray-400">
                Create your first item using the form above
              </p>
            </div>
          )
        ) : (
          <div className="space-y-4">{allItems}</div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
