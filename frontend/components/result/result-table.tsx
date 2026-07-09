'use client';

import React, { useState } from 'react';
import { ImportResponse } from '@/types/import';
import {
  CheckCircle2,
  AlertTriangle,
  Layers,
  BarChart3,
} from 'lucide-react';

interface ResultTableProps {
  result: ImportResponse;
}

export default function ResultTable({ result }: ResultTableProps) {
  const [activeTab, setActiveTab] = useState<'success' | 'skipped'>('success');

  const importedRecords = result.importedRecords ?? [];
  const skippedRecords = result.skippedRecords ?? [];

  const totalImported = result.totalImported ?? importedRecords.length;
  const totalSkipped = result.totalSkipped ?? skippedRecords.length;
  const totalRecords = totalImported + totalSkipped;

  const getStatusBadgeClass = (status?: string) => {
    switch (status) {
      case 'GOOD_LEAD_FOLLOW_UP':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'SALE_DONE':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'DID_NOT_CONNECT':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'BAD_LEAD':
        return 'bg-rose-50 text-rose-700 border-rose-100';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-300">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-white border rounded-xl shadow-sm flex items-center gap-3">
          <div className="p-2 bg-slate-50 rounded-lg">
            <Layers className="w-4 h-4 text-slate-600" />
          </div>
          <div>
            <p className="text-[10px] uppercase text-slate-400">
              Total Parsed
            </p>
            <p className="text-xl font-bold">{totalRecords}</p>
          </div>
        </div>

        <div className="p-4 bg-white border rounded-xl shadow-sm flex items-center gap-3">
          <div className="p-2 bg-emerald-50 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <p className="text-[10px] uppercase text-emerald-500">
              Imported
            </p>
            <p className="text-xl font-bold text-emerald-600">
              {totalImported}
            </p>
          </div>
        </div>

        <div className="p-4 bg-white border rounded-xl shadow-sm flex items-center gap-3">
          <div className="p-2 bg-amber-50 rounded-lg">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <p className="text-[10px] uppercase text-amber-500">
              Skipped
            </p>
            <p className="text-xl font-bold text-amber-600">
              {totalSkipped}
            </p>
          </div>
        </div>

        <div className="p-4 bg-white border rounded-xl shadow-sm flex items-center gap-3">
          <div className="p-2 bg-orange-50 rounded-lg">
            <BarChart3 className="w-4 h-4 text-orange-500" />
          </div>
          <div>
            <p className="text-[10px] uppercase text-orange-500">
              Success Rate
            </p>
            <p className="text-xl font-bold">
              {totalRecords === 0
                ? 0
                : Math.round((totalImported / totalRecords) * 100)}
              %
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b">
        <button
          onClick={() => setActiveTab('success')}
          className={`pb-2 text-sm font-semibold border-b-2 ${
            activeTab === 'success'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-slate-500'
          }`}
        >
          Imported ({importedRecords.length})
        </button>

        <button
          onClick={() => setActiveTab('skipped')}
          className={`pb-2 text-sm font-semibold border-b-2 ${
            activeTab === 'skipped'
              ? 'border-orange-500 text-orange-500'
              : 'border-transparent text-slate-500'
          }`}
        >
          Skipped ({skippedRecords.length})
        </button>
      </div>

      {/* Tables */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">

          {activeTab === 'success' ? (
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Company</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {importedRecords.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-slate-500">
                      No imported records found.
                    </td>
                  </tr>
                ) : (
                  importedRecords.map((rec: any, index: number) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{rec.name || '-'}</td>
                      <td className="p-3">{rec.email || '-'}</td>
                      <td className="p-3">
                        {rec.country_code ?? ''} {rec.mobile_without_country_code ?? '-'}
                      </td>
                      <td className="p-3">{rec.company || '-'}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs border ${getStatusBadgeClass(
                            rec.crm_status
                          )}`}
                        >
                          {rec.crm_status || 'Unknown'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-3 text-left">Row</th>
                  <th className="p-3 text-left">Reason</th>
                  <th className="p-3 text-left">Raw Data</th>
                </tr>
              </thead>

              <tbody>
                {skippedRecords.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-8 text-slate-500">
                      No skipped records.
                    </td>
                  </tr>
                ) : (
                  skippedRecords.map((row: any, index: number) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{row.rowNumber ?? '-'}</td>
                      <td className="p-3">{row.reason ?? '-'}</td>
                      <td className="p-3 font-mono text-xs break-all">
                        {JSON.stringify(row.rawData)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}