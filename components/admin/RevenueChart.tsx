"use client";

import { ChevronDown } from "lucide-react";

export function RevenueChart() {
    return (
        <div className="bg-white rounded-2xl flex-1 min-w-0 h-63.25 py-2.5 px-5 border border-gray-200 flex flex-col gap-2">
            {/* Header */}
            <div className="flex items-center justify-between shrink-0">
                <h3 className="text-base font-semibold text-gray-900">Revenue</h3>
                <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                    This month
                    <ChevronDown size={14} />
                </button>
            </div>

            <div className="flex-1 relative min-h-[180px] flex items-center justify-center">
                <div className="text-center text-sm text-gray-400 font-medium">
                    No historical data available
                </div>
            </div>
        </div>
    );
}
