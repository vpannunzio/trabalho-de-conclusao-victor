# Automation Exercise Test Suite

[![CI](https://github.com/vpannunzio/trabalho-de-conclusao-victor/workflows/Simple%20CI/badge.svg)](https://github.com/vpannunzio/trabalho-de-conclusao-victor/actions)
[![Tests](https://github.com/vpannunzio/trabalho-de-conclusao-victor/workflows/CI%20Pipeline/badge.svg)](https://github.com/vpannunzio/trabalho-de-conclusao-victor/actions)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Selenium](https://img.shields.io/badge/Selenium-4.15.0-orange.svg)](https://selenium.dev/)

Este projeto implementa automação de testes para a aplicação fictícia [Automation Exercise](https://automationexercise.com) usando Selenium WebDriver com **JavaScript/Node.js** e Mocha.

## 🚀 Vantagens do JavaScript para Automação

- ✅ **Configuração mais simples** - Menos dependências que Java
- ✅ **Execução mais rápida** - Node.js otimizado para I/O
- ✅ **Sintaxe mais concisa** - Menos boilerplate code
- ✅ **Ecosystem rico** - NPM com muitas bibliotecas
- ✅ **Fácil integração** - Com ferramentas de CI/CD
- ✅ **Curva de aprendizado menor** - Para quem já conhece JS

## Casos de Teste Implementados

1. **Test Case 1**: Register User - Registro completo de usuário
2. **Test Case 2**: Login User with correct email and password - Login com credenciais válidas
3. **Test Case 3**: Login User with incorrect email and password - Login com credenciais inválidas
4. **Test Case 4**: Logout User - Logout do usuário
5. **Test Case 5**: Register User with existing email - Registro com email já existente
6. **Test Case 6**: Contact Us Form - Formulário de contato com upload de arquivo
8. **Test Case 8**: Verify All Products and product detail page - Verificação de produtos
9. **Test Case 9**: Search Product - Busca de produtos
10. **Test Case 10**: Verify Subscription in home page - Assinatura na página inicial
15. **Test Case 15**: Place Order: Register while Checkout - Pedido completo com registro

## Tecnologias Utilizadas

- **Node.js 16+**
- **Selenium WebDriver 4.15.0**
- **Mocha 10.2.0** (test runner)
- **Chai 4.3.10** (assertions)
- **ChromeDriver, GeckoDriver, EdgeDriver** (drivers)

## Estrutura do Projeto

```
├── config/
│   └── testConfig.js              # Configurações do teste e criação do driver
├── pages/
│   ├── BasePage.js                # Classe base com métodos comuns
│   ├── HomePage.js                # Página inicial
│   ├── LoginPage.js               # Página de login/cadastro
│   ├── SignupPage.js              # Página de cadastro
│   ├── ContactUsPage.js           # Página de contato
│   ├── ProductsPage.js            # Página de produtos
│   ├── ProductDetailPage.js       # Página de detalhes do produto
│   ├── CartPage.js                # Página do carrinho
│   └── CheckoutPage.js            # Página de checkout
├── test/
│   ├── testCase1_RegisterUser.js
│   ├── testCase2_LoginUserCorrect.js
│   ├── testCase3_LoginUserIncorrect.js
│   ├── testCase4_LogoutUser.js
│   ├── testCase5_RegisterUserExistingEmail.js
│   ├── testCase6_ContactUsForm.js
│   ├── testCase8_VerifyAllProductsAndDetail.js
│   ├── testCase9_SearchProduct.js
│   ├── testCase10_VerifySubscriptionHomePage.js
│   └── testCase15_PlaceOrderRegisterWhileCheckout.js
├── package.json                   # Dependências e scripts
└── README.md                      # Esta documentação
```

## Pré-requisitos

- **Node.js 16.0.0** ou superior
- **NPM** (vem com Node.js)
- Navegador Chrome (ou Firefox/Edge)

## Instalação e Execução

### 1. Clone o repositório
```bash
git clone <repository-url>
cd automation-exercise-tests
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute todos os testes
```bash
npm test
```

### 4. Execute um teste específico
```bash
npm run test:single "Test Case 1"
```

### 5. Execute com navegador específico
```bash
# Chrome (padrão)
npm run test:chrome

# Firefox
npm run test:firefox

# Edge
npm run test:edge

# Headless
npm run test:headless
```

## Scripts Disponíveis

```json
{
  "test": "mocha test/**/*.js --timeout 60000",
  "test:single": "mocha test/**/*.js --grep",
  "test:headless": "HEADLESS=true mocha test/**/*.js --timeout 60000",
  "test:chrome": "BROWSER=chrome mocha test/**/*.js --timeout 60000",
  "test:firefox": "BROWSER=firefox mocha test/**/*.js --timeout 60000",
  "test:edge": "BROWSER=edge mocha test/**/*.js --timeout 60000"
}
```

## Configurações

### testConfig.js
```javascript
static BASE_URL = 'http://automationexercise.com';
static IMPLICIT_WAIT = 10000; // 10 seconds
static PAGE_LOAD_TIMEOUT = 30000; // 30 seconds
```

### Variáveis de Ambiente
- `BROWSER`: chrome, firefox, edge
- `HEADLESS`: true/false

## Comparação: Java vs JavaScript

| Aspecto | Java | JavaScript |
|---------|------|------------|
| **Configuração** | Maven + pom.xml | NPM + package.json |
| **Dependências** | Mais complexas | Mais simples |
| **Sintaxe** | Mais verbosa | Mais concisa |
| **Performance** | Boa | Excelente para I/O |
| **Ecosystem** | Maven Central | NPM (maior) |
| **Curva de aprendizado** | Média | Baixa |
| **IDE Support** | Excelente | Excelente |

## Exemplo de Teste

```javascript
describe('Test Case 1: Register User', function() {
    let driver;
    let homePage;
    let loginPage;
    let signupPage;

    before(async function() {
        driver = await TestConfig.createDefaultDriver();
        homePage = new HomePage(driver);
        loginPage = new LoginPage(driver);
        signupPage = new SignupPage(driver);
    });

    it('should register a new user successfully', async function() {
        await homePage.navigateToUrl(TestConfig.BASE_URL);
        await homePage.verifyHomePageIsVisible();
        // ... resto do teste
    });

    after(async function() {
        if (driver) {
            await driver.quit();
        }
    });
});
```

## Funcionalidades Implementadas

### Page Object Model
- Classes para cada página da aplicação
- Métodos reutilizáveis e organizados
- Encapsulamento de locators

### Async/Await
- Código mais limpo e legível
- Melhor tratamento de promises
- Menos callback hell

### Configuração Flexível
- Suporte a múltiplos navegadores
- Configuração via variáveis de ambiente
- Timeouts configuráveis

## Relatórios

Os relatórios do Mocha são exibidos no terminal. Para relatórios mais detalhados, você pode usar:

```bash
# Com relatório HTML
npm install --save-dev mochawesome
npx mocha test/**/*.js --reporter mochawesome
```

## Troubleshooting

### Problemas Comuns

1. **Driver não encontrado**: Os drivers são baixados automaticamente
2. **Timeout**: Aumente o timeout no package.json se necessário
3. **Elemento não encontrado**: Verifique se os locators estão corretos

### Logs
```bash
# Executar com debug
DEBUG=* npm test
```

## Vantagens da Versão JavaScript

1. **Menos código**: ~40% menos linhas que Java
2. **Setup mais rápido**: `npm install` vs configuração Maven
3. **Execução mais rápida**: Node.js é otimizado para I/O
4. **Sintaxe moderna**: Async/await, arrow functions
5. **Ecosystem rico**: NPM tem mais pacotes que Maven
6. **Fácil CI/CD**: Integração simples com GitHub Actions, Jenkins

## GitHub Actions CI/CD

O projeto inclui workflows do GitHub Actions para execução automática de testes:

### Workflows Configurados

1. **CI Pipeline** (`.github/workflows/ci.yml`)
   - Executa em push e pull requests
   - Testa em múltiplas versões do Node.js (16, 18, 20)
   - Testa em Chrome e Firefox
   - Inclui linting e auditoria de segurança
   - Executa casos de teste específicos em PRs

2. **Pipeline Completo** (`.github/workflows/automation-tests.yml`)
   - Execução em múltiplos SO (Ubuntu, Windows, macOS)
   - Testes em Chrome, Firefox e Edge
   - Análise de segurança
   - Relatórios de cobertura
   - Notificações de status

### Como Usar

1. **Fazer push para o repositório**:
   ```bash
   git add .
   git commit -m "Add new test case"
   git push origin main
   ```

2. **Verificar status no GitHub**:
   - Vá para a aba "Actions" no repositório
   - Veja o status dos workflows em execução
   - Baixe artefatos (screenshots, relatórios) se necessário

3. **Executar localmente com configuração CI**:
   ```bash
   npm run ci  # Lint + Audit + Tests
   npm run lint
   npm run test:coverage
   ```

### Configurações do CI

- **Timeout**: 60 segundos por teste
- **Retry**: 2 tentativas em caso de falha
- **Headless**: Todos os navegadores executam em modo headless
- **Artifacts**: Screenshots e relatórios são salvos por 7 dias

### Variáveis de Ambiente

```yaml
BROWSER: chrome|firefox|edge
HEADLESS: true|false
NODE_ENV: test
```

## Conclusão

A versão JavaScript oferece:
- ✅ **Simplicidade** na configuração e execução
- ✅ **Performance** superior para testes web
- ✅ **Manutenibilidade** com código mais limpo
- ✅ **Flexibilidade** com ecosystem NPM
- ✅ **Produtividade** com menos boilerplate
- ✅ **CI/CD** integrado com GitHub Actions

**Recomendação**: Use JavaScript se você quer uma solução mais simples, rápida e moderna para automação de testes web.
