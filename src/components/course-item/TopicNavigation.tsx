interface TopicNavigationProps {
  branch: string[];
  selectedBranch: string | null;
  onTopicChange: (topic: string) => void;
}

export default function TopicNavigation({
  branch,
  selectedBranch,
  onTopicChange,
}: TopicNavigationProps) {
  return (
    <nav className="w-full mb-8">
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex items-center gap-1 py-2 min-w-max border-b border-gray-200">
          {branch.map((topic) => (
            <button
              key={topic}
              onClick={() => onTopicChange(topic)}
              className={`
                  px-4 py-2
                  text-sm font-medium
                  transition-all duration-200
                  border-b-2 -mb-[1px]
                  hover:text-purple-600
                  ${
                    selectedBranch === topic
                      ? 'text-purple-600 border-purple-600'
                      : 'text-gray-600 border-transparent hover:border-gray-300'
                  }
                `}
            >
              {topic.replaceAll('-', ' ')}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
