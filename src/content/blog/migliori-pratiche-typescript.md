---
title: "Le migliori pratiche per TypeScript"
date: "2024-01-10"
excerpt: "Scopri come scrivere codice TypeScript più pulito e manutenibile seguendo le best practices del settore. Una guida pratica con esempi concreti."
tags: ["TypeScript", "JavaScript", "Best Practices", "Code Quality"]
author: "Nome Cognome"
readTime: "12 min"
---

# Le migliori pratiche per TypeScript

TypeScript ha rivoluzionato il modo in cui scriviamo JavaScript, aggiungendo un sistema di tipi robusto che ci aiuta a catturare errori in fase di compilazione. Tuttavia, per sfruttare al massimo le sue potenzialità, è importante seguire alcune best practices.

## 1. Configurazione tsconfig.json

### Strict Mode
Abilita sempre la modalità strict:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noImplicitReturns": true
  }
}
```

### Path Mapping
Configura i path per import più puliti:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}
```

## 2. Tipizzazione efficace

### Prefer Interfaces over Types
Per oggetti, preferisci interfaces:

```typescript
// ✅ Buono
interface User {
  id: number
  name: string
  email: string
}

// ❌ Evita per oggetti semplici
type User = {
  id: number
  name: string
  email: string
}
```

### Union Types per valori specifici
Usa union types per valori limitati:

```typescript
// ✅ Type safety
type Status = 'pending' | 'approved' | 'rejected'

interface Request {
  id: string
  status: Status
}

// ❌ Troppo generico
interface Request {
  id: string
  status: string
}
```

### Generic Types
Usa generics per codice riutilizzabile:

```typescript
// ✅ Generico e type-safe
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

// Utilizzo
const userResponse: ApiResponse<User> = await fetchUser()
const postsResponse: ApiResponse<Post[]> = await fetchPosts()
```

## 3. Gestione degli errori

### Discriminated Unions per Error Handling
Crea types per la gestione degli errori:

```typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E }

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const user = await api.getUser(id)
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: error as Error }
  }
}

// Utilizzo
const result = await fetchUser('123')
if (result.success) {
  console.log(result.data.name) // TypeScript sa che data è User
} else {
  console.error(result.error.message) // TypeScript sa che error è Error
}
```

## 4. Utility Types

### Partial per aggiornamenti
Usa Partial per update parziali:

```typescript
interface User {
  id: number
  name: string
  email: string
  age: number
}

function updateUser(id: number, updates: Partial<User>) {
  // updates può contenere solo alcuni campi di User
}

updateUser(1, { name: 'New Name' }) // ✅ Valido
updateUser(1, { invalidField: 'value' }) // ❌ Errore TypeScript
```

### Pick e Omit per subset
Crea nuovi types da quelli esistenti:

```typescript
// Solo alcuni campi
type UserPreview = Pick<User, 'id' | 'name'>

// Tutti tranne alcuni campi
type CreateUserRequest = Omit<User, 'id'>

function createUser(data: CreateUserRequest): Promise<User> {
  // data non ha 'id' perché verrà generato
}
```

## 5. Funzioni e metodi

### Function Overloads
Usa overloads per funzioni con comportamenti diversi:

```typescript
// Overloads
function format(date: Date): string
function format(date: Date, pattern: string): string
function format(timestamp: number): string

// Implementation
function format(date: Date | number, pattern?: string): string {
  const d = date instanceof Date ? date : new Date(date)
  return pattern ? customFormat(d, pattern) : d.toISOString()
}
```

### Return Type Annotations
Specifica il tipo di ritorno per chiarezza:

```typescript
// ✅ Chiaro cosa ritorna
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}

// ✅ Per async functions
async function fetchUser(id: string): Promise<User | null> {
  // implementation
}
```

## 6. Classes e OOP

### Abstract Classes
Usa abstract classes per base classes:

```typescript
abstract class Animal {
  protected name: string

  constructor(name: string) {
    this.name = name
  }

  abstract makeSound(): string

  // Metodo concreto
  move(): string {
    return `${this.name} is moving`
  }
}

class Dog extends Animal {
  makeSound(): string {
    return 'Woof!'
  }
}
```

### Access Modifiers
Usa i modificatori di accesso appropriati:

```typescript
class BankAccount {
  private balance: number = 0        // Solo internamente
  protected accountType: string     // Sottoclassi possono accedere
  public readonly accountNumber: string // Pubblico ma read-only

  constructor(accountNumber: string, accountType: string) {
    this.accountNumber = accountNumber
    this.accountType = accountType
  }

  private validateAmount(amount: number): boolean {
    return amount > 0
  }

  public deposit(amount: number): void {
    if (this.validateAmount(amount)) {
      this.balance += amount
    }
  }
}
```

## 7. Advanced Patterns

### Builder Pattern con TypeScript
Crea builders type-safe:

```typescript
class QueryBuilder<T> {
  private filters: Array<(item: T) => boolean> = []
  private sortFn?: (a: T, b: T) => number

  where(predicate: (item: T) => boolean): QueryBuilder<T> {
    this.filters.push(predicate)
    return this
  }

  orderBy(fn: (a: T, b: T) => number): QueryBuilder<T> {
    this.sortFn = fn
    return this
  }

  execute(data: T[]): T[] {
    let result = data.filter(item => 
      this.filters.every(filter => filter(item))
    )
    
    if (this.sortFn) {
      result = result.sort(this.sortFn)
    }
    
    return result
  }
}

// Utilizzo
const users = new QueryBuilder<User>()
  .where(user => user.age >= 18)
  .where(user => user.isActive)
  .orderBy((a, b) => a.name.localeCompare(b.name))
  .execute(allUsers)
```

### Conditional Types
Usa conditional types per logica avanzata:

```typescript
type NonNullable<T> = T extends null | undefined ? never : T

type ApiKeys<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]

// Solo le proprietà non-function
type UserApiKeys = ApiKeys<User> // 'id' | 'name' | 'email' | 'age'
```

## 8. Testing con TypeScript

### Type-safe test utilities
Crea utilities per testing:

```typescript
// Test helper type-safe
function createMockUser(overrides: Partial<User> = {}): User {
  return {
    id: 1,
    name: 'Test User',
    email: 'test@example.com',
    age: 25,
    ...overrides
  }
}

// Mock con type safety
interface MockApiService {
  getUser: jest.MockedFunction<typeof apiService.getUser>
  updateUser: jest.MockedFunction<typeof apiService.updateUser>
}

const mockApiService = apiService as jest.Mocked<typeof apiService>
```

## 9. Performance Tips

### Prefer const assertions
Usa const assertions per literal types:

```typescript
// ✅ Type è readonly tuple
const colors = ['red', 'green', 'blue'] as const
type Color = typeof colors[number] // 'red' | 'green' | 'blue'

// ✅ Object readonly
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
} as const
```

### Lazy Type Evaluation
Usa type guards per performance:

```typescript
function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' && 
         obj !== null && 
         'id' in obj && 
         'name' in obj
}

// Uso efficiente
function processData(data: unknown[]) {
  const users = data.filter(isUser) // TypeScript sa che sono User[]
  users.forEach(user => console.log(user.name)) // Type-safe
}
```

## Conclusioni

TypeScript diventa potente quando viene usato correttamente. Queste best practices ti aiuteranno a:

- Scrivere codice più sicuro e manutenibile
- Ridurre bugs in production
- Migliorare la developer experience
- Facilitare il refactoring

Ricorda: TypeScript è un investimento a lungo termine che ripaga con codice di qualità superiore e meno tempo speso nel debugging.

---

*Vuoi approfondire qualche aspetto specifico di TypeScript? Contattami sui social o lascia un commento!*