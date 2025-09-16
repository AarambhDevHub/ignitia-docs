+++
title = "Change Log Guide"
description = "Change Log Guide for Ignitia"
sort_by = "weight"
insert_anchor_links = "right"
weight = 18
date = "2025-10-16"
+++

# Changelog

All notable changes to the Ignitia web framework will be documented in this file.

## [Unreleased]

### Planned
- OpenAPI/Swagger documentation generation
- Built-in metrics and observability
- Rate limiting per-route configuration
- Request validation middleware
- Database connection pooling utilities
- Session management middleware

## [0.2.0] - 2024-09-14

### Added
- **WebSocket Support**: Complete WebSocket implementation with connection management, message handling, and batch processing
- **Advanced Middleware Stack**:
  - `CompressionMiddleware`: Gzip and Brotli compression with configurable levels
  - `RateLimitingMiddleware`: Token bucket algorithm with per-IP and custom key extraction
  - `SecurityMiddleware`: HSTS, CSP, and security headers
  - `RequestIdMiddleware`: Request tracking with UUID and NanoID support
- **File Upload Support**: Multipart form data handling with streaming and temp file management
- **Enhanced Error Handling**: Custom error types, structured error responses, and middleware-based error handling
- **Server Configuration**: HTTP/2 configuration, TLS support, and protocol detection
- **Request Extractors**: `State<T>`, `Extension<T>`, `Form<T>` extractors for better ergonomics
- **Cookie Management**: Full cookie jar implementation with SameSite support

### Enhanced
- **Router Performance**: Compiled router with path optimization and faster matching
- **HTTP/2 Support**: Full HTTP/2 implementation with ALPN negotiation
- **TLS Integration**: rustls-based TLS with self-signed certificate generation
- **Memory Management**: Optimized request/response handling with reduced allocations
- **Concurrent Handling**: Improved async processing with better error propagation

### Fixed
- WebSocket upgrade handling race conditions
- Path parameter extraction with special characters
- Memory leaks in long-running connections
- HTTP/2 stream multiplexing issues
- CORS preflight request handling

### Changed
- **Breaking**: Middleware trait now uses separate `before` and `after` methods
- **Breaking**: Error handling moved to dedicated error types and responses
- Router API now uses builder pattern consistently
- Response building simplified with `ResponseBuilder`

## [0.1.2] - 2024-08-15

### Added
- Basic middleware support with `LoggerMiddleware`
- Path parameter extraction with `:param` syntax
- Query parameter parsing and extraction
- JSON request/response handling
- Basic error handling and custom error types

### Fixed
- Route matching precedence issues
- JSON deserialization error messages
- HTTP method parsing edge cases

## [0.1.1] - 2024-08-05

### Added
- Wildcard route matching with `*param` syntax
- Nested router support for modular applications
- Extensions system for request-scoped data
- Basic HTTP status code utilities

### Fixed
- Route compilation performance issues
- Memory usage in request parsing
- Header handling for non-ASCII values

## [0.1.0] - 2024-08-01

### Added
- Initial release of Ignitia web framework
- Core HTTP server based on Hyper
- Basic routing system with method-specific handlers
- Request and Response abstractions
- Async/await support throughout
- Builder pattern for server and router configuration
- Development-focused error messages and debugging
- MIT license and initial documentation

### Features
- HTTP/1.1 support with keep-alive
- Route handlers with automatic extraction
- Minimalist API inspired by modern web frameworks
- Zero-config development server
- Fast compilation times
- Memory-safe request handling

***

## Version Numbering

Ignitia follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

## Migration Guides

For breaking changes and migration instructions between major versions, see our [Migration Guide](MIGRATION.md).

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and contribution guidelines.

## Security

Security vulnerabilities should be reported privately. See our [Security Policy](SECURITY.md) for details.
