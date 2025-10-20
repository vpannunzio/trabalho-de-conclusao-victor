@echo off
echo 🚀 Configurando repositório GitHub...

REM Verificar se já é um repositório git
if not exist ".git" (
    echo 📁 Inicializando repositório Git...
    git init
)

REM Adicionar remote do GitHub
echo 🔗 Adicionando remote do GitHub...
git remote add origin https://github.com/vpannunzio/trabalho-de-conclusao-victor.git

REM Verificar status
echo 📊 Status do repositório:
git status

echo ✅ Configuração concluída!
echo.
echo 📋 Próximos passos:
echo 1. git add .
echo 2. git commit -m "Initial commit: Automation Exercise test suite"
echo 3. git push -u origin main
echo.
echo 🎯 Após o push, o GitHub Actions será executado automaticamente!
pause
