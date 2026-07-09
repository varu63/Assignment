'use client';

import React from 'react';
import { CSVPreviewData } from '@/types/import';
import { FileText, Check } from 'lucide-react';

interface PreviewTableProps {
  data: CSVPreviewData;
  fileName: string;
  fileSize: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function PreviewTable({ data, fileName, fileSize, onConfirm, onCancel }: PreviewTableProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl border shadow-xl overflow-hidden animate-in fade-in-50 duration-200">
      {/* Header Panel */}
      <div className="px-6 py-4 border-b border-slate-100">
        <h3 className="text-base font-semibold text-slate-800">Import Leads via CSV</h3>
        <p className="text-xs text-slate-400">Upload a CSV file to bulk import leads into your system.</p>
      </div>

      <div className="p-6 space-y-4">
        {/* Dynamic File Chip Indicator */}
        <div className="flex items-center justify-between p-3 border rounded-xl bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-600">
              <FileText className="w-5 h-5 text-[#FF7A50]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-700 truncate max-w-[280px]">{fileName}</p>
              <p className="text-[10px] text-slate-400">{fileSize}</p>
            </div>
          </div>
        </div>

        {/* Core Tabular Viewport */}
        <div className="w-full rounded-xl border border-slate-100 bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto max-h-[260px] overflow-y-auto">
            <table className="w-full text-left border-collapse min-w-max">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  {data.headers.map((header, i) => (
                    <th
                      key={i}
                      className="sticky top-0 bg-slate-50 px-4 py-2.5 text-[10px] font-bold tracking-wider text-slate-500 uppercase shadow-[inset_0_-1px_0_rgba(0,0,0,0.05)]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.rows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/60 transition-colors">
                    {data.headers.map((header, cIdx) => (
                      <td key={cIdx} className="px-4 py-2 text-xs text-slate-600 whitespace-nowrap">
                        {row[header] || <span className="text-slate-300 italic">--</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Ingestion Trigger Controls */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
        <button 
          type="button" 
          onClick={onCancel}
          className="px-5 py-2 text-xs font-medium border rounded-lg text-slate-600 bg-white hover:bg-slate-50 transition"
        >
          Cancel
        </button>
        <button 
          type="button" 
          onClick={onConfirm}
          className="px-5 py-2 text-xs font-medium bg-[#FF7A50] hover:bg-[#e66940] text-white rounded-lg transition shadow-xs flex items-center gap-1.5"
        >
          <Check className="w-3.5 h-3.5" /> Upload File
        </button>
      </div>
    </div>
  );
}