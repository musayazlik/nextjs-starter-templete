# Next.js Project Structure

This document provides a detailed overview of the folder structure for this Next.js project. The goal of this structure is to maintain clarity, scalability, and ease of collaboration for developers.

---

## Directory Structure

```
src/
  app/          -> Next.js App Directory for routing and layouts
  components/   -> Reusable React components
  styles/       -> Global and component-specific styles
  assets/       -> Static files such as images, icons, and fonts
  data/         -> Static data or data-fetching utilities
  lib/          -> Shared utilities, custom hooks, and general-purpose functions
  context/      -> React Context API definitions
  store/        -> State management (Redux/Zustand)
  config/       -> Project configuration files
  hooks/        -> Custom React hooks
  utils/        -> General utility functions
  services/     -> API services and external integrations
  middleware/   -> Middleware logic for request handling
  tests/        -> Unit and integration tests
  types/        -> TypeScript type definitions
  locales/      -> Language translation files
  constants/    -> Project constants like routes, roles, and settings
```

---

## Folder Descriptions

### 1. `src/app/`
This is the core folder for Next.js routing and layout logic when using the App Router. It replaces the `app/` directory and provides enhanced features like nested layouts, server components, and React Server Actions.

**Structure Example:**
```
src/app/
  layout.tsx       -> Root layout for the application
  page.tsx         -> Default route (homepage)
  dashboard/
    layout.tsx     -> Layout for dashboard-related routes
    page.tsx       -> Dashboard homepage
    settings/
      page.tsx     -> Dashboard settings page
  api/
    route.ts       -> API route handlers
```

- **`layout.tsx`**: Defines the layout for a route or set of routes.
- **`page.tsx`**: Defines a specific route.
- **`api/`**: Contains API route handlers using the App Router.

### 2. `src/components/`
This folder contains reusable React components that can be used across the application. Components are further organized into subfolders based on their purpose.

**Example:**
```
src/components/
  common/    -> General-purpose components (e.g., Button, Card, Modal)
  layout/    -> Layout-related components (e.g., Header, Footer)
  forms/     -> Form-related components (e.g., Input, Checkbox)
```

### 3. `src/styles/`
This folder contains all global and component-specific styles. You can use CSS, SCSS, Tailwind CSS, or any other preferred styling method.

**Example:**
```
src/styles/
  globals.css    -> Global styles
  variables.scss -> Sass variables
  mixins.scss    -> Sass mixins
```

### 4. `src/assets/`
This folder is used for storing static files such as images, icons, and fonts.

**Example:**
```
src/assets/
  images/    -> Images used in the app
  icons/     -> SVG or icon files
  fonts/     -> Custom font files
```

### 5. `src/data/`
This folder contains static data files or utilities for fetching data from APIs.

**Example:**
```
src/data/
  mockData.json -> Mock data for testing
  menuItems.ts  -> Static menu items for navigation
```

### 6. `src/lib/`
This folder holds reusable utilities, custom hooks, and shared code.

**Example:**
```
src/lib/
  fetcher.ts     -> Utility for making API calls
  useDebounce.ts -> Custom hook for debouncing
```

### 7. `src/context/`
Contains React Context definitions for managing global application state.

**Example:**
```
src/context/
  AuthContext.tsx -> Authentication context
  ThemeContext.tsx -> Theme management context
```

### 8. `src/store/`
Holds state management logic using tools like Redux or Zustand.

**Example:**
```
src/store/
  store.ts       -> Redux/Zustand store configuration
  userSlice.ts   -> Redux slice for user state
```

### 9. `src/config/`
Configuration files for the project.

**Example:**
```
src/config/
  apiConfig.ts  -> API base URLs and keys
  seoConfig.ts  -> SEO-related metadata
```

### 10. `src/hooks/`
Custom React hooks that can be reused across the application.

**Example:**
```
src/hooks/
  useAuth.ts    -> Hook for authentication logic
  useFetch.ts   -> Hook for fetching data
```

### 11. `src/utils/`
General-purpose utility functions.

**Example:**
```
src/utils/
  formatDate.ts -> Utility for formatting dates
  capitalize.ts -> Utility for capitalizing strings
```

### 12. `src/services/`
API services and external integrations.

**Example:**
```
src/services/
  userService.ts     -> User-related API calls
  paymentService.ts  -> Payment processing logic
```

### 13. `src/middleware/`
Middleware functions for handling requests, authentication, or logging.

**Example:**
```
src/middleware/
  authMiddleware.ts -> Middleware for protecting routes
```

### 14. `src/tests/`
Contains all unit and integration tests for the application.

**Example:**
```
src/tests/
  Button.test.tsx  -> Unit test for Button component
  api.test.ts      -> Integration tests for API endpoints
```

### 15. `src/types/`
TypeScript type definitions to ensure type safety.

**Example:**
```
src/types/
  user.ts        -> User-related types
  apiResponses.ts -> Types for API responses
```

### 16. `src/locales/`
Language files for internationalization (i18n).

**Example:**
```
src/locales/
  en.json -> English translations
  tr.json -> Turkish translations
```

### 17. `src/constants/`
Stores constant values like routes, roles, or settings.

**Example:**
```
src/constants/
  routes.ts  -> Application routes
  roles.ts   -> User roles
```

---

## Best Practices

1. **Component Reusability:** Keep components modular and reusable. Group similar components under appropriate subdirectories.
2. **Separation of Concerns:** Organize code based on its purpose (e.g., hooks in `src/hooks/`, API calls in `src/services/`).
3. **Type Safety:** Use TypeScript and define types in `src/types/` to improve code reliability.
4. **Consistency:** Follow consistent naming conventions for files and folders.
5. **Documentation:** Add comments or documentation for complex functions, hooks, or components.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Contributing

Feel free to open issues or submit pull requests for any suggestions or improvements. Please follow the folder structure and naming conventions outlined in this document.

---

## License
This project is licensed under the [MIT License](LICENSE).
