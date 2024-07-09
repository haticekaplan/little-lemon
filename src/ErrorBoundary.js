import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Hata durumu oluştuğunda state'i güncelle
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Hata raporunu konsola yazdır
    console.error('Caught an error:', error, errorInfo);
    // Hata yönetimi için ekstra işlemler yapabilirsiniz
    // Örneğin, hata durumunu bir hizmete bildirebilirsiniz
  }

  render() {
    if (this.state.hasError) {
      // Hata durumunda gösterilecek içerik
      return <h1>Something went wrong.</h1>;
    }

    // Hata olmadığında children componentleri render et
    return this.props.children;
  }
}

export default ErrorBoundary;
