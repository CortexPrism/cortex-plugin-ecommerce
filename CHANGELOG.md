# Changelog


## [1.0.1] — 2026-06-22

### Changed

- Migrated to CortexPrism v0.51.0 plugin API
- Renamed `ToolResult` → `ToolCallResult` to match SDK types
- Switched type imports from local `types.ts` to `cortex/plugins` module
- Updated `peerDependencies.cortex` to `>=0.51.0`
- Standardized UI settings: `default` → `defaultValue`, `enum` → `options` for select fields
- All code passes `deno fmt` and `deno lint`
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project setup

## [1.0.0] — 2026-06-15

### Added

- Initial release of cortex-plugin-ecommerce
- `hello` capability — Greet a person
- `add` capability — Add two numbers
- `fetchData` capability — Fetch data from external APIs

### Changed

- N/A

### Fixed

- N/A

### Deprecated

- N/A

### Removed

- N/A

### Security

- N/A

---

## How to Write Changelog Entries

When you make changes, add entries under `[Unreleased]` following these guidelines:

- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** for vulnerability fixes

When you release a new version:

1. Rename `[Unreleased]` to `[VERSION] — DATE` (e.g., `[1.1.0] — 2026-06-20`)
2. Add a new `[Unreleased]` section at the top
3. Update version in `manifest.json`
4. Commit and tag: `git tag v1.1.0`

Example:

```markdown
## [1.1.0] — 2026-06-20

### Added

- New `multiply` capability

### Fixed

- Timeout handling in `fetchData`

### Security

- Added input validation to prevent injection attacks
```
