import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DynamicTabs = ({
  tabs: tabs,
}: {
  tabs: { label: string; value: string; component: React.ReactNode }[];
}) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0]?.value);
  return (
    <Tabs defaultValue={tabs[0]?.value} className="w-full">
      <TabsList className="flex pb-4  my-7 max-w-screen-2xl  !py-7 !rounded-full shadow-[4px_8px_10px_rgba(0,0,0,0.10)] overflow-x-auto overflow-y-hidden justify-between border  border-border">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`px-4 py-4 rounded-full tracking-tight whitespace-nowrap w-full text-lg text-foreground  ${
              activeTab === tab.value
                ? 'font-bold '
                : 'text-foreground font-medium '
            }`}
            onClick={() => setActiveTab(tab.value)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className="mt-6"
        >
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DynamicTabs;