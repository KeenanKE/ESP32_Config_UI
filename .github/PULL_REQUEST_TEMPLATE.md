<!--
Use this template for all pull requests. Keep PRs small and focused.
-->

# Summary
Provide a short, clear description of the change and why it is needed.

Related issue: <!-- e.g. #123 -->

---

## Type of change
- [ ] feat: (new feature)
- [ ] fix: (bug fix)
- [ ] docs: (documentation only changes)
- [ ] chore: (maintenance)
- [ ] test: (add or update tests)

---

## Checklist before merging
- [ ] The PR has a descriptive title and summary.
- [ ] I have linked any relevant issues (if applicable).
- [ ] I ran TypeScript typecheck locally: `npx tsc --noEmit`.
- [ ] The production build succeeds locally: `npm run build`.
- [ ] Linting passes (if applicable): `npm run lint`.
- [ ] Tests pass locally (if any): `npm test`.
- [ ] I have added/updated relevant documentation or README.
- [ ] I have considered security implications and did not commit secrets.

---

## How to test / QA steps
Provide step-by-step instructions to reproduce and test the change locally.

Example:
1. Checkout this branch
2. Run `npm ci` and `npm run dev`
3. Open http://localhost:5173 and verify X

---

## Notes for reviewers
Add any context reviewers should know (design decisions, caveats, migration steps).

## Release notes
If this PR requires a release note, add it here.
