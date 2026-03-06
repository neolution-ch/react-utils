# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- `useConstructor` hook using state instead of ref for React 19 compatibility.

### Added

- `useConstructor` hook that executes a provided callback only once during the component's lifecycle, similar to a constructor.
