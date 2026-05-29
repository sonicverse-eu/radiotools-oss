Use Conventional Commits for all generated commit messages.

Format: <type>(<scope>): <subject>

Rules:
- type is required; scope is optional.
- Use one of: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert.
- Subject must be imperative, present tense, no trailing period, and <= 72 chars.
- Add ! after type/scope for breaking changes (e.g., feat(ui)!: drop legacy props).
- If needed, include a body and/or footers (e.g., BREAKING CHANGE: ...).
