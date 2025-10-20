#!/bin/bash

# Script para configurar o repositório GitHub
echo "🚀 Configurando repositório GitHub..."

# Verificar se já é um repositório git
if [ ! -d ".git" ]; then
    echo "📁 Inicializando repositório Git..."
    git init
fi

# Adicionar remote do GitHub
echo "🔗 Adicionando remote do GitHub..."
git remote add origin https://github.com/vpannunzio/trabalho-de-conclusao-victor.git

# Verificar status
echo "📊 Status do repositório:"
git status

echo "✅ Configuração concluída!"
echo ""
echo "📋 Próximos passos:"
echo "1. git add ."
echo "2. git commit -m 'Initial commit: Automation Exercise test suite'"
echo "3. git push -u origin main"
echo ""
echo "🎯 Após o push, o GitHub Actions será executado automaticamente!"
