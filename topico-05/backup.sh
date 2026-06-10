#!/bin/bash

# Diretório que você quer fazer backup (altere conforme necessário)
DIRETORIO_ORIGEM="/var/www/html/"

# Diretório onde o arquivo de backup será salvo
DIRETORIO_DESTINO="/home/ivan/linux-seguranca-cloud/topico-05"

# Cria o nome do arquivo com a data atual (ex: backups-20260610.tar.gz)
NOME_ARQUIVO="backups-$(date +%Y%m%d).tar.gz"

# Política de retenção: Quantos dias de backup deseja manter (ex: 30 dias)
DIAS_RETENCAO=30

# 2. Compacta o diretório usando o comando tar
echo "A iniciar o backup..."
tar -czf "$DIRETORIO_DESTINO/$NOME_ARQUIVO" "$DIRETORIO_ORIGEM"

if [ $? -eq 0 ]; then
    echo "Backup concluído com sucesso: $NOME_DESTINO/$NOME_ARQUIVO"
    
    # 3. Opcional: Apaga backups antigos para poupar espaço
    echo "A limpar backups com mais de $DIAS_RETENCAO dias..."
    find "$DIRETORIO_DESTINO" -name "backups-*.tar.gz" -type f -mtime +$DIAS_RETENCAO -delete
    echo "Limpeza concluída."
else
    echo "Erro ao criar o backup!"
    exit 1
fi
