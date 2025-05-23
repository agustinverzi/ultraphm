export type Patient = {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  insurance: string;
  attributedClinic: string;
  attributedPhysician: string;
  lastAWV: string; // ISO date string or formatted date
  ccmEleg: boolean;
  chronicConditions: string[];
  pmpmCost: number;
  rafYtd: number;
  rafVar: number;
  hccGaps: number;
  careGaps: number;
  flagReasons: { label: string; color: 'yellow' | 'blue' | 'red' | 'green'; }[];
}; 