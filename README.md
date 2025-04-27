# Cambodia Charity

## Introduction

Welcome to the Cambodia Charity project! This monorepo includes a Next.js frontend and a Nest.js backend.

## Project Structure

- `apps/web`: Next.js frontend
- `apps/api`: Nest.js backend
- `packages/config`: Shared configuration
- `packages/database`: Database schema and client
- `packages/types`: Shared TypeScript types
- `packages/ui`: Shared UI components

## Setup

1. Install dependencies: `pnpm install`
2. Set up Docker environment: `docker-compose up`
3. Configure environment variables

## Usage

- Start development server: `pnpm dev`
- Build project: `pnpm build`
- Run tests: `pnpm test`
- Access frontend: `http://localhost:3000`
- Access backend: `http://localhost:4000`

## Contributing

We welcome contributions to the Cambodia Charity project! Please follow these guidelines:

- **Code of conduct**: Follow the project's code of conduct to ensure a welcoming and inclusive environment for all contributors.
- **Issue reporting**: Before opening a new issue, check if it has already been reported. If not, provide a clear and detailed description of the problem, including steps to reproduce it, expected behavior, and any relevant screenshots or logs.
- **Feature requests**: When suggesting a new feature, provide a clear and detailed description of the proposed functionality, including its benefits and any potential drawbacks.
- **Pull requests**: 
  - Fork the repository and create a new branch for your changes.
  - Ensure your code follows the project's coding standards and conventions.
  - Write clear and concise commit messages.
  - Include tests for your changes, if applicable.
  - Update documentation, if necessary.
  - Ensure your changes do not introduce any new issues or regressions.
  - Submit a pull request with a clear and detailed description of your changes, including any relevant issue numbers.
- **Code reviews**: Be respectful and constructive when reviewing others' code. Provide clear and actionable feedback, and be open to receiving feedback on your own contributions.
- **Testing**: Ensure that your changes are thoroughly tested, including unit tests, integration tests, and end-to-end tests, as applicable.
- **Documentation**: Keep the documentation up-to-date with your changes. This includes updating the `README.md` file, as well as any other relevant documentation files.
- **Commit messages**: Write clear and concise commit messages that describe the purpose of the change. Use the imperative mood and follow the format: `type(scope): subject`.
- **Branch naming**: Use descriptive branch names that reflect the purpose of the branch. For example, use `feature/add-new-feature` for a new feature or `bugfix/fix-issue` for a bug fix.
- **Coding standards**: Follow the project's coding standards and conventions, including those defined in the shared ESLint configuration in `packages/config`.

## License

This project is licensed under the MIT License.
