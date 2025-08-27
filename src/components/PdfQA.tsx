
import { useState } from 'react';
import './PdfQA.css';

const PdfQA: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pdfFile || !question) {
      setError('Please upload a PDF and enter a question.');
      return;
    }
    setLoading(true);
    setError('');
    setAnswer('');
    try {
      const formData = new FormData();
      formData.append('pdf', pdfFile);
      formData.append('question', question);
      // Replace with your API endpoint
      const response = await fetch('/api/pdf-qa', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      setAnswer(data.answer || 'No answer found.');
    } catch (err: any) {
      setError(err.message || 'Error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pdf-qa-container">
      <h2>PDF Q&A</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <br /><br />
        <input
          type="text"
          placeholder="Ask a question about the PDF..."
          value={question}
          onChange={e => setQuestion(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
        <br /><br />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Ask'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {answer && <div className="pdf-qa-answer"><strong>Answer:</strong> {answer}</div>}
    </div>
  );
};

export default PdfQA;
