# VPS Deploy

This project is prepared for the same GitHub Actions based VPS deployment pattern used by the other Codex projects.

Required GitHub repository secrets:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `VPS_PORT`

Deployment target:

- App directory: `/var/www/myfamilybank`
- Systemd service: `myfamilybank`
- Local app port: `3019`
- Domains: `myfamilybank.eu`, `www.myfamilybank.eu`

The workflow uploads the source, runs `npm ci`, builds the Next.js app, creates a systemd service, configures Nginx and requests a Let's Encrypt certificate if one does not already exist.
