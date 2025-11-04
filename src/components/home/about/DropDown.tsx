// components/Dropdown.tsx
import { FC } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface DropdownProps {
  label: string; // The label of the dropdown
  value: string; // The current selected value
  onChange: (value: string) => void; // The function to handle value changes
  options: { value: string; label: string }[]; // The list of options for the dropdown
}

const Dropdown: FC<DropdownProps> = ({ label, value, onChange, options }) => {
  return (
    <div className="relative w-full">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full pl-12 pr-4 py-3 text-left rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-1 focus:ring-primary outline-none transition-all appearance-none bg-white">
          {/* Display the selected option or the placeholder */}
          {value
            ? options.find((option) => option.value === value)?.label
            : `Select ${label}`}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <DropdownMenuLabel>{label}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* Render the dropdown options */}
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onChange(option.value)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
