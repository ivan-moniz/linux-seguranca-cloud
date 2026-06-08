# Comandos Utilizados Trabalho de Grupo 7

## Criar grupos

sudo groupadd admins && sudo groupadd webops
sudo groupadd auditores && sudo groupadd visitantes

## Criar utilizadores

sudo useradd -m -s /bin/bash -G admins,sudo adminuser
sudo useradd -m -s /bin/bash -G webops webuser
sudo useradd -m -s /bin/bash -G auditores auditor1
sudo useradd -m -s /usr/sbin/nologin -G visitantes visitor1

## Criar estrutura e aplicar permissões

sudo mkdir -p /home/projeto-web/{public,config,logs,docs}
sudo chown adminuser:admins /home/projeto-web/ && sudo chmod 750 /home/projeto-web/
sudo chown adminuser:webops /home/projeto-web/public && sudo chmod 775 /home/projeto-web/public
sudo chown adminuser:admins /home/projeto-web/config && sudo chmod 750 /home/projeto-web/config
sudo chown adminuser:auditores /home/projeto-web/logs && sudo chmod 750 /home/projeto-web/logs
sudo chown adminuser:visitantes /home/projeto-web/docs && sudo chmod 755 /home/projeto-web/docs


