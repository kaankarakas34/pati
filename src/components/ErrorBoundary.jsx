import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-brand-cream flex items-center justify-center p-6 text-center">
          <div className="bg-white p-8 rounded-3xl border-2 border-brand-navy max-w-md shadow-xl space-y-4">
            <span className="text-5xl block">🐾</span>
            <h2 className="text-2xl font-bold font-title text-brand-navy">Sayfa Yüklenirken Bir Hata Oluştu</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Teknik bir aksaklık meydana geldi. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
            </p>
            <div className="flex gap-3 justify-center pt-2">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-brand-navy text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-brand-navy-hover transition-all"
              >
                Ana Sayfa
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-brand-yellow text-brand-navy font-bold px-6 py-2.5 rounded-full text-sm hover:bg-brand-yellow-hover transition-all border border-brand-navy"
              >
                Yenile
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
