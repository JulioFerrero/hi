# Publishing `@vitrea/*`

This repo is configured to publish the workspace packages under the `@vitrea` npm scope.

## Prerequisites

- `npm login`
- npm user has access to the `@vitrea` org
- clean git state recommended

## Included Release Commands

- `pnpm changeset`
- `pnpm version:packages`
- `pnpm build:packages`
- `pnpm release`
- `pnpm release:versioned`

## Release Flow

1. Add a changeset describing the package changes:

   ```bash
   pnpm changeset
   ```

2. Apply version updates and internal dependency bumps:

   ```bash
   pnpm version:packages
   ```

3. Review the changed package versions and commit them.

4. Publish the packages:

   ```bash
   pnpm release
   ```

This runs the package builds first and then publishes through Changesets.

## Publish Only Newer Versions

If you want a single command that checks npm, builds only `@vitrea/*` packages whose local version is newer than the published one, and then publishes them, use:

```bash
pnpm release:versioned
```

Useful flags:

```bash
pnpm release:versioned --dry-run
pnpm release:versioned --no-build
```

This script:

- compares each workspace package version against npm
- prints the packages queued for release
- builds only the selected packages in workspace dependency order
- uses `pnpm publish --dry-run` per package for dry runs
- uses `changeset publish` for the real publish step

## Notes

- Packages publish with `publishConfig.access = "public"`.
- `@vitrea/editor` publishes `./vite` from built `dist` output.
- `@vitrea/create` is now publishable and exposes the `vitrea` CLI.
