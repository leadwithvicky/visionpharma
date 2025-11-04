// Stats Component
export const Stats: React.FC = () => (
  <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm w-fit">
    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
      <div className="w-6 h-6 text-blue-600">👤</div>
    </div>
    <div>
      <p className="font-bold text-lg">35.3K+</p>
      <p className="text-sm text-gray-600">Positive Reviews</p>
    </div>
  </div>
);
