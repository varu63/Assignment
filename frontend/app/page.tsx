'use client';

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import UploadCard from "@/components/upload/UploadCard";
import PreviewTable from "@/components/preview/preview-table";
import ResultTable from "@/components/result/result-table";
import { useImport } from "@/hooks/use-import";
import { Loader2, RefreshCw } from "lucide-react";

export default function HomePage() {
  const {
    currentStep,
    preview,
    result,
    isLoading,
    error,
    handleFileSelection,
    confirmAndProcessImport,
    resetPipeline,
  } = useImport();

  // Keep track of primitive local visual metadata properties
  const [meta, setMeta] = useState({ name: '', size: '' });

  const onInterceptFile = (file: File) => {
    const sizeStr = file.size > 1024 * 1024 
      ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` 
      : `${(file.size / 1024).toFixed(1)} KB`;
    setMeta({ name: file.name, size: sizeStr });
    handleFileSelection(file);
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50/30">
      <Navbar />
      
      <section className="flex-1 flex items-center justify-center">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-12 w-full">
          
          {/* Default Title block shows only when upload hasn't executed */}
          {currentStep === 'IDLE' && (
            <div className="text-center space-y-4 mb-10">
              <span className="inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold bg-white text-slate-700 shadow-3xs">
                🚀 AI Powered CSV Importer
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Import Any CSV Into Your CRM Using AI
              </h1>
              <p className="max-w-xl mx-auto text-sm text-slate-500">
                Upload CSV files from Facebook Leads, Google Ads, or custom exports. 
                GrowEasy AI automatically extracts and maps fields seamlessly.
              </p>
            </div>
          )}

          {/* Workflow Orchestration Switcher Box */}
          <div className="w-full flex justify-center items-center">
            {currentStep === 'IDLE' && (
              <UploadCard onFileAccepted={onInterceptFile} error={error} />
            )}

            {currentStep === 'PROCESSING' || isLoading ? (
              <div className="w-full max-w-md bg-white rounded-2xl border p-12 text-center space-y-4 shadow-xl">
                <Loader2 className="w-9 h-9 text-[#FF7A50] animate-spin mx-auto" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-800">Processing CRM Ingestion Pipeline</h4>
                  <p className="text-xs text-slate-400 mt-1">Analyzing datasets and transforming attributes...</p>
                </div>
              </div>
            ) : null}

            {currentStep === 'PREVIEW' && preview && !isLoading && (
              <PreviewTable 
                data={preview} 
                fileName={meta.name}
                fileSize={meta.size}
                onConfirm={confirmAndProcessImport}
                onCancel={resetPipeline}
              />
            )}

            {currentStep === 'RESULT' && result && !isLoading && (
              <div className="w-full max-w-4xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Manage Ingested Leads</h2>
                    <p className="text-xs text-slate-400">Review AI-extracted mappings and clean attributes below.</p>
                  </div>
                  <button
                    onClick={resetPipeline}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border rounded-lg bg-white hover:bg-slate-50 transition shadow-2xs"
                  >
                    <RefreshCw className="w-3 h-3 text-slate-500" /> Upload Another File
                  </button>
                </div>
                <ResultTable result={result} />
              </div>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}