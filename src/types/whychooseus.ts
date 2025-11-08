// types.ts
export interface Stat {
  value: number;
  label: string;
  className?: string;
}

export interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
}
