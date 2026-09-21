import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("Portfolio render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#0c0c0c",
            color: "#f5f5f3",
            padding: "2rem",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
          <h1 style={{ marginBottom: "1rem" }}>Something went wrong</h1>
          <p style={{ color: "#8c8c88", marginBottom: "1.5rem" }}>
            Please refresh the page. If the problem continues, reach out via
            WhatsApp or email.
          </p>
          <a
            href="/"
            style={{
              background: "#f2a900",
              color: "#0c0c0c",
              padding: "0.75rem 1.5rem",
              borderRadius: "2px",
              fontWeight: 700,
            }}
          >
            Reload
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
