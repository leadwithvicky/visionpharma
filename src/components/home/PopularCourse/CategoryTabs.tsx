'use client';

import { motion } from 'framer-motion';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CategoryTabsProps {
  categories: Array<{ category: string }>;
}

export const CategoryTabs = ({ categories }: CategoryTabsProps) => (
  <div className="relative">
    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 md:hidden" />
    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 md:hidden" />

    {/* Animated Tabs List */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <TabsList
        className="flex justify-start md:justify-center mb-8 
        overflow-x-auto scrollbar-hide max-w-3xl mx-auto py-6 sm:py-7 
        rounded-full shadow-xl no-scrollbar overflow-y-clip"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <TabsTrigger
              value={category.category}
              className="px-4 sm:px-6 lg:px-7 py-2 sm:py-3 rounded-full font-semibold tracking-tight 
                whitespace-nowrap text-sm flex-shrink-0
                transition-all duration-200 ease-in-out"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                {category.category}
              </motion.div>
            </TabsTrigger>
          </motion.div>
        ))}
      </TabsList>
    </motion.div>
  </div>
);
