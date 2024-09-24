# Bofa

Steps for creating the workspace

`npx create-nx-workspace@latest bofa --preset=react-monorepo`

```javascript

NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

√ Application name · bps-scorecard
√ Which bundler would you like to use? · webpack
√ Test runner to use for end to end (E2E) tests · playwright
√ Default stylesheet format · tailwind
√ Which CI provider would you like to use? · skip
√ Would you like remote caching to make your build faster? · skip

NX   Creating your v19.8.0 workspace.

√ Installing dependencies with npm
√ Successfully created the workspace: bofa.
```

Problem with git 

```text
Error updating changes: detected dubious ownership in repository at 'C:/Users/Oscar-Lagatta/OneDrive/Escritorio/bofa' 'C:/Users/Oscar-Lagatta/OneDrive/Escritorio/bofa' is owned by: BUILTIN/Administrators (S-1-5-32-544) but the current user is: Oscar/Oscar-Lagatta (S-1-5-21-4128374048-3783536674-2470984426-1001) To add an exception for this directory, call: 
git config --global --add safe.directory C:/Users/Oscar-Lagatta/OneDrive/Escritorio/bofa

```

When setting up Shadcn installing the packages I see the following errors


`npm install tailwindcss-animate class-variance-authority clsx tailwind-merge`
```text
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: eslint-plugin-import@2.30.0
npm ERR! Found: eslint@9.11.1
npm ERR! node_modules/eslint
npm ERR!   peer eslint@"^6.0.0 || ^7.0.0 || >=8.0.0" from @eslint-community/eslint-utils@4.4.0
npm ERR!   node_modules/@eslint-community/eslint-utils
npm ERR!     @eslint-community/eslint-utils@"^4.4.0" from @typescript-eslint/utils@8.7.0
npm ERR!     node_modules/@typescript-eslint/utils
npm ERR!       @typescript-eslint/utils@"^8.0.0" from @nx/eslint-plugin@19.8.0
npm ERR!       node_modules/@nx/eslint-plugin
npm ERR!         @nx/eslint-plugin@"19.8.0" from @nrwl/eslint-plugin-nx@19.8.0
npm ERR!         node_modules/@nrwl/eslint-plugin-nx
npm ERR!         1 more (the root project)
npm ERR!       3 more (@typescript-eslint/eslint-plugin, ...)
npm ERR!     @eslint-community/eslint-utils@"^4.2.0" from eslint@9.11.1
npm ERR!   peer eslint@"^8.0.0 || ^9.0.0" from @nx/eslint@19.8.0
npm ERR!   node_modules/@nx/eslint
npm ERR!     @nx/eslint@"19.8.0" from @nx/cypress@19.8.0
npm ERR!     node_modules/@nx/cypress
npm ERR!       @nx/cypress@"19.8.0" from @nrwl/cypress@19.8.0
npm ERR!       node_modules/@nrwl/cypress
npm ERR!         @nrwl/cypress@"19.8.0" from @nx/cypress@19.8.0
npm ERR!       1 more (the root project)
npm ERR!     @nx/eslint@"19.8.0" from @nx/linter@19.8.0
npm ERR!     node_modules/@nx/linter
npm ERR!       @nx/linter@"19.8.0" from @nx/eslint@19.8.0
npm ERR!     3 more (@nx/playwright, @nx/react, the root project)
npm ERR!   7 more (@typescript-eslint/eslint-plugin, ...)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@"^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8" from eslint-plugin-import@2.30.0
npm ERR! node_modules/eslint-plugin-import
npm ERR!   dev eslint-plugin-import@"2.30.0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: eslint@8.57.1
npm ERR! node_modules/eslint
npm ERR!   peer eslint@"^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8" from eslint-plugin-import@2.30.0
npm ERR!   node_modules/eslint-plugin-import
npm ERR!     dev eslint-plugin-import@"2.30.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:

```
# To Solve the issue

`npm install eslint@^8`

`The installation brings the "eslint": "^9.8.0" to "eslint": "^8.57.1"`

This should bring the eslint version compatible with eslint-plugin-import@2.30.0

To verify the application created by the NX cli we run

`nx show project bps-scorecard --web` that will list the different tasks
serve, build, lint, preview, test, etc...

If you're using the new-york style, install @radix-ui/react-icons:

`npm install @radix-ui/react-icons`

## NX   Capabilities in @nx/react:

`nx list @nx/react`

### GENERATORS

```text
init : Initialize the `@nx/react` plugin.

nx g @nx/react:application 
application : Create a React application.

nx g @nx/react:library 
library : Create a React library.

nx g @nx/react:component 
component : Create a React component.


redux : Create a Redux slice for a project.
storybook-configuration : Set up storybook for a React app or library.
component-story : Generate storybook story for a React component
stories : Create stories/specs for all components declared in an app or library.
component-cypress-spec : Create a Cypress spec for a UI component that has a story.
hook : Create a hook.
host : Generate a host react application
remote : Generate a remote react application
cypress-component-configuration : Setup Cypress component testing for a React project
component-test : Generate a Cypress component test for a React component
setup-tailwind : Set up Tailwind configuration for a project.
setup-ssr : Set up SSR configuration for a project.
federate-module : Federate a module.

EXECUTORS/BUILDERS

module-federation-dev-server : Serve a host or remote application.
module-federation-ssr-dev-server : Serve a host application along with it's known remotes.
module-federation-static-server : Serve a host and its remotes statically.


```

