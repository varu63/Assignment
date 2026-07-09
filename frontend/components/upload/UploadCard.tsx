'use client';

import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Download, FileText, AlertCircle, X } from 'lucide-react';

interface UploadCardProps {
  onFileAccepted: (file: File) => void;
  error: string | null;
}

export default function UploadCard({ onFileAccepted, error }: UploadCardProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'text/csv': ['.csv'] },
    maxFiles: 1,
    maxSize: 5242880, // 5MB limit check
    onDropAccepted: (files) => onFileAccepted(files[0]),
  });

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl border shadow-xl overflow-hidden animate-in fade-in-50 duration-200">
      {/* Header Container */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-800">Import Leads via CSV</h3>
          <p className="text-xs text-slate-400">Upload a CSV file to bulk import leads into your system.</p>
        </div>
      </div>

      {/* Body Work area */}
      <div className="p-6 space-y-4">
        <div
          {...getRootProps()}
          className={`border border-dashed rounded-xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center ${
            isDragActive 
              ? 'border-[#FF7A50] bg-orange-50/20' 
              : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
          }`}
        >
          <input {...getInputProps()} />
          <div className="p-3 bg-white rounded-lg border shadow-sm text-emerald-600 mb-3">
            <Upload className="w-6 h-6 text-[#FF7A50]" />
          </div>
          <p className="text-sm font-semibold text-slate-700">Drop your CSV file here</p>
          <p className="text-xs text-slate-400 mt-0.5">or click to browse files</p>

          <div className="mt-4 px-3 py-1 bg-white rounded border inline-flex items-center gap-1.5 text-[11px] text-slate-500 shadow-2xs">
            <AlertCircle className="w-3 h-3 text-slate-400" /> Supported file: .csv (max 5MB)
          </div>

          <p className="mt-4 text-[10px] text-slate-400 max-w-xs leading-relaxed">
            Required mapping contexts: created_at, name, email, country_code, mobile_without_country_code...
          </p>
        </div>

        {/* Action Sample Template Button */}
        <button 
          type="button"
          onClick={(e) => { e.stopPropagation(); alert('Downloading template schema...'); }}
          className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-100 rounded-lg text-xs font-medium text-emerald-700 flex items-center justify-center gap-2 transition"
        >
          <Download className="w-3.5 h-3.5" /> Download Sample CSV Template
        </button>

        {error && (
          <div className="p-3 bg-red-50 border border-red-100 text-red-700 text-xs rounded-lg flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
        <button type="button" className="px-5 py-2 text-xs font-medium border rounded-lg text-slate-600 bg-white hover:bg-slate-50">
          Cancel
        </button>
        <button type="button" disabled className="px-5 py-2 text-xs font-medium bg-slate-200 text-slate-400 rounded-lg cursor-not-allowed">
          Upload File
        </button>
      </div>
    </div>
  );
}