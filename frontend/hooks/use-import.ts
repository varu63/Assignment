'use client';

import { useState } from 'react';
import Papa from 'papaparse';
import {
  CSVPreviewData,
  ImportResponse,
  ImportWorkflowStep,
} from '@/types/import';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export function useImport() {
  const [currentStep, setCurrentStep] =
    useState<ImportWorkflowStep>('IDLE');
  const [preview, setPreview] = useState<CSVPreviewData | null>(null);
  const [result, setResult] = useState<ImportResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);

  // Step 1: Parse CSV and Preview
  const handleFileSelection = (file: File) => {
    setError(null);
    setFileToUpload(file);
    setIsLoading(true);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      preview: 10,
      complete: (results) => {
        setIsLoading(false);

        if (results.errors.length > 0 && results.data.length === 0) {
          setError('Failed to parse the CSV file.');
          return;
        }

        setPreview({
          headers: results.meta.fields || [],
          rows: results.data as Record<string, string>[],
        });

        setCurrentStep('PREVIEW');
      },
      error: (err) => {
        setIsLoading(false);
        setError(`Parsing failed: ${err.message}`);
      },
    });
  };

  // Step 2: Upload CSV to backend
  const confirmAndProcessImport = async () => {
    if (!fileToUpload) {
      setError('Please select a CSV file.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setCurrentStep('PROCESSING');

    try {
      const formData = new FormData();
      formData.append('file', fileToUpload);

      const response = await fetch(`${API_BASE_URL}/import`, {
        method: 'POST',
        body: formData,
      });

      const data: ImportResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Import failed.');
      }

      setResult(data);
      setCurrentStep('RESULT');
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
      setCurrentStep('PREVIEW');
    } finally {
      setIsLoading(false);
    }
  };

  const resetPipeline = () => {
    setCurrentStep('IDLE');
    setPreview(null);
    setResult(null);
    setError(null);
    setFileToUpload(null);
  };

  return {
    currentStep,
    preview,
    result,
    isLoading,
    error,
    handleFileSelection,
    confirmAndProcessImport,
    resetPipeline,
  };
}