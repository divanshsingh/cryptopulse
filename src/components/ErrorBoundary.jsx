import React, { Component } from 'react';
import ErrorComponents from './ErrorComponents'; // Assuming ErrorComponents is in the same directory

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorComponents />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
