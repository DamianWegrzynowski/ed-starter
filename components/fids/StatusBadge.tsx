import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { FlightStatus } from '@/types';

const statusBadgeVariants = cva(
  'inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold uppercase tracking-widest rounded-sm min-w-[90px]',
  {
    variants: {
      status: {
        'On Time': 'bg-emerald-100 text-emerald-800 border border-emerald-300',
        Boarding: 'bg-amber-100 text-amber-800 border border-amber-300 animate-pulse',
        Departed: 'bg-slate-100 text-slate-500 border border-slate-300',
        Delayed: 'bg-orange-100 text-orange-800 border border-orange-300',
        Cancelled: 'bg-red-100 text-red-700 border border-red-300',
      },
    },
    defaultVariants: {
      status: 'On Time',
    },
  }
);

interface StatusBadgeProps extends VariantProps<typeof statusBadgeVariants> {
  status: FlightStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return <span className={cn(statusBadgeVariants({ status }), className)}>{status}</span>;
}
