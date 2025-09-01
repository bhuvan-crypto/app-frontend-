
import { useState, useEffect } from 'react';
import { pythonBackendUrl } from '../enviroment';

const PdfQA: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfExists, setPdfExists] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pdfName, setPdfName] = useState('');
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    // API 1: Check if PDF exists
    const checkPdf = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${pythonBackendUrl}/check-vectorstore/`);
        if (!res.ok) throw new Error('Failed to check PDF');
        const data = await res.json();
        setPdfExists(data.exists);
        setPdfName(data.name || '');
        setShowUpload(!data.exists);
      } catch (err: any) {
        setError(err.message || 'Error occurred');
      } finally {
        setLoading(false);
      }
    };
    checkPdf();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  // API 2: Upload PDF
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile) {
      setError('Please select a PDF to upload.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', pdfFile);
      const response = await fetch(`${pythonBackendUrl}/upload-pdf/`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API error: ${response.status} - ${errText}`);
      }
      const data = await response.json();
      setPdfExists(true);
      setPdfName(data.name || pdfFile.name);
      setShowUpload(false);
      setPdfFile(null);
    } catch (err: any) {
      setError(err.message || 'Error occurred');
    } finally {
      setLoading(false);
    }
  };

  // API 3: Ask question
  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question) {
      setError('Please enter a question.');
      return;
    }
    setLoading(true);
    setError('');
    setAnswer('');
    try {
      const response = await fetch(`${pythonBackendUrl}/ask-basic/?question=${JSON.stringify(question)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API error: ${response.status} - ${errText}`);
      }
      const data = await response.json();
      setAnswer(data.result || 'No answer found.');
    } catch (err: any) {
      setError(err.message || 'Error occurred');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">PDF Q&A</h2>
      {/* PDF Exists Section */}
      {loading && <div className="text-center text-blue-500">Loading...</div>}
      {!loading && pdfExists && !showUpload && (
        <div className="flex flex-col gap-4 mb-6">
          <span className="text-green-600 dark:text-green-400">PDF present: {pdfName}</span>
          <button
            className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={() => setShowUpload(true)}
          >
            Re-upload PDF
          </button>
        </div>
      )}
      {/* PDF Upload Section */}
      {showUpload && (
        <form onSubmit={handleUpload} className="flex flex-col gap-4 mb-6">
          <label className="font-semibold text-gray-700 dark:text-gray-200">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          {pdfFile && (
            <span className="text-green-600 dark:text-green-400">PDF selected: {pdfFile.name}</span>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      )}
      {/* Question Section - only show if PDF exists and not uploading */}
      {pdfExists && !showUpload && (
        <form onSubmit={handleAsk} className="flex flex-col gap-4">
          <label className="font-semibold text-gray-700 dark:text-gray-200">Ask a question</label>
          <input
            type="text"
            placeholder="Ask a question about the PDF..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Ask'}
          </button>
        </form>
      )}
      {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      {answer && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-gray-900 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700">
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  );
};

export default PdfQA;
